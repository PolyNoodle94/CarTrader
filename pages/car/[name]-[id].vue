<script setup>
const route = useRoute()
useHead({title: toTitleCase(route.params.name)})

function toTitleCase(str) {
    // Note: /\w\S*/g is a regex that matches a word character followed by zero or more non-whitespace characters.
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}
</script>

<template>
    <div>
        <NavBar />

        <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
            
            <CarDetailHero />
            <CarDetailAttributes />
            <CarDetailDescription />
            <CarDetailContact />

        </div>


    </div>
</template>