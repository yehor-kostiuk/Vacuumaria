import React from "react";
import { DiscoveryPanel } from "./discovery-panel/discovery-panel.jsx";
import styles from "./discovery.module.css";

const Discovery: React.FC = () => {
	return (
		<div className={styles["discovery"]}>
			<DiscoveryPanel />
		</div>
	);
};

export { Discovery };
