export const CardService = {
  getAllCards: async () => {
    return [
      {
        name: 'Fireball',
        type: CardType.Spell,
        description:
          'A bright streak flashes from your pointing finger to a point you choose...',
      },
    ] as Card[];
  },
  createCard: async (card: Card) => {
    return card;
  },
};
