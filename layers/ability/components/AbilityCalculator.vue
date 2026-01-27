<script lang="ts" setup>
type Ability = {
  name: string;
  score: number;
};

type Abilities = {
  strength: Ability;
  dexterity: Ability;
  constitution: Ability;
  intelligence: Ability;
  wisdom: Ability;
  charisma: Ability;
};

const abilities = ref<Abilities>({
  strength: { name: 'Force', score: 8 },
  dexterity: { name: 'Dextérité', score: 8 },
  constitution: { name: 'Constitution', score: 8 },
  intelligence: { name: 'Intelligence', score: 8 },
  wisdom: { name: 'Sagesse', score: 8 },
  charisma: { name: 'Charisme', score: 8 },
});

const abilityScoreCost = (score: number): number => {
  if (score < 8) return 0;
  if (score === 8) return 0;
  if (score === 9) return 1;
  if (score === 10) return 2;
  if (score === 11) return 3;
  if (score === 12) return 4;
  if (score === 13) return 5;
  if (score === 14) return 7;
  if (score === 15) return 9;
  return Infinity; // Scores above 15 are not allowed in standard point buy
};

const remainingPoints = computed((): number => {
  const totalPoints = 27;

  const usedPoints = Object.values(abilities.value).reduce((sum, ability) => {
    const cost = abilityScoreCost(ability.score);
    return sum + cost;
  }, 0);

  return totalPoints - usedPoints;
});

const reset = () => {
  Object.values(abilities.value).forEach((ability) => {
    ability.score = 8;
  });
};
</script>

<template>
  <UCard class="max-w-160 text-xl">
    <div
      class="flex gap-4 justify-between items-center mb-6 flex-col sm:flex-row"
    >
      <div>
        Points restants : <strong>{{ remainingPoints }} / 27</strong>
      </div>

      <UButton color="neutral" variant="soft" @click="reset">
        Réinitialiser
      </UButton>
    </div>

    <div
      v-for="(ability, key) in abilities"
      :key="key"
      class="flex gap-2 sm:items-center sm:flex-row flex-col"
    >
      <span class="min-w-32 font-bold">{{ ability.name }}</span>
      <div class="my-4 w-full flex gap-2">
        <USlider v-model="ability.score" :min="8" :max="15" :step="1" />
        <span class="min-w-6 font-bold text-right">{{ ability.score }}</span>
      </div>
    </div>
  </UCard>
</template>
