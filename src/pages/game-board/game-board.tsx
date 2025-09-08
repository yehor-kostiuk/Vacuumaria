import {
	Discovery,
	Resources,
	Inventory,
	DiscoveredRecipeButton,
} from "~/libs/components/components.jsx";

const GameBoard = () => {
	return (
		<div>
			<Discovery />
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
