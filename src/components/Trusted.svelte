<script>
    const companies = [
        {
            name: "Google",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        },
        {
            name: "Microsoft",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        },
        {
            name: "Apple",
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        },
        {
            name: "Adobe",
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
        },
        {
            name: "Netflix",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        },
        {
            name: "Spotify",
            logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
        },
        {
            name: "Cloudflare",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg",
        },
        {
            name: "Meta",
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
        },
        {
            name: "Amazon",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        },
        {
            name: "Tesla",
            logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
        },
        {
            name: "Slack",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
        },
        {
            name: "Vercel",
            logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
        },
    ];
</script>

<section class="w-full">
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <div class="relative overflow-hidden">
            <div class="flex animate-scroll space-x-8 sm:space-x-16 lg:space-x-24 items-center">
                {#each [...companies, ...companies] as company}
                    <div class="flex-shrink-0 w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200">
                        <img src={company.logo} alt={company.name} class="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-200" />
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
        animation: scroll 20s linear infinite;
    }

    .animate-scroll:hover {
        animation-play-state: paused;
    }
</style>
