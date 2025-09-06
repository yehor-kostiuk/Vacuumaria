import type { Item, ItemType } from "~/libs/types/types.js";

export const INITIAL_ITEMS: Item[] = [
	{ id: "iron-1", type: "iron", name: "Iron" },
	{ id: "plastic-1", type: "plastic", name: "Plastic" },
	{ id: "energy-1", type: "energy", name: "Energy" },
];

export const INITIAL_UNLOCKED: ItemType[] = ["iron", "plastic", "energy"];
