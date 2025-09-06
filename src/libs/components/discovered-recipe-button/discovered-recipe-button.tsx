import React, { useState, useEffect } from "react";
import styles from "./discovered-recipe-button.module.css";
import { DiscoveredRecipeModal } from "../discovered-recipe-modal/discovered-recipe-modal.tsx";

type Properties = {
	children?: React.ReactNode;
};

const DiscoveredRecipeButton: React.FC<Properties> = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [buttonText, setButtonText] = useState("Открыть модалку");

	const toggleModal = () => setIsOpen(prev => !prev);

	useEffect(() => {
		if (isOpen) {
			setButtonText("Close");
		} else {
			setButtonText("Open");
		}
	}, [isOpen]);

	return (
		<>
			<button className={styles.button} onClick={toggleModal}>
				{buttonText}
			</button>
			<DiscoveredRecipeModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
		</>
	);
};

export { DiscoveredRecipeButton };
