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
import {
	INITIAL_ITEMS,
	INITIAL_AVALIABLE_CRAFT_ITEMS,
	ADVANCED_CRAFT_ITEMS,
} from "~/libs/constants/constants.js";

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
	moveItem: (
		from: { context: "inventory" | "crafting"; index: number },
		to: { context: "inventory" | "crafting"; index: number },
	) => void;
	craftedItem: () => Item | null;
	takeCraftedItem: () => void;
}
>()(
	persist(
		(set, get) => ({
			inventory: { items: [] } as Inventory,
			craftingTable: initialCraftingTable as CraftingTable,
			baseItems: INITIAL_ITEMS,
			unlockedItems: [] as AdvancedItem[],
			availableForCrafting: INITIAL_AVALIABLE_CRAFT_ITEMS,
			advancedCraftItems: ADVANCED_CRAFT_ITEMS, // добавлено

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
				set((state) => {
					if (!state.unlockedItems.find((r) => r.item.id === recipe.item.id)) {
						return { unlockedItems: [...state.unlockedItems, recipe] };
					}
					return state;
				}),

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

			moveItem: (from, to) =>
				set((state) => {
					const newInventory = [...state.inventory.items];
					const newCrafting = [...state.craftingTable];
					let dragged: Item | undefined;

					if (from.context === "inventory") {
						dragged = newInventory[from.index];
						if (!dragged) return state;
						newInventory.splice(from.index, 1);
					} else {
						dragged = newCrafting[from.index].item;
						if (!dragged) return state;
						newCrafting[from.index] = {
							...newCrafting[from.index],
							item: undefined,
						};
					}

					if (to.context === "inventory") {
						if (to.index >= newInventory.length) newInventory.push(dragged);
						else newInventory.splice(to.index, 0, dragged);
					} else {
						newCrafting[to.index] = { ...newCrafting[to.index], item: dragged };
					}

					return {
						...state,
						inventory: { ...state.inventory, items: newInventory },
						craftingTable: newCrafting,
					};
				}),

			craftedItem: () => {
				const { craftingTable, availableForCrafting, advancedCraftItems } = get();
				const currentSchema = craftingTable.map((slot) => slot.item ?? null);

				const allRecipes = [...availableForCrafting, ...advancedCraftItems];

				for (const recipe of allRecipes) {
					const flatSchema = recipe.schema.flat();
					let matches = true;

					for (let i = 0; i < flatSchema.length; i++) {
						const expected = flatSchema[i];
						const actual = currentSchema[i];

						if (expected === null && actual === null) continue;
						if (expected === null && actual !== null) {
							matches = false;
							break;
						}
						if (expected !== null && actual === null) {
							matches = false;
							break;
						}
						if (expected?.type !== actual?.type) {
							matches = false;
							break;
						}
					}

					if (matches) return recipe.item;
				}
				return null;
			},

			takeCraftedItem: () =>
				set((state) => {
					const crafted = get().craftedItem();
					if (!crafted) return state;

					const allRecipes = [...state.availableForCrafting, ...state.advancedCraftItems];

					const recipe = allRecipes.find((r) => r.item.id === crafted.id);

					const newUnlockedItems = recipe
						? state.unlockedItems.find((r) => r.item.id === recipe.item.id)
							? state.unlockedItems
							: [...state.unlockedItems, recipe]
						: state.unlockedItems;

					return {
						...state,
						inventory: {
							items: [...state.inventory.items, { ...crafted, id: nanoid() }],
						},
						craftingTable: state.craftingTable.map((slot) => ({
							...slot,
							item: undefined,
						})),
						unlockedItems: newUnlockedItems,
					};
				}),
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
