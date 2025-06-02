<script lang="ts">
    import Navbar from "../../components/Navbar.svelte";
    import Footer from "../../components/Footer.svelte";
    import { Upload, Download, ArrowLeftRight } from "lucide-svelte";

    let dragActive = false;
    let originalImage: string | null = null;
    let enhancedImage: string | null = null;
    let isProcessing = false;
    let error: string | null = null;
    let originalFileName = "";
    let showComparison = false;
    let progress = 0;
    let fileInput: HTMLInputElement;
    let comparisonContainer: HTMLDivElement;
    let slider: HTMLElement;
    let beforeImage: HTMLImageElement;
    let isDragging = false;
    let sliderPosition = 50;

    function updateSlider(percentage: number) {
        if (!comparisonContainer || !slider || !beforeImage) return;

        const containerRect = comparisonContainer.getBoundingClientRect();
        const position = (percentage / 100) * containerRect.width;

        slider.style.left = `${position}px`;
        beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        sliderPosition = percentage;
    }

    function handleMouseDown(event: MouseEvent) {
        isDragging = true;
        handleMouseMove(event);
    }

    function handleMouseMove(event: MouseEvent) {
        if (!isDragging || !comparisonContainer) return;

        const containerRect = comparisonContainer.getBoundingClientRect();
        const x = event.clientX - containerRect.left;
        const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));

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
        if (!isDragging || !comparisonContainer) return;

        const touch = event.touches[0];
        const containerRect = comparisonContainer.getBoundingClientRect();
        const x = touch.clientX - containerRect.left;
        const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));

        updateSlider(percentage);
    }

    function handleTouchEnd() {
        isDragging = false;
    }

    function handleDragOver(e: DragEvent) {
        e.preventDefault();
        dragActive = true;
    }

    function handleDragLeave(e: DragEvent) {
        e.preventDefault();
        dragActive = false;
    }

    async function handleDrop(e: DragEvent) {
        e.preventDefault();
        dragActive = false;

        const files = e.dataTransfer?.files;
        if (files && files.length > 0) {
            await processFile(files[0]);
        }
    }

    function handleFileSelect(e: Event) {
        const target = e.target as HTMLInputElement;
        const files = target.files;
        if (files && files.length > 0) {
            processFile(files[0]);
        }
    }

    async function processFile(file: File) {
        if (!file.type.startsWith("image/")) {
            error = "Please upload a valid image file";
            return;
        }

        if (file.size > 50 * 1024 * 1024) {
            error = "File size must be less than 50MB";
            return;
        }

        error = null;
        isProcessing = true;
        originalFileName = file.name;
        progress = 0;

        const progressInterval = setInterval(() => {
            if (progress < 90) {
                progress += Math.random() * 15;
                if (progress > 90) progress = 90;
            }
        }, 200);

        const reader = new FileReader();
        reader.onload = (e) => {
            originalImage = e.target?.result as string;
        };
        reader.readAsDataURL(file);

        try {
            const formData = new FormData();
            formData.append("image", file);

            const response = await fetch("/api/ai", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
            progress = 100;
            enhancedImage = `data:image/jpeg;base64,${result.enhancedImage}`;
            showComparison = true;
            setTimeout(() => updateSlider(50), 100);
        } else {
                error = result.error || "Failed to enhance image";
            }
        } catch (err) {
            error = "Something went wrong. Please try again.";
        } finally {
            clearInterval(progressInterval);
            isProcessing = false;
        }
    }

    function downloadImage() {
        if (!enhancedImage) return;

        const link = document.createElement("a");
        link.href = enhancedImage;
        link.download = `enhanced_${originalFileName}`;
        link.click();
    }

    function resetUpload() {
        originalImage = null;
        enhancedImage = null;
        error = null;
        showComparison = false;
        originalFileName = "";
        sliderPosition = 50;
        if (fileInput) fileInput.value = "";
    }
</script>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} on:touchmove={handleTouchMove} on:touchend={handleTouchEnd} />

<Navbar />

