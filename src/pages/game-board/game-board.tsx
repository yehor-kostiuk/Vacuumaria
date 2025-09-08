import { Discovery, Resources, DiscoveredRecipeButton } from "~/libs/components/components.jsx";
import {
	Discovery,
	Resources,
	Inventory,
} from "~/libs/components/components.jsx";

const GameBoard = () => {
	return (
		<div>
			<Discovery />
			<Resources />
			<DiscoveredRecipeButton />
			<div style={{ display: "flex" }}>
				{" "}
				{/* TODO: fix styles */}
				<Resources />
				<Inventory />
			</div>
		</div>
	);
};

export { GameBoard };
