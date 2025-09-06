import { type Item } from "~/libs/types/types.js";

import styles from "./cell.module.css";

type Properties = {
	item: Item;
};

const Cell = ({ item }: Properties) => {
	return <div className={styles["cell"]}>{item.name}</div>;
};

export { Cell };
