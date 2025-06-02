<script>
    const testimonials = [
        {
            content: "I've been using Vining for 6 months now and it's completely changed my post-processing workflow. What used to take me 2-3 hours per photo session now takes minutes. The AI enhancement is surprisingly accurate, especially with skin tones and lighting corrections.",
        },
        {
            content: "Our product photos look so much more professional after using Vining. We saw a 23% increase in click-through rates on our listings. The fact that it's free and doesn't require any technical skills makes it perfect for our small team.",
        },
        {
            content: "As someone who posts daily content, Vining has been a lifesaver. I can enhance my travel photos on the go without carrying heavy editing software. The results are consistently good, and I love that my photos stay private.",
        },
        {
            content: "Property photos can make or break a listing. Vining helps me showcase homes in their best light without hiring expensive photographers. My clients are always impressed with the quality, and listings sell 30% faster on average.",
        },
        {
            content: "I was skeptical about AI photo enhancement, but Vining proved me wrong. It enhances my photos while keeping them natural-looking. My engagement rates have improved significantly, and my followers always ask about my 'new camera'.",
        },
        {
            content: "We use Vining as part of our client workflow for quick photo touch-ups. It saves us valuable time on smaller projects and allows us to focus on creative work. The open-source nature gives us confidence in long-term reliability.",
        },
    ];
</script>

<section class="w-full py-12 md:py-16 lg:py-20">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            What Users <span class="text-[#a18d6e]">Say</span>
        </h1>

        <p class="text-xs md:text-sm lg:text-base opacity-70 max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto mb-16 leading-relaxed">
            Join thousands of satisfied users who have enhanced their photos
            with Vining's powerful AI technology.
        </p>

        <div class="relative overflow-hidden">
            <div class="flex animate-scroll space-x-4 md:space-x-8 items-center">
                {#each [...testimonials, ...testimonials] as testimonial}
                    <div class="flex-shrink-0 w-80 md:w-96 h-60 md:h-64 border border-[#a18d6e]/20 rounded-lg p-4 md:p-6 lg:p-8 hover:bg-[#a18d6e]/5 transition-colors duration-200 flex flex-col">
                        <div class="flex-1 flex flex-col">
                            <p class="text-xs md:text-sm lg:text-base opacity-70 leading-relaxed text-left flex-1">
                                "{testimonial.content}"
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }

    .animate-scroll {
        animation: scroll 30s linear infinite;
    }

    .animate-scroll:hover {
        animation-play-state: paused;
    }
</style>
