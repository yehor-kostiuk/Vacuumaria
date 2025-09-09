import { Cell } from "../cell/cell";
import { CraftingTable } from "./crafting-table/crafting-table";

import styles from "./crafting.module.css";

const Crafting = () => {
	return (
		<div>
			<div>Crafting</div>
			<div className={styles["crafting-container"]}>
				<CraftingTable />
				{"->"}
				<Cell />
			</div>
		</div>
	);
};

export { Crafting };
