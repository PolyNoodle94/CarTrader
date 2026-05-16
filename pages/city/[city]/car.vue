<script setup>
const route = useRoute()
useHead({title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)}`})

definePageMeta({layout: "custom"})

function toTitleCase(str) {
    // Note: /\w\S*/g is a regex that matches a word character followed by zero or more non-whitespace characters.
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}
</script>

<template>

    <div class="mt-32 flex">
    
        <CarSideBar />
        <NuxtPage />
    
    </div>

</template>