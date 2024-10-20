// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: 'src/',
    app: {
        pageTransition: { name: 'layout', mode: 'out-in' },
        head: {
            script: [
                {
                    src: 'https://telegram.org/js/telegram-web-app.js',
                    tagPosition: 'head'
                }
            ]
        }
    },
    typescript: {
      strict: true,
    },
    ssr: false,
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    googleFonts: {
        families: {
            Poppins: [400, 500, 600, 700],
        },
    },
    modules: [
        '@nuxtjs/google-fonts',
        'nuxt-swiper',
        '@unlazy/nuxt'
    ],
    unlazy: {
        ssr: false
    },
    css: ['@/assets/styles/main.sass'],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: `
                      @import "@/assets/styles/components/_utils.sass"
                  `,
                },
            },
        },
    },
    compatibilityDate: '2024-10-19',
})
