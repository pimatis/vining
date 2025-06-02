<script lang="ts">
    import { onMount } from "svelte";

    let container: HTMLElement;
    let slider: HTMLElement;
    let beforeImage: HTMLImageElement;
    let afterImage: HTMLImageElement;
    let isDragging = false;

    const beforeSrc = "https://www.upload.ee/image/18167434/6-new-2.webp";
    const afterSrc = "https://www.upload.ee/image/18167437/enhanced_6-new-2.webp";

    onMount(() => {
        updateSlider(50);
    });

    function updateSlider(percentage: number) {
        if (!container || !slider || !beforeImage || !afterImage) return;

        const containerRect = container.getBoundingClientRect();
        const position = (percentage / 100) * containerRect.width;

        slider.style.left = `${position}px`;
        beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }

    function handleMouseDown(event: MouseEvent) {
        isDragging = true;
        handleMouseMove(event);
    }

    function handleMouseMove(event: MouseEvent) {
        if (!isDragging || !container) return;

        const containerRect = container.getBoundingClientRect();
        const x = event.clientX - containerRect.left;
        const percentage = Math.max(
            0,
            Math.min(100, (x / containerRect.width) * 100),
        );

        updateSlider(percentage);
    }

    function handleMouseUp() {
        isDragging = false;
    }

    function handleTouchStart(event: TouchEvent) {
        isDragging = true;
        handleTouchMove(event);
    }

    function handleTouchMove(event: TouchEvent) {
        if (!isDragging || !container) return;

        const touch = event.touches[0];
        const containerRect = container.getBoundingClientRect();
        const x = touch.clientX - containerRect.left;
        const percentage = Math.max(
            0,
            Math.min(100, (x / containerRect.width) * 100),
        );

        updateSlider(percentage);
    }

    function handleTouchEnd() {
        isDragging = false;
    }
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} on:touchmove={handleTouchMove} on:touchend={handleTouchEnd} />

<section class="w-full py-12 md:py-16 lg:py-20">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
            <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
                Before and <span class="text-[#a18d6e]">After</span>
            </h1>

            <p class="text-xs md:text-sm lg:text-base opacity-70 max-w-2xl mx-auto leading-relaxed">
                Discover the power of Vining's AI-powered enhancement technology. Move the slider to see the difference.
            </p>
        </div>

        <div class="max-w-4xl mx-auto">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <div bind:this={container} class="relative w-full h-72 md:h-96 lg:h-[32rem] border border-[#a18d6e]/20 rounded-lg overflow-hidden bg-black/5 select-none">
                <img bind:this={afterImage} src={afterSrc} alt="Enhanced photo" class="absolute inset-0 w-full h-full object-cover" />
                <img bind:this={beforeImage} src={beforeSrc} alt="Original photo" class="absolute inset-0 w-full h-full object-cover" style="clip-path: inset(0 50% 0 0);" />

                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div bind:this={slider} class="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-10" style="left: 50%;" on:mousedown={handleMouseDown} on:touchstart={handleTouchStart}>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-[#a18d6e] flex items-center justify-center">
                        <div class="w-1 h-4 bg-[#a18d6e] rounded-full"></div>
                    </div>
                </div>

                <div class="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    Before
                </div>
                <div class="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    After
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div class="text-center border border-[#a18d6e]/20 rounded-lg p-4 md:p-6 lg:p-8 hover:bg-[#efede5]/50">
                    <div class="text-xl md:text-2xl lg:text-2xl font-bold text-[#a18d6e] mb-2">
                        400%
                    </div>
                    <div class="text-xs md:text-sm lg:text-base opacity-70">Enhanced Clarity</div>
                </div>
                <div class="text-center border border-[#a18d6e]/20 rounded-lg p-4 md:p-6 lg:p-8 hover:bg-[#efede5]/50">
                    <div class="text-xl md:text-2xl lg:text-2xl font-bold text-[#a18d6e] mb-2">
                        250%
                    </div>
                    <div class="text-xs md:text-sm lg:text-base opacity-70">Color Saturation</div>
                </div>
                <div class="text-center border border-[#a18d6e]/20 rounded-lg p-4 md:p-6 lg:p-8 hover:bg-[#efede5]/50">
                    <div class="text-xl md:text-2xl lg:text-2xl font-bold text-[#a18d6e] mb-2">
                        180%
                    </div>
                    <div class="text-xs md:text-sm lg:text-base opacity-70">Detail Quality</div>
                </div>
            </div>
        </div>
    </div>
</section>
