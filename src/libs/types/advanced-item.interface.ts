import { type Item } from "./item.interface.js";

export interface AdvancedItem  {
	pattern: (Item | null)[][];
	output: Item;
}
