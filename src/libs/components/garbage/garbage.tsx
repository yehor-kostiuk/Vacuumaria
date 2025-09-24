import styles from "./garbage.module.css";
import { useGameStore, initialCraftingTable } from "~/libs/modules/store.module.js";
import { INITIAL_ITEMS, INITIAL_AVALIABLE_CRAFT_ITEMS } from "~/libs/constants/constants.js";

const Garbage = () => {

	const handleClearInventory = () => {
		if (window.confirm("Clear inventory?")) {
			useGameStore.setState({
				inventory: { items: [] }
			});
		}
	};

	const handleResetGame = () => {
		if (window.confirm("Reset game?")) {
			localStorage.removeItem("storage");

			// reset Zustand state
			useGameStore.setState({
				inventory: { items: [] },
				craftingTable: initialCraftingTable,
				baseItems: INITIAL_ITEMS,
				unlockedItems: [],
				availableForCrafting: INITIAL_AVALIABLE_CRAFT_ITEMS,
			});

			location.reload();
		}
	};

	return (
		<div className={styles["garbage-container"]}>
			<div className={styles["garbage"]}/>
			<div className={styles["buttons-container"]}>
				<button className={styles["clear-button"]} title={"Clear all items from inventory"} onClick={handleClearInventory}>Clear Inventory</button>
				<button className={styles["reset-button"]} title={"Reset entire game progress"} onClick={handleResetGame}>Reset Button</button>
			</div>
		</div>
	);
}

export { Garbage }