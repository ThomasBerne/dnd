type SerializedImage = {
  base64: string;
  name: string;
  type: string;
};

type SerializedCard = Omit<Card, 'image'> & {
  image?: SerializedImage;
};

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
      case CardType.Weapon:
        return {
          ...baseValue,
          type: CardType.Weapon,
          damageDie: '',
          damageType: DamageType.Slashing,
          overrideDamage: '',
          properties: [],
          mastery: WeaponMastery.Cleave,
          weight: '',
          price: '',
        } as Card<CardType.Weapon>;
      default:
        throw new Error('Unsupported card type');
    }
  };

  const saveToJson = async (): Promise<void> => {
    // Convert images to base64 before saving
    const cardsToSave = await Promise.all(
      cards.value.map(async (card) => {
        const cardCopy: SerializedCard = { ...card, image: undefined };

        if (card.image instanceof File) {
          const base64 = await FileUtils.fileToBase64(card.image);
          cardCopy.image = {
            base64,
            name: card.image.name,
            type: card.image.type,
          };
        }
        return cardCopy;
      }),
    );

    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(cardsToSave));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'cards.json');
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const serializeCardsToCards = (jsonCards: SerializedCard[]): Card[] => {
    const cardsResult: Card[] = jsonCards.map((card) => {
      const cardCopy: Card = { ...card, image: undefined } as Card;

      if (
        card.image &&
        typeof card.image === 'object' &&
        'base64' in card.image
      ) {
        cardCopy.image = FileUtils.base64ToFile(
          card.image.base64,
          card.image.name,
          card.image.type,
        );
      }
      return cardCopy;
    });
    return cardsResult;
  };

  const getContentFromFile = <T>(file: File): Promise<T> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        resolve(JSON.parse(event.target?.result as string) as T);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };

      fileReader.readAsText(file);
    });
  };

  const loadFromJsonFile = async (jsonFile: File): Promise<void> => {
    try {
      const importedCards =
        await getContentFromFile<SerializedCard[]>(jsonFile);

      if (!importedCards || !Array.isArray(importedCards)) return;

      cards.value = serializeCardsToCards(importedCards);
    } catch (error) {
      console.error('Error loading cards from JSON:', error);
    }
  };

  return { getDefaultValue, cards, saveToJson, loadFromJsonFile };
};
