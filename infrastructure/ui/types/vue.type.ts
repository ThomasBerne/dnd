export type ClassProp =
  | string
  | Record<string, boolean>
  | (string | Record<string, boolean>)[];
