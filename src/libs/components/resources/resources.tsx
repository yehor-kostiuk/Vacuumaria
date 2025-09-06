import { Cell } from "../cell/cell.jsx";

import { useGameStore } from "~/libs/modules/store.module.js";
import { type Item } from "~/libs/types/types.js";

import styles from "./resources.module.css";

const Resources = () => {
	const inventoryItems = useGameStore((state) => state.inventory.items);
	console.log(inventoryItems);

	return (
		<div className={styles["resources"]}>
			{inventoryItems.map((item: Item) => (
				<Cell key={item.id} item={item} />
			))}
		</div>
	);
};

export { Resources };
