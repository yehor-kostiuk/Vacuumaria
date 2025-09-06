import { type Inventory } from "./inventory.interface.js";
import { type ItemType } from "./item.type.js";
import { type CraftingTable } from "./crafting-table.intefrace.js";

export interface Game {
	inventory: Inventory;
	craftingTable: CraftingTable;
	unlockedItems: Set<ItemType>;
}
