<script>
    const avatars = [
        "https://api.dicebear.com/7.x/notionists/svg?seed=Alex",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Emma",
        "https://api.dicebear.com/7.x/notionists/svg?seed=John",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah",
        "https://api.dicebear.com/7.x/notionists/svg?seed=Mike",
    ];
</script>

<section class="w-full h-auto md:h-[32rem] flex items-center justify-center">
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div class="py-12 md:py-20">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span class="text-[#a18d6e]">Enhance</span> Your Photos Instantly
            </h1>

            <p class="text-xs md:text-sm max-w-2xl mx-auto mb-8 leading-relaxed opacity-70">
                Transform your photos with professional quality using Vining's
                AI-powered enhancement technology. No account required,
                completely free, and your data is never stored.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a href="/generate" class="px-6 py-2.5 bg-[#a18d6e] text-white text-sm font-medium rounded-lg hover:bg-[#947d62] transition-colors duration-200 min-w-48 cursor-pointer">
                    Upload Photo
                </a>

                <a href="#how" class="px-6 py-2.5 border border-[#a18d6e]/20 text-[#a18d6e] text-sm font-medium rounded-lg hover:bg-[#efede5]/50 transition-colors duration-200 min-w-48 cursor-pointer">
                    How It Works
                </a>
            </div>

            <div class="flex items-center justify-center gap-3">
                <div class="flex -space-x-2">
                    {#each avatars as avatar}
                        <img src={avatar} alt="User avatar" class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border border-black/5" />
                    {/each}
                </div>
                <div class="flex items-center gap-1.5">
                    <div class="w-1.5 h-1.5 bg-[#a18d6e] rounded-full animate-pulse"></div>
                    <span class="text-xs font-medium">500+ users using Vining</span>
                </div>
            </div>
        </div>
    </div>
</section>
