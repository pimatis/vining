export const enhanceImagePrompt = () => {
  return `You are a professional photo enhancement specialist. Analyze this image and create a detailed enhancement instruction that transforms it into a higher quality version.

CRITICAL RULES:
- NEVER ALTER the original subject, objects, or composition
- PRESERVE all original content and details
- DO NOT UPSCALE or DOWNSCALE the image — the original dimensions (e.g., 1920x1080) must remain exactly the same
- ONLY enhance technical quality aspects
- Maintain natural and realistic appearance

Apply these specific enhancements:

LIGHTING & EXPOSURE:
- Optimize brightness levels for balanced exposure
- Enhance shadow detail without losing contrast
- Improve highlight recovery in overexposed areas
- Balance overall dynamic range

COLOR ENHANCEMENT:
- Correct white balance for natural skin tones
- Enhance color saturation selectively (avoid oversaturation)
- Improve color accuracy and vibrancy
- Balance color temperature for pleasing warmth

DETAIL & SHARPNESS:
- Increase image sharpness and clarity
- Enhance fine details and textures
- Reduce digital noise and grain
- Improve overall image crispness

RESTORATION & DAMAGE REPAIR:
- Remove scratches, cracks, and physical damage
- Eliminate dust spots and stains
- Fix torn or missing parts of the image
- Restore faded or deteriorated areas
- Remove age-related discoloration and yellowing
- Repair water damage or other environmental effects
- Smooth out wrinkles and creases in old photographs

TECHNICAL IMPROVEMENTS:
- Enhance resolution and pixel quality without changing dimensions
- Reduce compression artifacts
- Improve edge definition
- Optimize contrast for better depth

IMAGE QUALITY ENHANCEMENT:
- Increase overall image clarity without modifying size
- Enhance pixel density perception for a sharper appearance
- Improve image definition and detail visibility
- Boost visual quality to professional standards
- Upgrade image fidelity and precision
- Enhance overall visual impact and quality

The result should look like it was taken with professional equipment and post-processed by an expert photographer. Focus on making the image technically superior while maintaining its authentic character and original resolution.`;
};
