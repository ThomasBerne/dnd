export type MapEntry<
  T,
  K extends string = 'key',
  V extends string = 'value',
> = {
  [P in K]: T;
} & {
  [P in V]: string;
};

/**
 * A generic function to convert a map to an array of key-value pairs.
 * @param map The map to convert.
 * @param localizeValue Whether to localize the value. The value must be a i18n translation key.
 * @param keyName The name of the key property in the resulting object.
 * @param valueName The name of the value property in the resulting object.
 * @returns An array of key-value pairs.
 */
export const useMapToArray = <
  T,
  K extends string = 'key',
  V extends string = 'value',
>(
  map: Map<T, string>,
  keyName: K = 'key' as K,
  valueName: V = 'value' as V,
): MapEntry<T, K, V>[] => {
  return Array.from(map).map(
    ([key, value]) =>
      ({ [keyName]: key, [valueName]: value }) as MapEntry<T, K, V>,
  );
};
