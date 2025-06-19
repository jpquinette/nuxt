<template>
  <main class="p-6 max-w-xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Recherches d'études supérieures</h1>

    <form @submit.prevent="searchFormations" class="flex gap-2 mb-6">
      <input
        v-model="query"
        type="text"
        placeholder="Rechercher une formation..."
        class="flex-grow p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition"
      >
        Rechercher
      </button>
    </form>

    <div v-if="results.length">
      <h2 class="text-xl font-semibold mb-4">Résultats de la recherche</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li v-for="formation in results" :key="formation.id" class="hover:text-blue-600 cursor-pointer transition">
          {{ formation.nom }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Aucun résultat trouvé.</p>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')
const results = ref([])

const formationsDB = [
  { id: 1, nom: 'Licence Informatique' },
  { id: 2, nom: 'Master Data Science' },
  { id: 3, nom: 'DUT Réseaux et Télécoms' },
  { id: 4, nom: 'Licence Mathématiques Appliquées' },
  { id: 5, nom: 'Bachelor Marketing Digital' },
]

const searchFormations = () => {
  results.value = formationsDB.filter(f =>
    f.nom.toLowerCase().includes(query.value.toLowerCase())
  )
}
</script>
