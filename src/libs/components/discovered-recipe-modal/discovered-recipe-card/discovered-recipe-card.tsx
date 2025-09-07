import styles from "./discovered-recipe-card.module.css";

type Properties = {
	title: string;
	description: string;
	image: string;
};

const DiscoveredRecipeCard: React.FC<Properties> = ({
	title,
	description,
	image,
}) => {
	return (
		<div className={styles["recipe-card"]}>
			<div className={styles["recipe-header"]}>
				<div className={styles["result-icon"]}>
					<img src={image} alt={title} className={styles["card-image"]} />
				</div>
				<div className={styles["recipe-info"]}>
					<h3 className={styles["recipe-name"]}>{title}</h3>
					<p className={styles["recipe-description"]}>{description}</p>
					<span className={styles["status-badge"]}>✅ Discovered</span>
				</div>
			</div>
			<div className={styles["crafting-grid"]}>
				<div className={styles["crafting-row"]}>
					<div className={styles["ingredient-slot"]}>
						<img
							src={image}
							alt={title}
							className={styles["ingredient-image"]}
						/>
					</div>
					<div className={styles["ingredient-slot"]}>
						<img
							src={image}
							alt={title}
							className={styles["ingredient-image"]}
						/>
					</div>
					<div className={styles["ingredient-slot"]}>
						<img
							src={image}
							alt={title}
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
					<img src={image} alt={title} className={styles["result-image"]} />
				</div>
			</div>
		</div>
	);
};

export { DiscoveredRecipeCard };
