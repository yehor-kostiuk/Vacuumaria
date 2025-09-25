import type { AdvancedItem } from "../types/advanced-item.interface.js";
import type { Item } from "../types/types";
import { INITIAL_AVALIABLE_CRAFT_ITEMS } from "./initial-avaliable-craft-items.ts";

const wheel = INITIAL_AVALIABLE_CRAFT_ITEMS.find((i) => i.item.type === "wheel")!;
const gaika = INITIAL_AVALIABLE_CRAFT_ITEMS.find((i) => i.item.type === "gaika")!;
const bolt = INITIAL_AVALIABLE_CRAFT_ITEMS.find((i) => i.item.type === "bolt")!;

export interface itempro  {
	schema: (AdvancedItem | null)[][];
	item: Item;
}

export const ADVANCED_CRAFT_ITEMS: itempro[] = [
	{
		item: {
			id: "wheels-1",
			type: "wheels",
			name: "Wheels",
			icon: "/src/assets/img/icons/wheels.png",
			description: "wheels",
		},
		schema: [
			[wheel, null, wheel],
			[null, null, null],
			[wheel, null, wheel],
		],
	},
	{
		item: {
			id: "engine-1",
			type: "engine",
			name: "Engine",
			icon: "/src/assets/img/icons/engine.png",
			description: "wheels",
		},
		schema: [
			[bolt, gaika, null],
			[null, null, null],
			[null, null, null],
		],
	}
];
