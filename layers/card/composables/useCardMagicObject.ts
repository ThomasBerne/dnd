export const useCardMagicObject = () => {
  const cardMagicItemObjectTypeLabel = new Map<CardMagicItemObjectType, string>(
    [
      [CardMagicItemObjectType.Ring, 'Anneau'],
      [CardMagicItemObjectType.Weapon, 'Arme'],
      [CardMagicItemObjectType.Armor, 'Armure'],
      [CardMagicItemObjectType.Wand, 'Baguette'],
      [CardMagicItemObjectType.Staff, 'Bâton'],
      [CardMagicItemObjectType.WondrousItem, 'Objet merveilleux'],
      [CardMagicItemObjectType.Scroll, 'Parchemin'],
      [CardMagicItemObjectType.Potion, 'Potion'],
      [CardMagicItemObjectType.Rod, 'Sceptre'],
    ],
  );

  const cardMagicItemRarityLabel = new Map<CardMagicItemRarity, string>([
    [CardMagicItemRarity.Common, 'Commun'],
    [CardMagicItemRarity.Uncommon, 'Peu commun'],
    [CardMagicItemRarity.Rare, 'Rare'],
    [CardMagicItemRarity.VeryRare, 'Très rare'],
    [CardMagicItemRarity.Legendary, 'Légendaire'],
    [CardMagicItemRarity.Artifact, 'Artéfact'],
    [CardMagicItemRarity.Variable, 'Variable'],
  ]);

  return { cardMagicItemObjectTypeLabel, cardMagicItemRarityLabel };
};
