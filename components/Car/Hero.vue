<template>
    <!-- HOME HERO Start -->
    <!-- Background image spanning whole screen -->
    <div class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('https://carconfigurator.ferrari.com/rt-assets/data/cars/purosangue/ui/splashpage.jpg')]">
        <div class="z-10 absolute w-full h-full flex justify-center items-center ">
        <div class="text-center w-1/2">
            <h1 class="text-8xl font-serif mb-10 text-white">Find your Drive</h1>
            <!-- HOME SEARCH BAR Start -->
            <CarSearchBar />    
            <!-- HOME SEARCH BAR End   -->
        </div>
        </div>
        <!-- Give a dark tint -->
        <div class="z-1 absolute w-full h-full opacity-50 bg-black"></div>
    </div>
    <!-- HOME HERO End   -->
</template>