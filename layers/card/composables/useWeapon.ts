export const useWeapon = () => {
  const weaponDamageTypeTitle = new Map<DamageType, string>([
    [DamageType.Acid, 'Acide'],
    [DamageType.Bludgeoning, 'Contondant'],
    [DamageType.Cold, 'Froid'],
    [DamageType.Fire, 'Feu'],
    [DamageType.Force, 'Force'],
    [DamageType.Lightning, 'Foudre'],
    [DamageType.Necrotic, 'Nécrotique'],
    [DamageType.Piercing, 'Perforant'],
    [DamageType.Poison, 'Poison'],
    [DamageType.Psychic, 'Psychique'],
    [DamageType.Radiant, 'Radiant'],
    [DamageType.Slashing, 'Tranchant'],
    [DamageType.Thunder, 'Tonnerre'],
  ]);

  const weaponPropertyTitle = new Map<WeaponProperty, string>([
    [WeaponProperty.Ammunition, 'Munitions'],
    [WeaponProperty.Finesse, 'Finesse'],
    [WeaponProperty.Heavy, 'Lourde'],
    [WeaponProperty.Light, 'Légère'],
    [WeaponProperty.Loading, 'Chargement'],
    [WeaponProperty.Reach, 'Allonge'],
    [WeaponProperty.Special, 'Spéciale'],
    [WeaponProperty.Thrown, 'Lancer'],
    [WeaponProperty.TwoHanded, 'Deux mains'],
    [WeaponProperty.Versatile, 'Polyvalente'],
    [WeaponProperty.Range, 'Portée'],
  ]);

  const weaponMasteryTitle = new Map<WeaponMastery, string>([
    [WeaponMastery.Cleave, 'Enchaînement'],
    [WeaponMastery.Graze, 'Écorchure'],
    [WeaponMastery.Nick, 'Coup double'],
    [WeaponMastery.Push, 'Poussée'],
    [WeaponMastery.Sap, 'Sape'],
    [WeaponMastery.Slow, 'Ralentissement'],
    [WeaponMastery.Topple, 'Renversement'],
    [WeaponMastery.Vex, 'Ouverture'],
  ]);

  const weaponTypeTitle = new Map<WeaponType, string>([
    [WeaponType.SimpleMelee, 'Arme courante de corps à corps'],
    [WeaponType.SimpleRanged, 'Arme courante à distance'],
    [WeaponType.MartialMelee, 'Arme de guerre de corps à corps'],
    [WeaponType.MartialRanged, 'Arme de guerre à distance'],
  ]);

  return {
    weaponDamageTypeTitle,
    weaponPropertyTitle,
    weaponMasteryTitle,
    weaponTypeTitle,
  };
};
