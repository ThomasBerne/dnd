type SerializedImage = {
  base64: string;
  name: string;
  type: string;
};

type SerializedCard = Omit<Card, 'image'> & {
  image?: SerializedImage;
};

const description = `
<h1>The Complete Guide to Modern Web Development</h1>
<p>Web development has evolved significantly over the past decade. What once required multiple tools and complex setups can now be accomplished with modern frameworks and libraries that prioritize developer experience.</p>

<h2>Getting Started</h2>
<p>Before diving into the technical details, it's important to understand the foundational concepts that make modern web development possible.</p>

<blockquote>
  <p>"The best code is no code at all. Every new line of code you willingly bring into the world is code that has to be debugged, code that has to be read and understood." - Jeff Atwood</p>
</blockquote>

<p>This philosophy guides much of modern development practices, emphasizing simplicity and maintainability over complexity.</p>

<hr>

<h2>Key Technologies</h2>
<p>Here are the essential technologies every web developer should be familiar with:</p>

<ul>
  <li>HTML5 and semantic markup</li>
  <li>CSS3 with modern layout techniques
    <ul>
      <li>Flexbox for one-dimensional layouts</li>
      <li>Grid for two-dimensional layouts</li>
      <li>Custom properties (CSS variables)</li>
    </ul>
  </li>
  <li>JavaScript (ES6+)</li>
  <li>TypeScript for type safety</li>
</ul>

<h3>Framework Comparison</h3>
<p>Choosing the right framework depends on your project requirements:</p>

<ol>
  <li>React - Component-based UI library</li>
  <li>Vue - Progressive framework</li>
  <li>Angular - Full-featured platform</li>
  <li>Svelte - Compile-time framework</li>
</ol>

<hr>

<h2>Best Practices</h2>
<p>Following established best practices ensures your code remains maintainable and scalable.</p>

<blockquote>
  <p>Always write code as if the person who ends up maintaining it is a violent psychopath who knows where you live.</p>
</blockquote>

<h3>Code Organization</h3>
<p>A well-organized codebase is crucial for long-term project success. Consider these principles:</p>

<ul>
  <li>Separation of concerns</li>
  <li>DRY (Don't Repeat Yourself)</li>
  <li>KISS (Keep It Simple, Stupid)</li>
</ul>

<p>By following these guidelines, you'll create applications that are easier to maintain, test, and extend over time.</p>
`;

const state = createGlobalState(() => {
  return { cards: ref<Card[]>([]) };
});

export const useCard = () => {
  const { cards } = state();

  const getDefaultValue = (type: CardType) => {
    const baseValue: CardBase = {
      name: '',
      description,
      image: undefined,
      imageContain: false,
    };

    switch (type) {
      case CardType.MagicItem:
        return {
          ...baseValue,
          type: CardType.MagicItem,
          objectType: MagicItemObjectType.Weapon,
          objectTypeDescription: '',
          rarity: MagicItemRarity.Common,
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
