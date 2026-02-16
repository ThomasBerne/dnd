export enum CardType {
  Spell = 'spell',
  Item = 'item',
  MagicItem = 'magic_item',
  Trait = 'trait',
  Weapon = 'weapon',
  Armor = 'armor',
}

export enum CardBackType {
  Image = 'image',
  Description = 'description',
}

export type CardBase = {
  name: string;
  backType: CardBackType;
  image?: File;
  imageContain?: boolean;
  description?: string;
  backDescription?: string;
  hideFrame?: boolean;
};

export type Card<T = unknown> = { type: T } & CardBase &
  (CardSpell | CardItem | CardMagicItem | CardTrait | CardWeapon | CardArmor);

export type CardOnlyProp = 'front' | 'back';
