import React from "react";
import styles from "./discovered-recipe-modal.module.css";

type DiscoveredRecipeModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
};

const DiscoveredRecipeModal: React.FC<DiscoveredRecipeModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export { DiscoveredRecipeModal };
