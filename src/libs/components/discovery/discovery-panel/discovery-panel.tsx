import React from "react";
import styles from "./discovery-panel.module.css";
import { DiscoveryPanelCard } from "./discovery-panel-card/discovery-panel-card.jsx";

const DiscoveryPanel: React.FC = () => {
	return (
		<div className={styles["discovery-panel"]}>
			<DiscoveryPanelCard
				title="test"
				image="/public/vacuum-cleaner.png"
			/>
			<DiscoveryPanelCard
				title="test"
				image="/public/vacuum-cleaner.png"
			/>
		</div>
	);
};

export { DiscoveryPanel };
