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

if (!car.value) {
    throw createError({
        statusCode: 404,
        message: `Car with ID of ${route.params.id} does not exist`
    })
}


</script>

<template>
        
    <div v-if="car">
        <CarDetailHero :car="car"/>
        <CarDetailAttributes :features="car.features"/>
        <CarDetailDescription :description="car.description"/>
        <CarDetailContact />
    </div>

</template>