<template>
    <main class="page style">
        <div class="page__head page-head">
            <h2 @click="router.back()" class="page-head__title style-title">< {{ title }}:</h2>
        </div>
        <UnLazyImage
            :alt="style.title"
            :src="style.imagePath"
            auto-sizes
            blurhash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            :preload="false"
            class="style__image style-image"
        />
        <button @click="buttonClickHandler" class="style__button button" type="button">
            Выбрать стиль
        </button>
    </main>
</template>

<script setup lang="ts">
import {categories} from "~/constants/styles";
import {useWebApp, useWebAppPopup, useWebAppSendData} from "vue-tg";
import {parseQuery} from "vue-router";

const route = useRoute()
const router = useRouter()

const {canSendData, initDataUnsafe} = useWebApp()
const {execute} = useWebAppSendData(
    {
        roomId: route.params.roomType,
        styleId: route.params.styleId,
    }, {})

const style = computed(() => categories.flatMap(item => item.items)?.find(style => style.id === route.params.styleId))
const title = computed(() => unref(style).title)


async function buttonClickHandler() {
    if (canSendData) {
        execute()
    } else {
        await useFetch(`https://api.telegram.org/bot7970546657:AAG6GFTdZTKsKx8iw9frFXdU3e3H0tdJj5w/sendMessage`, {
            params: {
                chat_id: initDataUnsafe?.user?.id,
                text: JSON.stringify({
                    roomId: route.params.roomType,
                    styleId: route.params.styleId,
                }),
            }
        })
    }
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


.style-title
    cursor: pointer

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
