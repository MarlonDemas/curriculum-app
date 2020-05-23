<template>
  <div class="w-1/2 m-auto">
    <div class="flex justify-between">
      <h1 class="text-2xl">Create Curriculum</h1>
      <button class="shadow inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium hover:shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300 text-gray-700">
        Save
      </button>
    </div>
    <form class="w-full mt-16">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-600 font-medium mb-1 md:mb-0 pr-4" for="inline-name">
            Name
          </label>
        </div>
        <div class="md:w-2/3 flex items-center border-b border-b-2 border-gray-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-600 font-medium mb-1 md:mb-0 pr-4" for="inline-goal">
            Goal
          </label>
        </div>
        <div class="md:w-2/3 flex items-center border-b border-b-2 border-gray-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text">
        </div>
      </div>
      <div class="w-full">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2" for="grid-password">
          Description
        </label>
        <textarea class="shadow appearance-none block w-full bg-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" rows="6"></textarea>
      </div>
    </form>
    <div class="w-full mt-8">
      <div class="border bg-white rounded p-4 flex flex-col justify-between leading-normal">
        <div class="text-gray-900 font-bold text-2xl">Section #1</div>
        <div class="md:flex md:items-center my-6">
          <div class="md:w-1/3">
            <label class="block text-gray-600 font-medium mb-1 md:mb-0 pr-4" for="inline-name">
              Name
            </label>
          </div>
          <div class="md:w-2/3 flex items-center border-b border-b-2 border-gray-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text">
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-600 font-medium mb-1 md:mb-0 pr-4" for="inline-goal">
              Goal
            </label>
          </div>
          <div class="md:w-2/3 flex items-center border-b border-b-2 border-gray-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text">
          </div>
        </div>
        <div class="w-full mt-8">
          <div class="border bg-white rounded p-4 flex flex-col justify-between leading-normal">
            <div class="md:w-full flex items-center border-b border-b-2 border-gray-500 py-2 mb-4">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Enter Resource Link">
            </div>
            <div class="text-gray-900 py-2">List of resources</div>
            <div class="text-gray-900 py-2">List of resources</div>
            <div class="text-gray-900 py-2">List of resources</div>
          </div>
        </div>
        <div class="w-full mt-8">
          <div class="border bg-white rounded p-4 flex flex-col justify-between leading-normal">
            <div class="md:w-full flex items-center border-b border-b-2 border-gray-500 py-2 mb-4">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Enter Projects Link">
            </div>
            <div class="text-gray-900 py-2">List of projects</div>
            <div class="text-gray-900 py-2">List of projects</div>
            <div class="text-gray-900 py-2">List of projects</div>
          </div>
        </div>
      </div>
    </div>
    <button class="shadow inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium hover:shadow-none transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300 text-gray-700 my-4">Add Section</button>
  </div>
</template>