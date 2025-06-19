<template>
  <main class="min-h-screen bg-pastel-yellow text-gray-800">
    <div class="max-w-4xl mx-auto px-4 py-8">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div class="flex">
          <h1 class="text-3xl font-bold text-pastel-purple">Détails de la Formation</h1>
        </div>
        <!-- <div class="flex gap-4">
          <button class="px-4 py-2 bg-pastel-blue text-white rounded-lg hover:bg-blue-600 transition">
            <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Partager
          </button>
        </div> -->
      </div>

      <!-- Contenu principal -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-8" v-if="formation">
        <div class="mb-8">
          <div class="relative h-64 mb-4 bg-gray-100 rounded-lg overflow-hidden">
            <!-- <img 
              src="https://source.unsplash.com/1200x400/?education" 
              alt="Formation" 
              class="w-full h-full object-cover"
              loading="lazy"
             
            > -->
            <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm">
              {{ formation.duree }} mois
            </div>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ formation.titre }}</h2>
          <p class="text-gray-600">{{ formation.etablissement }}</p>
        </div>

        <div class="space-y-4 mb-8">
          <h3 class="text-xl font-semibold text-pastel-orange">Description</h3>
          <p class="text-gray-700 leading-relaxed">{{ formation.description }}</p>
        </div>

        <div class="space-y-4 mb-8">
          <h3 class="text-xl font-semibold text-pastel-orange">Programme</h3>
          <ul class="space-y-2">
            <li v-for="module in formation.programme" :key="module" class="flex items-center gap-2">
              <svg class="w-4 h-4 text-pastel-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {{ module }}
            </li>
          </ul>
        </div>

        <div class="space-y-4 mb-8">
          <h3 class="text-xl font-semibold text-pastel-orange">Conditions d'admission</h3>
          <ul class="space-y-2">
            <li v-for="condition in formation.conditions" :key="condition" class="flex items-center gap-2">
              <svg class="w-4 h-4 text-pastel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {{ condition }}
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-pastel-orange">Coût et financement</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-pastel-green-light p-4 rounded-lg">
              <h4 class="font-semibold mb-2">Prix</h4>
              <p class="text-2xl font-bold text-pastel-green">{{ formation.prix }} €</p>
            </div>
            <div class="bg-pastel-blue-light p-4 rounded-lg">
              <h4 class="font-semibold mb-2">Financement</h4>
              <ul class="space-y-1">
                <li v-for="financement in formation.financement" :key="financement" class="text-sm">
                  {{ financement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-4">
        <NuxtLink 
          to="/" 
          class="bg-pastel-green-dark text-white px-6 py-3 rounded-lg font-semibold text-lg"
        >
          Retour
        </NuxtLink>
        <!-- <button class="bg-pastel-purple text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition">
          S'inscrire
        </button> -->
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { formationsDB } from '../data/formations.js'

// Convertir l'objet en tableau
const formationsArray = Object.values(formationsDB)

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)

const formation = formationsArray.find(f => f.id === id)

if (!formation) {
  // Redirection vers la page d'accueil si la formation n'est pas trouvée
  router.push('/')
}
</script>

<style>
/* Ajout de quelques couleurs personnalisées */
:root {
  --pastel-yellow: #fff3e0;
  --pastel-purple: #ce93d8;
  --pastel-green: #a5d6a7;
  --pastel-blue: #90caf9;
  --pastel-orange: #ffb74d;
  --pastel-green-light: #e8f5e9;
  --pastel-blue-light: #e3f2fd;
  --pastel-purple-dark: #ba68c8;
  --pastel-green-dark: #63a966;
}

/* Style pour le bouton Retour */
.bg-pastel-green {
  background-color: var(--pastel-green);
}

.bg-pastel-green-dark {
  background-color: var(--pastel-green-dark);
}

/* Style pour le bouton S'inscrire */
.bg-pastel-purple {
  background-color: var(--pastel-purple);
}

.bg-pastel-purple-dark {
  background-color: var(--pastel-purple-dark);
}

/* Style pour les cartes */
.bg-pastel-green-light {
  background-color: var(--pastel-green-light);
}

.bg-pastel-blue-light {
  background-color: var(--pastel-blue-light);
}

/* Style pour le texte */
.text-pastel-purple {
  color: var(--pastel-purple);
}

.text-pastel-purple-dark {
  color: var(--pastel-purple-dark);
}

.text-pastel-green {
  color: var(--pastel-green);
}

.text-pastel-blue {
  color: var(--pastel-blue);
}

/* Style pour le body */
body {
  background-color: var(--pastel-yellow);
}
</style>
