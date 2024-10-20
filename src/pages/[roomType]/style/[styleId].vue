<template>
    <main class="page style">
        <div class="page__head page-head">
            <h2 @click="router.back()" class="page-head__title style__title">< {{ title }}:</h2>
        </div>
        <UnLazyImage
            :alt="style.title"
            :src="style.imagePath"
            auto-sizes
            blurhash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            :preload="false"
            class="style__image style-image"
        />
        <button class="style__button button" type="button">
            Выбрать стиль
        </button>
    </main>
</template>

<script setup lang="ts">
import {categories} from "~/constants/styles";
import {useWebApp, useWebAppSendData} from "vue-tg";

const {close} = useWebApp()

const route = useRoute()
const router = useRouter()

const {execute, error} = useWebAppSendData(
    {
        roomId: route.params.roomType,
        styleId: route.params.styleId,
    }, {})

const style = computed(() => categories.flatMap(item => item.items)?.find(style => style.id === route.params.styleId))
const title = computed(() => unref(style).title)


async function buttonClickHandler() {
    execute()
    console.log(unref(error))

}

useHead({
    title: () => unref(title),
})
</script>

<style lang="sass" scoped>
.style
    flex-grow: 1
    display: flex
    gap: 25px
    flex-direction: column

.style-image
    border-radius: var(--card-border-radius)
    width: 100%
    object-position: center
    object-fit: cover
    aspect-ratio: 1

.button
    width: 100%
    margin-top: auto
    font-size: 22px
    font-weight: 500
    padding: 12px 15px
    border-radius: var(--button-border-radius)
    background-color: var(--primary-color)
    align-self: flex-end

</style>
