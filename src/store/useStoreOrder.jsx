import { create } from "zustand";

export const useStoreOrder = create((set) => ({
  sortOrder: "cart",
  setSortOrder: (order) => set({ sortOrder: order }),
}));