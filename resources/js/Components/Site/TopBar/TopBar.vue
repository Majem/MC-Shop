<script>
import {defineComponent} from 'vue'
import logo from '@images/logo-small.png';
export default defineComponent({
    name: "TopBar",
    setup() {
        return {
            logo
        }
    }
})
</script>

<template>
    <div class="fixed top-0 w-full z-50">
        <nav class="py-7 relative ease-in-out duration-500 mobile-nav">
            <div class="container mx-auto">
                <div class="flex items-center justify-between md:block">
                    <div class="justify-between items-center flex w-full">
                        <div class="z-50 relative">
                            <a href="index.html">
                                <img :src="logo" class="h-7" alt="">
                            </a>
                        </div>
                        <div>
                            <button class="block md:hidden outline-none mobile-menu-button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="hidden md:block">
                            <ul class="list-none flex space-x-3 items-center">
                                <li class="home active"><a href="#home"
                                                           class="font-medium hover:text-green ease-in-out duration-300 inline-block leading-6 p-2">Home</a>
                                </li>
                                <li class="features"><a href="#features"
                                                        class="font-medium hover:text-green ease-in-out duration-300 inline-block leading-6 p-2">Features</a>
                                </li>
                                <li class="client"><a href="#client"
                                                      class="font-medium hover:text-green ease-in-out duration-300 inline-block leading-6 p-2">Client</a>
                                </li>
                                <li class="price"><a href="#price"
                                                     class="font-medium hover:text-green ease-in-out duration-300 inline-block leading-6 p-2">Price</a>
                                </li>
                                <li class="contact"><a href="#contact"
                                                       class="font-medium hover:text-green ease-in-out duration-300 inline-block leading-6 p-2">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="md:hidden block mobile-menu">
                    <div class="pt-7">
                        <ul>
                            <li class="home active"><a href="#home"
                                                       class="font-medium hover:text-green ease-in-out duration-300 inline-block leading-6 p-2">Home</a>
                            </li>
                            <li class="features"><a href="#features"
                                                    class="font-medium hover:text-green ease-in-out duration-300 inline-block leading-6 p-2">Features</a>
                            </li>
                            <li class="client"><a href="#client"
                                                  class="font-medium hover:text-green ease-in-out duration-300 inline-block leading-6 p-2">Client</a>
                            </li>
                            <li class="price"><a href="#price"
                                                 class="font-medium hover:text-green ease-in-out duration-300 inline-block leading-6 p-2">Price</a>
                            </li>
                            <li class="contact"><a href="#contact"
                                                   class="font-medium hover:text-green ease-in-out duration-300 inline-block leading-6 p-2">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>

</style>
