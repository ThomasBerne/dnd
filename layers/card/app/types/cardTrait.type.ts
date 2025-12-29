export enum TraitSource {
  Feat = 'feat',
  Specie = 'specie',
  Class = 'class',
  Other = 'other',
}

export type CardTrait = {
  type: CardType.Trait;
  source?: TraitSource;
  requirements?: number;
};
