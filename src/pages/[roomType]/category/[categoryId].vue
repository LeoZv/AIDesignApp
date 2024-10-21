<template>
    <main class="page category">
        <div class="page__head page-head">
            <h2 @click="router.back()" class="page-head__title category-title">< {{ title }}:</h2>
        </div>
        <div class="category__list category-list">
            <NuxtLink v-for="style in category.items" :key="style.id" :to="`/${route.params.roomType}/style/${style.id}`">
                <ItemCard :item="style"/>
            </NuxtLink>
        </div>
    </main>
</template>

<script setup lang="ts">
import {categories} from "~/constants/styles";

const route = useRoute()
const router = useRouter()

const category = computed(() => categories.find((item) => item.id === route.params.categoryId))
const title = computed(() => unref(category).name)

useHead({
    title: () => unref(title),
})
</script>

<style lang="sass" scoped>
.category-title
    cursor: pointer

.category-list
    display: grid
    grid-gap: 15px
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))
    +media-from(767px)
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
</style>
