import type { AdvancedItem } from "~/libs/types/advanced-item.interface.js";

import { INITIAL_ITEMS } from "~/libs/constants/constants.js";

const iron = INITIAL_ITEMS.find((i) => i.type === "iron")!;
const plastic = INITIAL_ITEMS.find((i) => i.type === "plastic")!;
const energy = INITIAL_ITEMS.find((i) => i.type === "energy")!;

export const INITIAL_AVALIABLE_CRAFT_ITEMS: AdvancedItem[] = [
	{
		item: {
			id: "bolt-1",
			type: "bolt",
			name: "Bolt",
			icon: "/src/assets/img/icons/bolt.png",
			description: "bolt",
		},
		schema: [
			[iron, iron, null],
			[null, null, null],
			[null, null, null],
		],
	},
	{
		item: {
			id: "wheel-1",
			type: "wheel",
			name: "Wheel",
			icon: "/src/assets/img/icons/wheel.png",
			description: "wheel",
		},
		schema: [
			[null, plastic, null],
			[plastic, energy, plastic],
			[null, plastic, null],
		],
	}
];