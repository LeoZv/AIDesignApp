<template>
    <div class="card">
        <UnLazyImage
            :alt="item.title"
            :src="item.imagePath"
            auto-sizes
            blurhash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            :preload="false"
            class="card__image card-image"
        />
        <div class="card__title card-title">
            {{ item.title }}
        </div>
        <div v-if="item.description" class="card__description card-description">
            {{ item.description }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {Room} from "~/constants/rooms";
import type {Style} from "~/constants/styles";

defineProps({
    item: {
        type: Object as PropType<Room|Style>,
        required: true,
    },

})

</script>

<style lang="sass" scoped>
.card
    display: grid
    gap: 5px

.card-image
    border-radius: var(--card-border-radius)
    width: 100%
    object-position: center
    object-fit: cover
    aspect-ratio: 1

.card-title
    font-weight: 600
    line-height: 1
.card-description
    line-height: 1
</style>
