import { useEffect } from "react";
import styles from "./discovered-recipe-modal.module.css";
import { DiscoveredRecipeCard } from "./discovered-recipe-card/discovered-recipe-card.jsx";
import { useGameStore } from "~/libs/modules/store.module.js";

type Properties = {
	isOpen: boolean;
	onClose: () => void;
};

const DiscoveredRecipeModal = ({ isOpen, onClose }: Properties) => {
	const discoveredItemsSet = useGameStore((state) => state.unlockedItems);
	const discoveredItems = Array.from(discoveredItemsSet);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return isOpen ? (
		<div className={styles["modal-overlay"]} onClick={handleOverlayClick}>
			<div className={styles["modal-content"]}>
				<div className={styles["modal-header"]}>
					<h2 className={styles["modal-title"]}>
						🔍 Discovered Recipes ({discoveredItems.length})
					</h2>
					<button className={styles["close-button"]} onClick={onClose}>
						×
					</button>
				</div>
				<div className={styles["modal-body"]}>
					<div className={styles["recipes-list"]}>
						{discoveredItems.length === 0 ? (
							<div className={styles["empty-placeholder"]}>
								📋 No recipes discovered yet! Start crafting to discover new
								recipes.
							</div>
						) : (
							discoveredItems.map((item, index) => (
								<DiscoveredRecipeCard
									key={index}
									title={item}
									description={`Description for ${item}`}
									image={`/images/${item}.png`}
								/>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	) : null;
};

export { DiscoveredRecipeModal };
