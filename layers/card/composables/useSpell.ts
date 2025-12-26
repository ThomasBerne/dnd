import AbjurationIcon from '@/layers/card/assets/images/spell/school/abjuration.png';
import ConjurationIcon from '@/layers/card/assets/images/spell/school/conjuration.png';
import DivinationIcon from '@/layers/card/assets/images/spell/school/divination.png';
import EnchantmentIcon from '@/layers/card/assets/images/spell/school/enchantment.png';
import EvocationIcon from '@/layers/card/assets/images/spell/school/evocation.png';
import IllusionIcon from '@/layers/card/assets/images/spell/school/illusion.png';
import NecromancyIcon from '@/layers/card/assets/images/spell/school/necromancy.png';
import TransmutationIcon from '@/layers/card/assets/images/spell/school/transmutation.png';

export const useSpell = () => {
  const spellLevelTitle = new Map<SpellLevel, string>([
    [SpellLevel.Cantrip, 'Sort mineur'],
    [SpellLevel.One, 'Niveau 1'],
    [SpellLevel.Two, 'Niveau 2'],
    [SpellLevel.Three, 'Niveau 3'],
    [SpellLevel.Four, 'Niveau 4'],
    [SpellLevel.Five, 'Niveau 5'],
    [SpellLevel.Six, 'Niveau 6'],
    [SpellLevel.Seven, 'Niveau 7'],
    [SpellLevel.Eight, 'Niveau 8'],
    [SpellLevel.Nine, 'Niveau 9'],
  ]);

  const spellSchoolTitle = new Map<SpellSchool, string>([
    [SpellSchool.Abjuration, 'Abjuration'],
    [SpellSchool.Conjuration, 'Invocation'],
    [SpellSchool.Divination, 'Divination'],
    [SpellSchool.Enchantment, 'Enchantement'],
    [SpellSchool.Evocation, 'Évocation'],
    [SpellSchool.Illusion, 'Illusion'],
    [SpellSchool.Necromancy, 'Nécromancie'],
    [SpellSchool.Transmutation, 'Transmutation'],
  ]);

  const spellSchoolIcon = new Map<SpellSchool, string>([
    [SpellSchool.Abjuration, AbjurationIcon],
    [SpellSchool.Conjuration, ConjurationIcon],
    [SpellSchool.Divination, DivinationIcon],
    [SpellSchool.Enchantment, EnchantmentIcon],
    [SpellSchool.Evocation, EvocationIcon],
    [SpellSchool.Illusion, IllusionIcon],
    [SpellSchool.Necromancy, NecromancyIcon],
    [SpellSchool.Transmutation, TransmutationIcon],
  ]);

  const spellComponentTitle = new Map<SpellComponent, string>([
    [SpellComponent.Verbal, 'Verbal'],
    [SpellComponent.Somatic, 'Somatique'],
    [SpellComponent.Material, 'Matériel'],
  ]);

  const spellComponentLetter = new Map<SpellComponent, string>([
    [SpellComponent.Verbal, 'V'],
    [SpellComponent.Somatic, 'S'],
    [SpellComponent.Material, 'M'],
  ]);

  return {
    spellLevelTitle,
    spellSchoolTitle,
    spellSchoolIcon,
    spellComponentTitle,
    spellComponentLetter,
  };
};
