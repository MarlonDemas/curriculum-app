<template>
  <nav class="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800">
          Title
        </a>
          <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"><i class="fas fa-bars"></i></button>
      </div>
      <div class="lg:flex flex-grow items-center hidden" id="example-navbar-danger">
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="nav-item">
            <router-link :to="{name: 'home'}" class="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600">
              <span class="ml-2">Home</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'upsert'}" class="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600">
              <span class="ml-2">Create</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container mx-auto mt-4 pt-16 bg-gray-100 h-screen">
    <router-view></router-view>
  </div>
</template>

<style>

</style>