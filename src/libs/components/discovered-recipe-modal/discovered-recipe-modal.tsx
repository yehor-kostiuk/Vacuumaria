import React, { useEffect } from "react";
import styles from "./discovered-recipe-modal.module.css";
import { DiscoveredRecipeCard } from "./discovered-recipe-card/discovered-recipe-card.jsx";

type Properties = {
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
};

const DiscoveredRecipeModal: React.FC<Properties> = ({ isOpen, onClose }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

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
		<div
			className={styles["modal-overlay"]}
			onClick={handleOverlayClick}
		>
			<div className={styles["modal-content"]}>
				<div className={styles["modal-header"]}>
					<h2 className={styles["modal-title"]}>
						{"🔍 Discovered Recipes (3)"}
					</h2>
					<button className={styles["close-button"]} onClick={onClose}>
						{" "}
						×{" "}
					</button>
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
	) : null;
};

export { DiscoveredRecipeModal };
