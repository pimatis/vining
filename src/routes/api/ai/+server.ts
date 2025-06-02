import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { enhanceImagePrompt } from "$lib/prompts/enhanceImage";
import { Buffer } from "buffer";

const enhanceImage = async (imageFile: File): Promise<string> => {
  const GEMINI_API_KEY = import.meta.env.VITE_APP_GEMINI_KEY;

  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY not found in environment variables");
  }

  const buffer = Buffer.from(await imageFile.arrayBuffer());
  const imageBase64 = buffer.toString("base64");

  const requestBody = {
    contents: [
      {
        parts: [
          { text: enhanceImagePrompt() },
          {
            inline_data: {
              mime_type: "image/jpeg",
              data: imageBase64,
            },
          },
        ],
      },
    ],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"],
    },
  };

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Gemini API Error:", errorData);
    throw new Error(
      `Gemini API error: ${errorData.error?.message || "Unknown error"}`,
    );
  }

  const data = await response.json();

  if (data?.candidates?.[0]?.content?.parts) {
    const parts = data.candidates[0].content.parts;

    for (const part of parts) {
      if (part.inlineData?.data) {
        return part.inlineData.data;
      }
    }
  }

  throw new Error("No enhanced image data received from Gemini API");
};

export const POST: RequestHandler = async ({ request }) => {
  try {
    const formData = await request.formData();
    const imageFile = formData.get("image") as File;

    if (!imageFile) {
      return json({ error: "No image file provided" }, { status: 400 });
    }

    if (!imageFile.type.startsWith("image/")) {
      return json(
        { error: "Invalid file type. Please upload an image." },
        { status: 400 },
      );
    }

    const maxSize = 50 * 1024 * 1024;
    if (imageFile.size > maxSize) {
      return json(
        { error: "File size too large. Maximum size is 50MB." },
        { status: 400 },
      );
    }

    const enhancedImageBase64 = await enhanceImage(imageFile);

    return json({
      success: true,
      enhancedImage: enhancedImageBase64,
      originalFileName: imageFile.name,
    });
  } catch (error) {
    const errorMessage = (error as Error).message;

    if (errorMessage.includes("overloaded") || errorMessage.includes("503")) {
      return json(
        {
          error:
            "Service is currently busy. Please try again in a few minutes.",
        },
        { status: 503 },
      );
    }

    if (errorMessage.includes("API error")) {
      return json(
        { error: "AI service error. Please try again later." },
        { status: 502 },
      );
    }

    return json(
      { error: "Failed to enhance image. Please try again." },
      { status: 500 },
    );
  }
};
