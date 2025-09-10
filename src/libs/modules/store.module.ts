import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import type {
	Inventory,
	CraftingSlot,
	CraftingTable,
	Game,
	Item,
	AdvancedItem,
} from "~/libs/types/types.js";

import { INITIAL_ITEMS } from "~/libs/constants/constants.js";

export const initialCraftingTable: CraftingSlot[] = Array.from(
	{ length: 9 },
	(_, i) => ({ id: `slot${i + 1}` }),
);

const useGameStore = create<
	Game & {
		addToInventory: (item: Item) => void;
		removeFromInventory: (itemId: string) => void;
		unlockRecipe: (recipe: AdvancedItem) => void;
		addToCraftingTable: (slotId: string, item: Item) => void;
		removeFromCraftingTable: (slotId: string) => void;
	}
>()(
	persist(
		(set) => ({
			inventory: { items: [] } as Inventory,
			craftingTable: initialCraftingTable as CraftingTable,
			baseItems: INITIAL_ITEMS,
			unlockedItems: [] as AdvancedItem[],

			addToInventory: (item: Item) =>
				set((state) => ({
					inventory: {
						items: [...state.inventory.items, { ...item, id: nanoid() }],
					},
				})),

			removeFromInventory: (id: string) =>
				set((state) => ({
					inventory: {
						items: state.inventory.items.filter((i) => i.id !== id),
					},
				})),

			unlockRecipe: (recipe: AdvancedItem) =>
				set((state) => ({
					unlockedItems: [...state.unlockedItems, recipe],
				})),

			addToCraftingTable: (slotId, item) =>
				set((state) => ({
					craftingTable: state.craftingTable.map((slot) =>
						slot.id === slotId ? { ...slot, item } : slot,
					),
				})),

			removeFromCraftingTable: (slotId) =>
				set((state) => ({
					craftingTable: state.craftingTable.map((slot) =>
						slot.id === slotId ? { ...slot, item: undefined } : slot,
					),
				})),
		}),
		{
			name: "storage",
			partialize: (state) => ({
				inventory: state.inventory,
				craftingTable: state.craftingTable,
				unlockedItems: state.unlockedItems,
			}),
		},
	),
);

export { useGameStore };
