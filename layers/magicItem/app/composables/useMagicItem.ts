export const useMagicItem = () => {
  const objectTypeLabel = new Map<MagicItemObjectType, string>([
    [MagicItemObjectType.Ring, 'Anneau'],
    [MagicItemObjectType.Weapon, 'Arme'],
    [MagicItemObjectType.Armor, 'Armure'],
    [MagicItemObjectType.Wand, 'Baguette'],
    [MagicItemObjectType.Staff, 'Bâton'],
    [MagicItemObjectType.WondrousItem, 'Objet merveilleux'],
    [MagicItemObjectType.Scroll, 'Parchemin'],
    [MagicItemObjectType.Potion, 'Potion'],
    [MagicItemObjectType.Rod, 'Sceptre'],
  ]);

  const rarityLabel = new Map<MagicItemRarity, string>([
    [MagicItemRarity.Common, 'Commun'],
    [MagicItemRarity.Uncommon, 'Peu commun'],
    [MagicItemRarity.Rare, 'Rare'],
    [MagicItemRarity.VeryRare, 'Très rare'],
    [MagicItemRarity.Legendary, 'Légendaire'],
    [MagicItemRarity.Artifact, 'Artéfact'],
    [MagicItemRarity.Variable, 'Variable'],
  ]);

  return { objectTypeLabel, rarityLabel };
};
