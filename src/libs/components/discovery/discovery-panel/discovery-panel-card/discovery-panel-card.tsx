import React from "react";
import styles from "./discovery-panel-card.module.css";

type DiscoveryPanelCardProps = {
	title: string;
	image: string;
}

const DiscoveryPanelCard: React.FC<DiscoveryPanelCardProps> = ({ title, image }) => {
	return (
		<div className={styles["card"]}>
			<div className={styles["card-image-container"]}>
				<img src={image} alt={title} className={styles["card-image"]} />
			</div>
			<div>
				<h3 className={styles["item-name"]}>{title}</h3>
				<h3 className={styles["item-status"]}>Ready to craft</h3>
			</div>
		</div>
	);
};

export { DiscoveryPanelCard };
