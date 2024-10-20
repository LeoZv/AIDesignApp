<template>
    <main class="page room-type">
        <div class="page__head page-head">
            <h2 @click="router.back()" class="page-head__title room-type__title">< {{ title }}:</h2>
        </div>
        <div class="room-type__list room-type-list">
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
.room-type-list
    display: grid
    grid-gap: 15px
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr))
</style>
