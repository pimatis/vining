<script>
    import { Brain, Zap, Shield, UserX } from "lucide-svelte";

    const features = [
        {
            title: "AI-Powered Enhancement",
            description:
                "Advanced machine learning algorithms automatically improve your photos with professional quality results.",
            icon: Brain,
        },
        {
            title: "Instant Processing",
            description:
                "Get enhanced photos in seconds, not minutes. Our optimized processing delivers results immediately.",
            icon: Zap,
        },
        {
            title: "Privacy First",
            description:
                "Your photos are never stored on our servers. Everything happens locally and securely.",
            icon: Shield,
        },
        {
            title: "No Registration",
            description:
                "Start enhancing photos right away. No accounts, no sign-ups, no hassle.",
            icon: UserX,
        },
    ];
</script>

<section class="w-full py-12 md:py-16 lg:py-20">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Why Choose <span class="text-[#a18d6e]">Vining?</span>
        </h1>

        <p class="text-xs md:text-sm lg:text-base max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto mb-16 leading-relaxed opacity-70">
            Discover what makes Vining the perfect choice for enhancing your
            photos with cutting-edge technology and user-friendly design.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each features as feature}
                <div class="relative border border-[#a18d6e]/20 rounded-lg p-4 md:p-6 lg:p-8 hover:bg-[#efede5]/50 transition-colors duration-200">
                    <div class="absolute -top-3 -right-3 w-10 h-10 md:w-12 md:h-12 bg-[#a18d6e] rounded-full flex items-center justify-center">
                        <svelte:component this={feature.icon} class="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <div class="pt-4">
                        <h1 class="text-base md:text-lg lg:text-xl font-bold mb-3 text-left">
                            {feature.title}
                        </h1>
                        <p class="text-xs md:text-sm lg:text-base opacity-70 leading-relaxed text-left">
                            {feature.description}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
