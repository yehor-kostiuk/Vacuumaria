import React from "react";
import styles from "./discovery.module.css";
import { DiscoveryPanel } from "./discovery-panel/discovery-panel.jsx";

const Discovery: React.FC = () => {
	return (
		<div className={styles["discovery"]}>
			<DiscoveryPanel />
		</div>
	);
};

export { Discovery };
