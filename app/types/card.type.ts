export enum CardType {
  Spell = 'spell',
  Item = 'item',
  MagicItem = 'magic_item',
}

export type CardBase = {
  name: string;
};

export type CardSpell = {
  type: CardType.Spell;
};

export type CardItem = {
  type: CardType.Item;
};

export enum CardMagicItemRarity {
  Common = 'common',
  Uncommon = 'uncommon',
  Rare = 'rare',
  VeryRare = 'very_rare',
  Legendary = 'legendary',
  Artifact = 'artifact',
  Variable = 'variable',
}

export type CardMagicItem = {
  type: CardType.MagicItem;
  rarity: CardMagicItemRarity;
};

export type Card = CardBase & (CardSpell | CardItem | CardMagicItem);
