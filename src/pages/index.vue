<template>
    <main class="page room-type">
        <div class="page__head page-head">
            <h2 class="page-head__title room-type__title">Выберите тип помещения:</h2>
        </div>
        <div class="room-type__list room-type-list">
            <NuxtLink v-for="room in rooms" :key="room.id" :to="`/${room.id}/styles`">
                <ItemCard :item="room"/>
            </NuxtLink>
        </div>
    </main>
</template>

<script setup lang="ts">
import {rooms} from "~/constants/rooms";

useHead({
    title: "Выбор типа помещения",
})
</script>

<style lang="sass" scoped>
.room-type-list
    display: grid
    grid-gap: 15px
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))
    +media-from(767px)
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
</style>
