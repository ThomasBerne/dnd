export enum DamageType {
  Acid = 'acid', // Acide
  Bludgeoning = 'bludgeoning', // Contondant
  Cold = 'cold', // Froid
  Fire = 'fire', // Feu
  Force = 'force', // Force
  Lightning = 'lightning', // Foudre
  Necrotic = 'necrotic', // Nécrotique
  Piercing = 'piercing', // Perforant
  Poison = 'poison', // Poison
  Psychic = 'psychic', // Psychique
  Radiant = 'radiant', // Radiant
  Slashing = 'slashing', // Tranchant
  Thunder = 'thunder', // Tonnerre
}

// Propriétés d'armes
export enum WeaponProperty {
  Ammunition = 'ammunition', // Munitions
  Finesse = 'finesse', // Finesse
  Heavy = 'heavy', // Lourde
  Light = 'light', // Légère
  Loading = 'loading', // Chargement
  Reach = 'reach', // Allonge
  Special = 'special', // Spéciale
  Thrown = 'thrown', // Lancer
  TwoHanded = 'two-handed', // Deux mains
  Versatile = 'versatile', // Polyvalente
  Range = 'range', // Portée
}

// Bottes d'armes
export enum WeaponMastery {
  Cleave = 'cleave', // Enchaînement
  Graze = 'graze', // Écorchure
  Nick = 'nick', // Coup double
  Push = 'push', // Poussée
  Sap = 'sap', // Sape
  Slow = 'slow', // Ralentissement
  Topple = 'topple', // Renversement
  Vex = 'vex', // Ouverture
}

export type CardWeaponProperty = {
  value?: WeaponProperty;
  details?: string;
};

export enum WeaponType {
  SimpleMelee = 'simple-melee',
  SimpleRanged = 'simple-ranged',
  MartialMelee = 'martial-melee',
  MartialRanged = 'martial-ranged',
}

export type CardWeapon = {
  type: CardType.Weapon;
  weaponType?: WeaponType;
  damageDie?: string;
  damageType?: DamageType;
  overrideDamage?: string;
  properties: CardWeaponProperty[];
  mastery: WeaponMastery;
  weight?: string;
  price?: string;
};
