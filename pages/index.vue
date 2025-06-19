<template>
  <main class="min-h-screen bg-pastel-yellow text-gray-800 p-6">
    <section class="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 transition-all duration-300">

      <div class="text-center mb-6">
        <h1 class="text-4xl font-extrabold text-pastel-green mb-2">
          🎓 Formations Supérieures
        </h1>
        <p class="text-pastel-green">Trouvez la formation qui vous correspond</p>
      </div>

      <form @submit.prevent="searchFormations" class="flex gap-3 mb-6">
        <input
          v-model="query"
          type="text"
          placeholder="Ex : Data, Marketing..."
          class="flex-grow p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-pastel-blue"
        />
        <button
          type="submit"
          class="bg-pastel-green text-gray-900 px-5 py-2 rounded-lg hover:bg-pastel-purple transition font-semibold"
        >
          Rechercher
        </button>
      </form>

      <div v-if="loading" class="flex justify-center py-4">
        <ClientOnly>
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_puciaact.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 150px; height: 150px"
          />
        </ClientOnly>
      </div>

      <div v-else>
        <div v-if="results.length">
          <h2 class="text-2xl font-semibold text-pastel-orange mb-4">
            Résultats :
          </h2>
          <ul class="list-disc pl-5 space-y-2">
            <li
              v-for="formation in results"
              :key="formation.id"
              class="border-b border-gray-200 py-3 hover:bg-gray-50 transition"
            >
              <NuxtLink
                :to="`/formation/${formation.id}`"
                class="flex items-center justify-between p-2 hover:text-pastel-purple"
              >
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-pastel-purple rounded-full flex items-center justify-center">
                    <!-- <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg> -->
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">{{ formation.titre }}</h3>
                    <p class="text-sm text-gray-600">{{ formation.etablissement }}</p>
                  </div>
                </div>
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div v-else>
          <p class="text-gray-600 italic">Aucun résultat trouvé.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { formationsDB } from '../data/formations.js'

// Convertir l'objet en tableau
const formationsArray = Object.values(formationsDB)
const query = ref('')
const results = ref([])
const loading = ref(false)

const searchFormations = () => {
  loading.value = true
  results.value = []

  setTimeout(() => {
    results.value = formationsArray.filter(f =>
      f.titre.toLowerCase().includes(query.value.toLowerCase())
    )
    loading.value = false
  }, 800)
}
</script>
