import { beforeEach, describe, expect, it } from "vitest";
import type { StateStorage } from "zustand/middleware";
import { makeCounterStore } from "./store";

const memoryStorage = (): StateStorage => {
  const m = new Map<string, string>();
  return {
    getItem: (k) => m.get(k) ?? null,
    setItem: (k, v) => void m.set(k, v),
    removeItem: (k) => void m.delete(k),
  };
};

describe("counter vanilla store", () => {
  const key = "ct";
  let store = makeCounterStore({ key, storage: memoryStorage() });

  beforeEach(() => {
    store = makeCounterStore({ key, storage: memoryStorage() });
  });

  it("초기값은 0이어야 한다", () => {
    expect(store.getState().count).toBe(0);
  });

  it("increase / decrease / set / reset가 정상 동작해야 한다", () => {
    const s = store.getState();

    s.increase();
    expect(store.getState().count).toBe(1);

    s.decrease();
    expect(store.getState().count).toBe(0);

    s.set(10);
    expect(store.getState().count).toBe(10);

    s.reset();
    expect(store.getState().count).toBe(0);
  });

  it("persist 스토리지가 있으면 값이 복원되어야 한다", () => {
    const mem = memoryStorage();
    const s1 = makeCounterStore({ key, storage: mem });

    s1.getState().set(7);

    const s2 = makeCounterStore({ key, storage: mem });
    expect(s2.getState().count).toBe(7);
  });
});
