import { type Inventory } from "./inventory.interface.js";
import { type ItemType } from "./item.type.js";
import { type CraftingTable } from "./crafting-table.intefrace.js";
import { type Item } from "./item.interface.js";

export interface Game {
	inventory: Inventory;
	craftingTable: CraftingTable;
	unlockedItems: Set<ItemType>;
	baseItems: Item[];
}
