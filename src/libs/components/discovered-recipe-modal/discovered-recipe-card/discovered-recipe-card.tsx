import styles from "./discovered-recipe-card.module.css";
import { type AdvancedItem } from "~/libs/types/types.ts";

type Props = {
	item: AdvancedItem;
};

const DiscoveredRecipeCard = ({ item }: Props) => {
	return (
		<div className={styles["recipe-card"]}>
			<div className={styles["recipe-header"]}>
				<div className={styles["result-icon"]}>
					<img
						src={item.item.icon}
						alt={item.item.name}
						className={styles["card-image"]}
					/>
				</div>
				<div className={styles["recipe-info"]}>
					<h3 className={styles["recipe-name"]}>{item.item.name}</h3>
					<p className={styles["recipe-description"]}>
						{item.item.description}
					</p>
					<span className={styles["status-badge"]}>✅ Discovered</span>
				</div>
			</div>

			<div className={styles["crafting-grid"]}>
				<div className={styles["crafting-row"]}>
					<div className={styles["ingredient-slot"]}>
						<img
							src={item.item.icon}
							alt={item.item.name}
							className={styles["ingredient-image"]}
						/>
					</div>
					<div className={styles["ingredient-slot"]}>
						<img
							src={item.item.icon}
							alt={item.item.name}
							className={styles["ingredient-image"]}
						/>
					</div>
					<div className={styles["ingredient-slot"]}>
						<img
							src={item.item.icon}
							alt={item.item.name}
							className={styles["ingredient-image"]}
						/>
					</div>
				</div>

				<div className={styles["crafting-row"]}>
					<div className={styles["empty-slot"]}></div>
					<div className={styles["empty-slot"]}></div>
					<div className={styles["empty-slot"]}></div>
				</div>

				<div className={styles["crafting-row"]}>
					<div className={styles["empty-slot"]}></div>
					<div className={styles["empty-slot"]}></div>
					<div className={styles["empty-slot"]}></div>
				</div>

				<div className={styles["arrow"]}>→</div>

				<div className={styles["result-slot"]}>
					<img
						src={item.item.icon}
						alt={item.item.name}
						className={styles["result-image"]}
					/>
				</div>
			</div>
		</div>
	);
};

export { DiscoveredRecipeCard };
