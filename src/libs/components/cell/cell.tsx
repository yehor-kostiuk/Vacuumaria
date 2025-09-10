import { useGameStore } from "~/libs/modules/store.module.js";

import { type Item } from "~/libs/types/types.js";

import styles from "./cell.module.css";

type Properties = {
	item?: Item | null;
	slotId?: string;
	context?: "inventory" | "crafting";
};

const Cell = ({ item, slotId, context }: Properties) => {
	const addToCraftingTable = useGameStore((s) => s.addToCraftingTable);
	const removeFromCraftingTable = useGameStore(
		(s) => s.removeFromCraftingTable,
	);
	const addToInventory = useGameStore((s) => s.addToInventory);
	const removeFromInventory = useGameStore((s) => s.removeFromInventory);

	const handleClick = () => {
		if (!item) return;

		if (context === "inventory") {
			const state = useGameStore.getState();
			const emptySlot = state.craftingTable.find((slot) => !slot.item);

			if (emptySlot) {
				addToCraftingTable(emptySlot.id, item);
				removeFromInventory(item.id);
			}
		}

		if (context === "crafting" && slotId) {
			removeFromCraftingTable(slotId);
			addToInventory(item);
		}
	};

	return (
		<div className={styles.cell} onClick={handleClick}>
			{item && <img src={item.icon} alt={item.name} />}
		</div>
	);
};

export { Cell };
