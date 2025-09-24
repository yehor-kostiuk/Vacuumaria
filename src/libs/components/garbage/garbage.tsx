import styles from "./garbage.module.css";

const Garbage = () => {
	return (
		<div className={styles["garbage-container"]}>
			<div className={styles["garbage"]}/>
			<div className={styles["buttons-container"]}>
				<button className={styles["clear-button"]} title={"Clear all items from inventory"}>Clear Inventory</button>
				<button className={styles["reset-button"]} title={"Reset entire game progress"}>Reset Button</button>
			</div>
		</div>
	);
}

export { Garbage }