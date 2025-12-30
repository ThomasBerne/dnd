export const useClassTrait = () => {
  const sourceTitle = new Map<TraitSource, string>([
    [TraitSource.Class, 'Classe'],
    [TraitSource.Feat, 'Don'],
    [TraitSource.Specie, 'Espèce'],
    [TraitSource.Other, 'Autre'],
  ]);

  CardService.getAllCards();

  return {
    sourceTitle,
  };
};
