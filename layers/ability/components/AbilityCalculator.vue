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

/**
 * Calculate the ability modifier for a given ability score
 * @param score The ability score to calculate the modifier for
 */
const abilityModifier = (score: number): number => Math.floor((score - 10) / 2);

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
      class="flex gap-2 flex-col mb-6"
    >
      <div class="flex gap-4 justify-between items-center">
        <span class="font-bold text-2xl">{{ ability.name }}</span>

        <div class="flex gap-2 items-center">
          <span class="font-bold text-2xl text-right">
            {{ ability.score }}
          </span>
          <span class="text-right whitespace-nowrap">
            (Mod.
            {{ abilityModifier(ability.score) >= 0 ? '+' : ''
            }}{{ abilityModifier(ability.score) }})
          </span>
        </div>
      </div>
      <USlider v-model="ability.score" :min="8" :max="15" :step="1" />
    </div>
  </UCard>
</template>
