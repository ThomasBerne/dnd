export enum SpellLevel {
  Cantrip = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
}

export enum SpellSchool {
  Abjuration = 'abjuration',
  Conjuration = 'conjuration',
  Divination = 'divination',
  Enchantment = 'enchantment',
  Evocation = 'evocation',
  Illusion = 'illusion',
  Necromancy = 'necromancy',
  Transmutation = 'transmutation',
}

export enum SpellComponent {
  Verbal = 'verbal',
  Somatic = 'somatic',
  Material = 'material',
}

export type CardSpell = {
  type: CardType.Spell;
  level?: SpellLevel;
  school?: SpellSchool;
  incantationTime?: string;
  components?: SpellComponent[];
  componentsDetails?: string;
  range?: string;
  duration?: string;
  concentration?: boolean;
  ritual?: boolean;
  classes?: string[];
};
