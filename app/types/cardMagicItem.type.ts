export enum CardMagicItemRarity {
  Common = 'common',
  Uncommon = 'uncommon',
  Rare = 'rare',
  VeryRare = 'very_rare',
  Legendary = 'legendary',
  Artifact = 'artifact',
  Variable = 'variable',
}

export enum CardMagicItemObjectType {
  Weapon = 'weapon',
  Armor = 'armor',
  WondrousItem = 'wondrous_item',
  Ring = 'ring',
  Rod = 'rod',
  Staff = 'staff',
  Scroll = 'scroll',
  Potion = 'potion',
  Wand = 'wand',
}

export type CardMagicItem = {
  type: CardType.MagicItem;
  rarity?: CardMagicItemRarity;
  rarityDescription?: string;
  objectType?: CardMagicItemObjectType;
  objectTypeDescription?: string;
  attunementRequired?: boolean;
  attunementDescription?: string;
  description?: string;
  image?: File;
};
