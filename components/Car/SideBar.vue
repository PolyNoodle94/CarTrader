<script setup>

const city = ref()
const route = useRoute()

const modal = ref({
    make: false,
    location: false,
    price: false,
})

const updateModal = (key) => {
    modal.value[key] = !modal.value[key]
} 

const onChangeLocation = () => {
    if (!city.value) return

    // Check if user provided an integer, or an integer with words. If no digits were inputted, parseInt returns NaN
    if (Number.isInteger(parseInt(city.value))) {
        // Client side error since it involves the user inputting invalid information in an input field
        throw createError({
            statusCode: 400,
            message: "Invalid city format",
        })
    } 
    updateModal('location')
    navigateTo(`/city/${city.value}/car/${route.params.make}`)
    city.value = ""
}

</script>

<template>
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
        
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3 @click="modal.location = !modal.location">Location</h3>
        <h3 class="text-blue-400 capitalize" @click="updateModal('location')">{{ route.params.city }}</h3>

            <div v-if="modal.location" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
                <input v-model="city" type="text" class="border p-1 rounded"/>
                <button @click="onChangeLocation" class="bg-blue-400 w-full mt-2 text-white p-1">
                Apply
                </button>
            </div>

        </div>

        <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Make</h3>
        <h3 class="text-blue-400 capitalize">Filler_text</h3>
        </div>

        <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Price</h3>
        <h3 class="text-blue-400 capitalize">Filler_value</h3>
        </div>

    </div>
</template>