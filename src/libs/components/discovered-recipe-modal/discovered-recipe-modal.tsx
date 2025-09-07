import React from "react";
import styles from "./discovered-recipe-modal.module.css";
import { DiscoveredRecipeCard } from "./discovered-recipe-card/discovered-recipe-card.jsx";

type DiscoveredRecipeModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
};

const DiscoveredRecipeModal: React.FC<DiscoveredRecipeModalProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className={styles["modal-overlay"]} onClick={onClose}>
			<div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
				<div className={styles["modal-header"]}>
					<h2 className={styles["modal-title"]}>{"🔍 Discovered Recipes (3)"}</h2>
					<button className={styles["close-button"]} onClick={onClose}> × </button>
				</div>
				<div className={styles["modal-body"]}>
					<div className={styles["recipes-list"]}>
						<DiscoveredRecipeCard
							title="Pilesos George"
							description="Final craft for Pilesos George"
							image="/public/vacuum-cleaner.png"
						/>
						<DiscoveredRecipeCard
							title="Pilesos George"
							description="Final craft for Pilesos George"
							image="/public/vacuum-cleaner.png"
						/>
						<DiscoveredRecipeCard
							title="Pilesos George"
							description="Final craft for Pilesos George"
							image="/public/vacuum-cleaner.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export { DiscoveredRecipeModal };
