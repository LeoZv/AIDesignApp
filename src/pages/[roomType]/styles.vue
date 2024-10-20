<template>
    <main class="page styles">
        <div class="page__head page-head">
            <h2 @click="router.back()" class="page-head__title styles__title">< Выберите стиль интерьера: </h2>
        </div>
        <div class="styles__list styles-list">
            <div v-for="category in categories"  :key="category.id" class="styles-list__category category">
                <div class="category__head category-head">
                    <div class="category-head__title category-title">
                        {{ category.name }}
                    </div>
                    <NuxtLink v-if="category.items.length > 5" :to="`/${route.params.roomType}/category/${category.id}`" class="category-head__all">
                        {{ category.items.length }} >
                    </NuxtLink>
                </div>
                <Swiper
                    :modules="[Mousewheel, FreeMode]"
                    :mousewheel="{
                        forceToAxis: true,
                    }"
                    :free-mode="true"
                    class="category__list"
                    :loop="false"
                    :space-between="15"
                    slides-per-view="auto"
                >
                    <SwiperSlide class="category__style category-style"  v-for="style in category.items.slice(0, 5)" :key="style.id">
                        <NuxtLink :to="`/${route.params.roomType}/style/${style.id}`">
                            <ItemCard :item="style"/>
                        </NuxtLink>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import {categories} from "~/constants/styles";
import {FreeMode, Mousewheel} from "swiper/modules";

const route = useRoute()
const router = useRouter()

useHead({
    title: "Выбор стиля интерьера",
})
</script>

<style lang="sass" scoped>
.styles-list
    width: 100%
    display: grid
    grid-gap: 25px
    grid-template-columns: 100%

.category
    display: grid
    grid-gap: 15px
    grid-template-columns: 100%
    &__list
        width: 100%

.category-head
    display: flex
    align-items: center
    justify-content: space-between
    &__all
        color: var(--primary-color)
        font-size: var(--title-h2-size)
    &__title
        font-size: var(--title-h2-size)
        font-weight: bold

.category-style
    width: 180px
    +media-from(767px)
        width: 250px
</style>
