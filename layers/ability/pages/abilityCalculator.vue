<script setup lang="ts">
const title = 'Calculateur de capacités D&D';
const description =
  'Calculez facilement les modificateurs de capacités pour vos personnages de Donjons & Dragons 5e et 5.5e avec notre outil en ligne simple et rapide. Optimisez vos personnages pour des aventures épiques.';

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/dungeons-dragons-artwork.avif',
  ogUrl: 'https://dnd-kappa-one.vercel.app',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/images/dungeons-dragons-artwork.avif',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div>
    <h1 class="text-3xl mb-6 font-bold">
      Calculateur de caractéristiques Donjons et Dragons
    </h1>

    <AbilityCalculator />
  </div>
</template>
