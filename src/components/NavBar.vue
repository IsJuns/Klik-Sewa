<template>
  <nav class="bg-primary shadow-lg sticky top-0 z-50">
    <div class="max-w-7x2 mx-auto px-4 md:px-6 lg:px-8">
      <div class="flex justify-between w-full h-12 lg:2xl:h-20 xl:h-20">
        <div class="flex">
          <div class="flex items-center">
            <img class="h-5 lg:2xl:h-10 xl:h-10 " src="@/assets/Splash1.png" alt="Logo" />
          </div>
          <div class="flex items-center text-white font-bold font-monserrat ml-3 xl:text-3xl lg:2xl:text-3xl">
            Klik Sewa
          </div>
        </div>
        <div class="flex items-center">
          <input
          type="text"
          v-model="searchQuery"
          @input="onSearch"
          placeholder="Search..."
          class="w-24 h-5 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-tertiary sm:w-48 lg:2xl:w-72 lg:2xl:h-10 xl:h-10 xl:w-60" 
          />

        </div>
        <div class="items-center hidden md:flex md:space-x-8">
          <router-link to= "/Home" class="text-white hover:text-secondary hover:border-b-2 border-secondary 
          hover:transition-ease-in-out duration-300 xl:text-3xl lg:2xl:text-3xl">Home</router-link>
          <router-link to= "/Service" class="text-white hover:text-secondary hover:border-b-2 border-secondary 
          hover:transition-ease-in-out duration-300 xl:text-3xl lg:2xl:text-3xl">Service</router-link>
          <router-link to= "/Learn" class="text-white hover:text-secondary hover:border-b-2 border-secondary 
          hover:transition-ease-in-out duration-300 xl:text-3xl lg:2xl:text-3xl">Learn</router-link>
          <router-link to= "/Contact" class="text-white hover:text-secondary hover:border-b-2 border-secondary 
          hover:transition-ease-in-out duration-300 xl:text-3xl lg:2xl:text-3xl">Contact</router-link>
        </div>
        <div class="flex md:hidden">
          <button @click="toggleMenu" class="block text- text-white hover:text-white focus:outline-none ">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-line="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden absolute top-12 left-0 w-full bg-white shadow-lg z-40">
      <div class="flex flex-col-reverse dropdown-menu-none text-center space-y-1 bg-white p-4">
        <router-link to= "/" class="text-gray-600 hover:text-secondary">Home</router-link>
        <router-link to= "/" class="text-gray-600 hover:text-secondary">Service</router-link>
        <router-link to= "/" class="text-gray-600 hover:text-secondary">Learn</router-link>
        <router-link to= "/" class="text-gray-600 hover:text-secondary">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Additional styles can be added here if necessary */
</style>
