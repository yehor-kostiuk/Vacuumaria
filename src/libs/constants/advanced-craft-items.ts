import type { AdvancedItem } from "../types/advanced-item.interface.js";
import { INITIAL_AVALIABLE_CRAFT_ITEMS } from "./initial-avaliable-craft-items.ts";

const wheel = INITIAL_AVALIABLE_CRAFT_ITEMS.find((i) => i.item.type === "wheel")!;

export const ADVANCED_CRAFT_ITEMS: AdvancedItem[] = [
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
];
