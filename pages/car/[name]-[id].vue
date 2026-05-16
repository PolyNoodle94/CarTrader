<script setup>
const route = useRoute()
useHead({title: toTitleCase(route.params.name)})

definePageMeta({layout: "custom"})

function toTitleCase(str) {
    // Note: /\w\S*/g is a regex that matches a word character followed by zero or more non-whitespace characters.
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}
</script>

<template>
        
    <div>
        <CarDetailHero />
        <CarDetailAttributes />
        <CarDetailDescription />
        <CarDetailContact />
    </div>

</template>