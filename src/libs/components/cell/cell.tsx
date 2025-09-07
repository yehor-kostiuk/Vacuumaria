import { type Item } from "~/libs/types/types.js";

import styles from "./cell.module.css";

type Properties = {
	item?: Item | null;
};

const Cell = ({ item }: Properties) => {
	return (
		<div className={styles["cell"]}>
			{item && <img src={`/`} alt={item.name} />}
		</div>
	);
};

export { Cell };
