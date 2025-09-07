import { Cell } from "../cell/cell.jsx";

import { useGameStore } from "~/libs/modules/store.module.js";
import { type Item } from "~/libs/types/types.js";

import styles from "./resources.module.css";

const Resources = () => {
	const baseResources = useGameStore((state) => state.baseItems);

	return (
		<div className={styles["resources"]}>
			{baseResources.map((item: Item) => (
				<Cell key={item.id} item={item} />
			))}
		</div>
	);
};

export { Resources };
