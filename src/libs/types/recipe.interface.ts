import { type Item } from "./item.interface.js";

export interface Recipe {
	pattern: (Item | null)[][];
	output: Item;
}
