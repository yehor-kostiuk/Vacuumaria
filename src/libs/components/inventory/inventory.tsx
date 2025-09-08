import { Cell } from "../cell/cell.jsx";

import { useGameStore } from "~/libs/modules/store.module.js";
import { generateInventorySlots } from "~/libs/helpers/helpers.js";

import styles from "./inventory.module.css";

const Inventory = () => {
	const inventory = useGameStore((state) => state.inventory);
	const slots = generateInventorySlots(inventory.items);

	return (
		<div className={styles["inventory-wrapper"]}>
			<div className={styles["inventory-title"]}>Inventory</div>
			<div className={styles["inventory-container"]}>
				<div className={styles["inventory"]}>
					{slots.map((item, index) => (
						<Cell key={index} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export { Inventory };
