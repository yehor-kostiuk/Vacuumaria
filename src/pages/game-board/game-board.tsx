import {
	Discovery,
	Resources,
	Inventory,
	DiscoveredRecipeButton,
	Crafting,
} from "~/libs/components/components.jsx";

const GameBoard = () => {
	return (
		<div>
			<DiscoveredRecipeButton />
			<div style={{ display: "flex" }}>
				<Discovery />
				<Crafting />
			</div>
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
