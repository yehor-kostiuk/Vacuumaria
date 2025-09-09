import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
	Inventory,
	CraftingSlot,
	CraftingTable,
	Game,
	Item,
	Recipe,
} from "~/libs/types/types.js";

import { INITIAL_ITEMS } from "~/libs/constants/constants.js";

export const initialCraftingTable: CraftingSlot[] = Array.from(
	{ length: 9 },
	(_, i) => ({ id: `slot${i + 1}` }),
);

export const useGameStore = create<
	Game & {
		addToInventory: (item: Item) => void;
		unlockRecipe: (recipe: Recipe) => void;
	}
>()(
	persist(
		(set) => ({
			inventory: { items: [] } as Inventory,
			craftingTable: initialCraftingTable as CraftingTable,
			baseItems: INITIAL_ITEMS,
			unlockedItems: [] as Recipe[],

			addToInventory: (item: Item) =>
				set((state) => ({
					inventory: { items: [...state.inventory.items, item] },
				})),

			unlockRecipe: (recipe: Recipe) =>
				set((state) => ({
					unlockedItems: [...state.unlockedItems, recipe],
				})),
		}),
		{
			name: "inventory-storage",
			partialize: (state) => ({
				inventory: state.inventory,
				unlockedItems: state.unlockedItems,
			}),
		},
	),
);