<main class="w-full min-h-screen">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div class="text-center mb-12">
            <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
                <span class="text-[#a18d6e]">Enhance</span> Your Photo
            </h1>
            <p class="text-xs md:text-sm lg:text-base opacity-70 max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
                Upload your image and watch our AI technology transform it into a professional-quality photo instantly.
            </p>
        </div>

        {#if !originalImage}
            <div class="max-w-2xl mx-auto">
                <div class="relative border-2 border-dashed rounded-lg p-6 md:p-8 lg:p-12 text-center transition-all duration-200 {dragActive ? 'border-[#a18d6e] bg-[#a18d6e]/5' : 'border-[#a18d6e]/30 hover:border-[#a18d6e]/50'}" on:dragover={handleDragOver} on:dragleave={handleDragLeave} on:drop={handleDrop} role="button" tabindex="0">
                    <input bind:this={fileInput} type="file" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" on:change={handleFileSelect} />

                    <div class="flex flex-col items-center gap-4">
                        <div class="w-16 h-16 bg-[#a18d6e]/10 rounded-full flex items-center justify-center">
                            <Upload class="w-8 h-8 text-[#a18d6e]" />
                        </div>

                        <div>
                            <h3 class="text-base md:text-lg lg:text-xl font-bold text-black mb-2">
                                {dragActive ? "Drop your image here" : "Upload your photo"}
                            </h3>
                            <p class="text-xs md:text-sm lg:text-base opacity-70 mb-4">
                                Drag and drop or click to browse your files
                            </p>
                            <p class="text-xs opacity-60">
                                Supports JPEG, PNG, WEBP • Max size: 50MB
                            </p>
                        </div>

                        <button class="px-6 py-2.5 bg-[#a18d6e] text-white text-sm font-medium rounded-lg hover:bg-[#947d62] transition-colors duration-200">
                            Choose File
                        </button>
                    </div>
                </div>

                {#if error}
                    <div class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p class="text-sm text-red-600">{error}</p>
                    </div>
                {/if}
            </div>
        {:else}
            <div class="space-y-8">
                {#if isProcessing}
                    <div class="flex flex-col items-center justify-center space-y-8 py-12">
                        <div class="text-center space-y-6">
                            <p class="text-xs md:text-sm lg:text-base opacity-70">
                                Please wait while we process your image...
                            </p>

                            <div class="w-64 md:w-80 lg:w-96 mx-auto space-y-2">
                                <div class="w-full h-2 bg-black/10 rounded-full overflow-hidden">
                                    <div class="h-full bg-[#a18d6e] rounded-full" style="width: {progress}%"></div>
                                </div>
                                <div class="text-xs text-black/60 text-center">
                                    {Math.round(progress)}% Complete
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}

                {#if showComparison && enhancedImage}
                    <div class="max-w-4xl mx-auto space-y-6">
                        <div class="text-center">
                            <h3 class="text-base md:text-lg lg:text-xl font-bold text-black mb-2 flex items-center justify-center gap-2">
                                Interactive Comparison
                                <ArrowLeftRight class="w-4 h-4 text-[#a18d6e]" />
                            </h3>
                            <p class="text-xs md:text-sm lg:text-base opacity-70">
                                Drag the slider to compare original and enhanced versions
                            </p>
                        </div>

                        <div bind:this={comparisonContainer} class="relative border border-[#a18d6e]/20 rounded-lg overflow-hidden bg-black/5 select-none">
                            <img src={enhancedImage} alt="Enhanced" class="w-full h-auto block" />
                            <img bind:this={beforeImage} src={originalImage} alt="Original" class="absolute inset-0 w-full h-auto object-cover" style="clip-path: inset(0 50% 0 0);" />

                            <!-- svelte-ignore a11y_no_static_element_interactions -->
                            <div bind:this={slider} class="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-10" style="left: 50%;" on:mousedown={handleMouseDown} on:touchstart={handleTouchStart}>
                                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-[#a18d6e] flex items-center justify-center">
                                    <div class="w-1 h-4 bg-[#a18d6e] rounded-full"></div>
                                </div>
                            </div>

                            <div class="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                                Original
                            </div>
                            <div class="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                                Enhanced
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button on:click={downloadImage} class="px-6 py-2.5 bg-[#a18d6e] text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-2">
                            <Download class="w-4 h-4" />
                            Download Enhanced Photo
                        </button>

                        <button on:click={resetUpload} class="px-6 py-2.5 border border-[#a18d6e]/20 text-[#a18d6e] text-sm font-medium rounded-lg hover:bg-[#a18d6e]/5 transition-colors duration-200">
                            Enhance Another Photo
                        </button>
                    </div>
                {:else if originalImage && !isProcessing}
                    <div class="max-w-2xl mx-auto space-y-4">
                        <h3 class="text-base md:text-lg lg:text-xl font-bold text-black text-center">
                            Original Photo
                        </h3>

                        <div class="border border-[#a18d6e]/20 rounded-lg overflow-hidden">
                            <img src={originalImage} alt="Original" class="w-full h-auto"/>
                        </div>

                        <div class="text-center">
                            <button on:click={resetUpload} class="px-6 py-2.5 border border-[#a18d6e]/20 text-[#a18d6e] text-sm font-medium rounded-lg hover:bg-[#a18d6e]/5 transition-colors duration-200">
                                Upload Different Photo
                            </button>
                        </div>
                    </div>
                {/if}

                {#if error}
                    <div class="max-w-2xl mx-auto">
                        <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p class="text-sm text-red-600 text-center">
                                {error}
                            </p>
                        </div>
                    </div>
                {/if}
            </div>
        {/if}
    </div>
</main>

<Footer />
