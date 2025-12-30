export type CardMagicItem = {
  type: CardType.MagicItem;
  rarity?: MagicItemRarity;
  rarityDescription?: string;
  objectType?: MagicItemObjectType;
  objectTypeDescription?: string;
  attunementRequired?: boolean;
  attunementDescription?: string;
};
