import type { AdvancedItem } from "~/libs/types/advanced-item.interface.js";

import { INITIAL_ITEMS } from "~/libs/constants/constants.js";

const iron = INITIAL_ITEMS.find((i) => i.type === "iron")!;

export const INITIAL_AVALIABLE_CRAFT_ITEMS: AdvancedItem[] = [
	{
		item: {
			id: "bolt-1",
			type: "bolt",
			name: "Bold",
			icon: "/src/assets/img/icons",
			description: "bolt",
		},
		schema: [
			[iron, iron, null],
			[null, null, null],
			[null, null, null],
		],
	},
];
