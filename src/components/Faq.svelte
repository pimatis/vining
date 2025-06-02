<script lang="ts">
    import { ChevronDown } from "lucide-svelte";

    const faqs = [
        {
            question: "Is Vining really free to use?",
            answer: "Yes, Vining is completely free. We believe in making photo enhancement accessible to everyone. There are no hidden fees, no premium plans, and no limitations on usage.",
        },
        {
            question: "Do you store my photos?",
            answer: "No, we never store your photos on our servers. All processing happens locally in your browser, ensuring complete privacy. Your images are processed and immediately available for download without any data retention.",
        },
        {
            question: "What file formats are supported?",
            answer: "Vining supports the most popular image formats including JPEG, PNG, and WEBP. We're continuously working to add support for more formats based on user feedback.",
        },

        {
            question: "Do I need to create an account?",
            answer: "No account creation is required. Simply visit our website, upload your photo, and get your enhanced result instantly. This keeps the process simple and protects your privacy.",
        },
        {
            question: "What's the maximum file size?",
            answer: "You can upload images up to 50MB in size. This covers most high-resolution photos from modern cameras and smartphones while ensuring fast processing times.",
        },
    ];

    let openIndex: number | null = null;

    function toggleFaq(index: number) {
        openIndex = openIndex === index ? null : index;
    }
</script>

<section class="w-full py-12 md:py-16 lg:py-20">
    <div class="w-full max-w-4xl mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
            <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
                Frequently Asked <span class="text-[#a18d6e]">Questions</span>
            </h1>

            <p class="text-xs md:text-sm lg:text-base opacity-70 max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
                Find answers to common questions about Vining's photo
                enhancement features, privacy, and usage.
            </p>
        </div>

        <div class="space-y-4">
            {#each faqs as faq, index}
                <div class="border border-[#a18d6e]/20 rounded-lg overflow-hidden">
                    <button class="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 text-left flex items-center justify-between hover:bg-[#a18d6e]/5 transition-colors duration-200" on:click={() => toggleFaq(index)}>
                        <h3 class="text-base md:text-lg lg:text-xl font-bold text-black pr-4">
                            {faq.question}
                        </h3>
                        <ChevronDown class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#a18d6e] transition-transform duration-200 flex-shrink-0 {openIndex === index ? 'rotate-180' : ''}" />
                    </button>

                    {#if openIndex === index}
                        <div class="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8">
                            <p class="text-xs md:text-sm lg:text-base opacity-70 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>
