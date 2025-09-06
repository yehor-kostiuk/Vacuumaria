import { type ItemType } from "./item.type.js";

export interface Recipe {
	id: string;
	inputs: { [key in ItemType]?: number };
	output: ItemType;
}
