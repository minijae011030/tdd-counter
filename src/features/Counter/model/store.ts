import { create, type StateCreator } from "zustand";
import {
  createJSONStorage,
  persist,
  type StateStorage,
} from "zustand/middleware";
import { createStore } from "zustand/vanilla";

type CounterState = { count: number };
type CounterActions = {
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  set: (n: number) => void;
};
export type CounterSlice = CounterState & CounterActions;

const creator: StateCreator<
  CounterSlice,
  [["zustand/persist", unknown]],
  []
> = (set, get) => ({
  count: 0,
  increase: () => set((s) => ({ count: s.count + 1 })),
  decrease: () => set((s) => ({ count: s.count - 1 })),
  reset: () => set({ count: 0 }),
  set: (n) => set({ count: n }),
});

function makePersistOptions(opts?: { key?: string; storage?: StateStorage }) {
  return {
    name: opts?.key ?? "counter",
    storage: opts?.storage
      ? createJSONStorage(() => opts!.storage!)
      : typeof window !== "undefined"
        ? createJSONStorage(() => localStorage)
        : undefined,
    version: 1,
  } as const;
}

export const useCounterStore = create<CounterSlice>()(
  persist(creator, makePersistOptions()),
);

export function makeCounterStore(opts?: {
  key?: string;
  storage?: StateStorage;
}) {
  const persistedCreator = persist(creator, makePersistOptions(opts));
  return createStore<CounterSlice>()(persistedCreator);
}

export const counterStore = makeCounterStore();
