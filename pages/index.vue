<template>
  <main class="min-h-screen bg-pastel-yellow text-gray-800 p-6">
    <section class="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 transition-all duration-300">

      <div class="text-center mb-6">
        <h1 class="text-4xl font-extrabold text-pastel-purple mb-2">
          🎓 Formations Supérieures
        </h1>
        <p class="text-pastel-blue">Trouvez la formation qui vous correspond</p>
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
              class="hover:text-pastel-pink cursor-pointer transition"
            >
              {{ formation.nom }}
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
// import '@lottiefiles/lottie-player'

const query = ref('')
const results = ref([])
const loading = ref(false)

const formationsDB = [
  { id: 1, nom: 'Licence Informatique' },
  { id: 2, nom: 'Master Data Science' },
  { id: 3, nom: 'DUT Réseaux et Télécoms' },
  { id: 4, nom: 'Licence Mathématiques Appliquées' },
  { id: 5, nom: 'Bachelor Marketing Digital' },
]

const searchFormations = () => {
  loading.value = true
  results.value = []

  setTimeout(() => {
    results.value = formationsDB.filter(f =>
      f.nom.toLowerCase().includes(query.value.toLowerCase())
    )
    loading.value = false
  }, 800)
}
</script>
