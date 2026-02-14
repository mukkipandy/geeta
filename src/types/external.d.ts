declare module 'react' {
  export type ReactNode = any;
  export interface Context<T> {
    Provider: any;
  }
  export function createContext<T>(defaultValue: T): Context<T>;
  export function useContext<T>(ctx: Context<T>): T;
  export function useMemo<T>(factory: () => T, deps: unknown[]): T;
  export function useEffect(effect: () => void | (() => void), deps: unknown[]): void;
  export function useState<T>(value: T): [T, (value: T | ((prev: T) => T)) => void];

  const React: any;
  export default React;
}

declare module 'react-native' {
  export const View: any;
  export const Text: any;
  export const SafeAreaView: any;
  export const Pressable: any;
  export const ScrollView: any;
}
