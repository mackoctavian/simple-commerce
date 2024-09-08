"use client";
import { Button } from "@/components/ui/button";
import { create } from "zustand";

const useStore = create<{
  count: number;
  inc: () => void;
  dec: () => void;
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export default function Home() {
  const store = useStore();
  return (
    <main>
      <span>{store.count}</span>
      <Button onClick={store.inc}>Add</Button>
      <Button onClick={store.dec}>Minus</Button>
    </main>
  );
}
