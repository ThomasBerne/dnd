export enum CardType {
  Spell = 'spell',
  Item = 'item',
  MagicItem = 'magic_item',
  Skill = 'skill',
  Weapon = 'weapon',
  Armor = 'armor',
}

export type CardBase = {
  name: string;
  image?: File;
  imageContain?: boolean;
  description?: string;
};

export type Card<T = unknown> = { type: T } & CardBase &
  (CardSpell | CardItem | CardMagicItem | CardSkill | CardWeapon | CardArmor);
