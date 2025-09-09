import { type Inventory } from "./inventory.interface.js";
import { type Recipe } from "./recipe.interface.js";
import { type CraftingTable } from "./crafting-table.intefrace.js";
import { type Item } from "./item.interface.js";

export interface Game {
	inventory: Inventory;
	craftingTable: CraftingTable;
	unlockedItems: Recipe[];
	baseItems: Item[];
}
