import { create } from "zustand";
import type {
	Inventory,
	CraftingSlot,
	CraftingTable,
	Game,
	ItemType,
	Item,
} from "~/libs/types/types.js";

import { INITIAL_ITEMS } from "~/libs/constants/constants.js";

export const initialCraftingTable: CraftingSlot[] = Array.from(
	{ length: 9 },
	(_, i) => ({ id: `slot${i + 1}` }),
);

export const useGameStore = create<
	Game & { addToInventory: (item: Item) => void }
>((set) => ({
	inventory: { items: [] } as Inventory,
	craftingTable: initialCraftingTable as CraftingTable,
	baseItems: INITIAL_ITEMS,
	unlockedItems: new Set<ItemType>(),

	addToInventory: (item: Item) =>
		set((state) => ({
			inventory: {
				items: [...state.inventory.items, item],
			},
		})),
}));
