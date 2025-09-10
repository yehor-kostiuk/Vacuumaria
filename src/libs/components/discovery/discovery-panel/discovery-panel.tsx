import styles from "./discovery-panel.module.css";
import { DiscoveryPanelCard } from "./discovery-panel-card/discovery-panel-card.jsx";
import { useGameStore } from "~/libs/modules/store.module.js";
import { type AdvancedItem } from "~/libs/types/types.ts";

const DiscoveryPanel = () => {
	const items = useGameStore((state) => state.availableForCrafting);

	const uniqueItems: AdvancedItem[] = Array.from(
		new Map(items.map((item) => [item.item.id, item])).values(),
	);

	return (
		<div className={styles["discovery-panel"]}>
			{uniqueItems.map((item) => (
				<DiscoveryPanelCard key={item.item.id} item={item} />
			))}
		</div>
	);
};

export { DiscoveryPanel };
