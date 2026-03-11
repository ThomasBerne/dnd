<script lang="ts" setup>
const { abilities, getDefaultValue } = useAbilityCalculatorData();

const isExpanded = ref<boolean>(true);

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
    const cost = abilityScoreCost(ability.baseScore);
    return sum + cost;
  }, 0);

  return totalPoints - usedPoints;
});

const reset = () => {
  abilities.value = getDefaultValue();
};

const setAbilityScore = async (index: number, score: number) => {
  abilities.value[index].baseScore = score;
  await nextTick();
  abilities.value[index].baseScore = Math.max(8, Math.min(15, score ?? 8));
};

const setAbilityBonus = async (index: number, bonus: number) => {
  abilities.value[index].bonus = bonus;
  await nextTick();
  abilities.value[index].bonus = Math.max(0, Math.min(15, bonus ?? 0));
};

const getTotalScore = (ability: Ability): number =>
  ability.baseScore + ability.bonus;
</script>

<template>
  <UCard class="d-ability-calculator max-w-125 text-xl pb-2">
    <div
      class="flex gap-4 justify-between items-center mb-6 flex-col sm:flex-row"
    >
      <div>
        Points restants : <strong>{{ remainingPoints }} / 27</strong>
      </div>

      <div class="flex flex-row gap-1">
        <UButton
          color="neutral"
          variant="soft"
          @click="isExpanded = !isExpanded"
        >
          {{ isExpanded ? 'Réduire' : 'Étendre' }}
        </UButton>
        <UButton color="neutral" variant="soft" @click="reset">
          Réinitialiser
        </UButton>
      </div>
    </div>

    <div v-for="(ability, index) in abilities" :key="ability.name">
      <div class="flex justify-between gap-6">
        <div class="md:text-xl font-bold">
          {{ abilityUtils().title.get(ability.name) }}
        </div>

        <div class="flex gap-2 items-center">
          <span class="font-bold text-2xl">
            {{ getTotalScore(abilities[index]) }}
          </span>
          <span class="text-lg">
            (Mod.
            {{ abilityModifier(getTotalScore(abilities[index])) >= 0 ? '+' : ''
            }}{{ abilityModifier(getTotalScore(abilities[index])) }})
          </span>
        </div>
      </div>

      <UiTransitionExpand v-model="isExpanded">
        <div class="flex flex-col md:flex-row gap-2 md:gap-6">
          <AbilityCalculatorItem title="Score de base">
            <div class="hidden md:flex flex-row gap-1">
              <UButton
                icon="lucide:minus"
                :disabled="ability.baseScore === 8"
                @click="setAbilityScore(index, ability.baseScore - 1)"
              />
              <UInput
                v-model="ability.baseScore"
                type="number"
                :min="8"
                :max="15"
                :step="1"
                class="w-full"
                @blur="setAbilityScore(index, Number(ability.baseScore))"
              />
              <UButton
                icon="lucide:plus"
                :disabled="ability.baseScore === 15"
                @click="setAbilityScore(index, ability.baseScore + 1)"
              />
            </div>

            <div class="flex md:hidden w-full gap-2">
              <USlider
                v-model="ability.baseScore"
                :min="8"
                :max="15"
                :step="1"
              />
              <div class="min-w-8 text-right">{{ ability.baseScore }}</div>
            </div>
          </AbilityCalculatorItem>

          <AbilityCalculatorItem title="Bonus d'origine">
            <div class="hidden md:flex flex-row gap-1">
              <UButton
                icon="lucide:minus"
                :disabled="ability.bonus === 0"
                @click="setAbilityBonus(index, ability.bonus - 1)"
              />
              <UInput
                v-model="ability.bonus"
                type="number"
                :min="0"
                :max="15"
                :step="1"
                class="w-full"
                @blur="setAbilityBonus(index, Number(ability.bonus))"
              />
              <UButton
                icon="lucide:plus"
                :disabled="ability.bonus === 15"
                @click="setAbilityBonus(index, ability.bonus + 1)"
              />
            </div>

            <div class="flex md:hidden w-full gap-2">
              <USlider v-model="ability.bonus" :min="0" :max="15" :step="1" />
              <div class="min-w-8 text-right">+{{ ability.bonus }}</div>
            </div>
          </AbilityCalculatorItem>
        </div>
      </UiTransitionExpand>

      <USeparator v-if="index < abilities.length - 1" class="my-2" />
    </div>
  </UCard>
</template>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -moz-appearance: textfield;
}
</style>
