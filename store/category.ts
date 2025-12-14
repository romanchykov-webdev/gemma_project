import { create } from "zustand";

interface CreateStore {
	activeId: number;
	setActiveId: (activeId: number) => void;
}

export const useCategoriStore = create<CreateStore>((set) => ({
	activeId: 1,
	setActiveId: (activeId: number) => set({ activeId }),
}));
