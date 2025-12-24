const state = createGlobalState(() => {
  return { cards: ref<Card[]>([]) };
});

export const useCard = () => {
  const { cards } = state();

  const getDefaultValue = (type: CardType) => {
    const baseValue: CardBase = {
      name: '',
      description: '',
      image: undefined,
      imageContain: false,
    };

    switch (type) {
      case CardType.MagicItem:
        return {
          ...baseValue,
          type: CardType.MagicItem,
          objectType: CardMagicItemObjectType.Weapon,
          objectTypeDescription: '',
          rarity: CardMagicItemRarity.Common,
          rarityDescription: '',
          attunementDescription: '',
          attunementRequired: false,
        } as Card<CardType.MagicItem>;
      case CardType.Item:
        return {
          type: CardType.Item,
          name: '',
          description: '',
          weight: undefined,
        } as Card<CardType.Item>;
      case CardType.Spell:
        return {
          ...baseValue,
          type: CardType.Spell,
          image: undefined,
          classes: [],
          level: SpellLevel.Cantrip,
          school: SpellSchool.Abjuration,
          components: [],
          componentsDetails: '',
          castingTime: '',
          range: '',
          duration: '',
          ritual: false,
          concentration: false,
          incantationTime: '',
        } as Card<CardType.Spell>;
      case CardType.Trait:
        return {
          ...baseValue,
          type: CardType.Trait,
          source: TraitSource.Class,
        } as Card<CardType.Trait>;
      default:
        throw new Error('Unsupported card type');
    }
  };

  return { getDefaultValue, cards };
};
