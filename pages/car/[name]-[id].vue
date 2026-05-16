<script setup>
import { useUtilities } from '~/composables/useUtilities'

const { cars } = useCars()

const route = useRoute()
const { toTitleCase } = useUtilities()
const car = computed(() => {
    return cars.find((car) => {
        return car.id === parseInt(route.params.id)
    })
})

useHead({title: toTitleCase(route.params.name)})

definePageMeta({layout: "custom"})

</script>

<template>
        
    <div v-if="car">
        <CarDetailHero :car="car"/>
        <CarDetailAttributes :features="car.features"/>
        <CarDetailDescription :description="car.description"/>
        <CarDetailContact />
    </div>

</template>