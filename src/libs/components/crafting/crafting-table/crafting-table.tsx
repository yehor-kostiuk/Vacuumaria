import { useGameStore } from "~/libs/modules/store.module.js";

import { Cell } from "../../cell/cell.js";

import styles from "./crafting-table.module.css";

const CraftingTable = () => {
	const craftingTable = useGameStore((state) => state.craftingTable);

	return (
		<div className={styles["crafting-table"]}>
			{craftingTable.map((slot) => (
				<Cell key={slot.id} />
			))}
		</div>
	);
};

export { CraftingTable };
