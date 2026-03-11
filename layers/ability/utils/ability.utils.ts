export enum AbilityName {
  Strength = 'str',
  Dexterity = 'dex',
  Constitution = 'con',
  Intelligence = 'int',
  Wisdom = 'wis',
  Charisma = 'cha',
}

export const abilityUtils = () => {
  const title = new Map<AbilityName, string>([
    [AbilityName.Strength, 'Force'],
    [AbilityName.Dexterity, 'Dextérité'],
    [AbilityName.Constitution, 'Constitution'],
    [AbilityName.Intelligence, 'Intelligence'],
    [AbilityName.Wisdom, 'Sagesse'],
    [AbilityName.Charisma, 'Charisme'],
  ]);

  return { title };
};
