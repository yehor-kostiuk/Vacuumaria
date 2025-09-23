import styles from "./discovery-panel.module.css";
import { DiscoveryPanelCard } from "./discovery-panel-card/discovery-panel-card.jsx";
import { useGameStore } from "~/libs/modules/store.module.js";

const DiscoveryPanel = () => {
	const items = useGameStore((state) => state.availableForCrafting);

	return (
		<div className={styles["discovery-panel"]}>
			{items.map((item) => (
				<DiscoveryPanelCard key={item.item.id} item={item} />
			))}
		</div>
	);
};

export { DiscoveryPanel };
