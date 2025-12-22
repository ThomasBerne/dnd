export enum CardType {
  Spell = 'spell',
  Item = 'item',
  MagicItem = 'magic_item',
}

export type CardBase = {
  name: string;
};

export type Card<T = unknown> = { type: T } & CardBase &
  (CardSpell | CardItem | CardMagicItem);
