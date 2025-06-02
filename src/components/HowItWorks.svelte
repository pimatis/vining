<script>
    import { Upload, Wand2, Download } from "lucide-svelte";

    const steps = [
        {
            number: "01",
            title: "Upload Your Photo",
            description:
                "Simply drag and drop your image or click to browse. We support JPG, PNG, and WEBP formats.",
            icon: Upload,
        },
        {
            number: "02",
            title: "AI Enhancement",
            description:
                "Our advanced AI algorithms automatically analyze and enhance your photo's quality, colors, and sharpness.",
            icon: Wand2,
        },
        {
            number: "03",
            title: "Download Result",
            description:
                "Get your enhanced photo instantly. Download in high quality with improved clarity and vibrant colors.",
            icon: Download,
        },
    ];
</script>

<section id="how" class="w-full py-12 md:py-16 lg:py-20">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            How <span class="text-[#a18d6e]">Vining</span> Works
        </h1>

        <p class="text-xs md:text-sm lg:text-base opacity-70 max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto mb-16 leading-relaxed">
            Transform your photos in just three simple steps. No technical knowledge required, no registration needed.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {#each steps as step, index}
                <div class="relative border border-[#a18d6e]/20 rounded-lg p-4 md:p-6 lg:p-8 hover:bg-[#a18d6e]/5 transition-colors duration-200">
                    <div class="absolute -top-3 -left-3 w-10 h-10 md:w-12 md:h-12 bg-[#a18d6e] rounded-full flex items-center justify-center">
                        <span class="text-xs md:text-sm lg:text-base font-bold text-white">{step.number}</span>
                    </div>

                    <div class="text-left pt-4">
                        <div class="mb-6">
                            <div class="w-16 h-16 bg-[#a18d6e]/10 rounded-full flex items-center justify-center mx-auto">
                                <svelte:component this={step.icon} class="w-8 h-8 md:w-6 md:h-6 text-[#a18d6e]" />
                            </div>
                        </div>

                        <h1 class="text-base md:text-lg lg:text-xl font-bold text-black mb-3">
                            {step.title}
                        </h1>
                        <p class="text-xs md:text-sm lg:text-base opacity-70 leading-relaxed">
                            {step.description}
                        </p>
                    </div>

                    {#if index < steps.length - 1}
                        <div class="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-[#a18d6e]/20 transform -translate-y-1/2 z-10">
                            <div class="absolute -right-1 top-1/2 w-2 h-2 bg-[#a18d6e] rounded-full transform -translate-y-1/2"></div>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>
