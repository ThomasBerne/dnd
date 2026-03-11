import _ from '~/infrastructure/ui/components/editor/toolbar/_.vue';

export type Ability = {
  name: AbilityName;
  baseScore: number;
  bonus: number;
};

export const useAbilityCalculatorData = () => {
  const getDefaultValue = (baseScore = 8, bonus = 0): Ability[] => [
    { name: AbilityName.Strength, baseScore, bonus },
    { name: AbilityName.Dexterity, baseScore, bonus },
    { name: AbilityName.Constitution, baseScore, bonus },
    { name: AbilityName.Intelligence, baseScore, bonus },
    { name: AbilityName.Wisdom, baseScore, bonus },
    { name: AbilityName.Charisma, baseScore, bonus },
  ];

  const encodeAbilitiesToURI = (abilities: Ability[]): string => {
    return encodeURI(
      abilities
        .map((ability) => {
          return `${ability.name}-${ability.baseScore}-${ability.bonus}`;
        })
        .join('_'),
    );
  };

  const decodeURIToAbilities = (value: string): Ability[] => {
    return value
      .split('_')
      .filter((abilityString) => abilityString.trim() !== '')
      .map((abilityString) => {
        const [name, baseScore, bonus] = abilityString.split('-');
        return {
          name: name as AbilityName,
          baseScore: parseInt(baseScore),
          bonus: parseInt(bonus),
        };
      });
  };

  const internalData = useRouteQuery<string, Ability[]>(
    'abilities',
    encodeAbilitiesToURI(getDefaultValue()),
    {
      transform: {
        get: (value: string | undefined): Ability[] =>
          value ? decodeURIToAbilities(value) : getDefaultValue(),
        set: (value) => encodeAbilitiesToURI(value),
      },
      mode: 'replace',
    },
  );

  const { cloned: abilities, sync } = useCloned(internalData, {
    deep: true,
    immediate: true,
  });

  watch(
    abilities,
    (value) => {
      if (JSON.stringify(value) !== JSON.stringify(internalData.value)) {
        internalData.value = value;
      }
    },
    { deep: true },
  );

  watch(
    internalData,
    (value) => {
      if (JSON.stringify(internalData.value) !== JSON.stringify(value)) {
        sync();
      }
    },
    { deep: true },
  );

  return { abilities, getDefaultValue };
};
