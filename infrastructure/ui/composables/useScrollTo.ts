import { nextTick } from 'vue';

/**
 * allows to scroll to an element
 * @param selector document query selector to scroll to
 */
export const useScrollTo = async (
  selector: string,
  offset = 0,
): Promise<void> => {
  await nextTick();

  const element = document.querySelector<HTMLDivElement>(selector);

  if (!element) return;

  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

  console.log('top: ', top);

  window.scrollTo({ top, behavior: 'smooth' });
};
