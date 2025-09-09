import {
	Discovery,
	Resources,
	Inventory,
	Crafting,
} from "~/libs/components/components.jsx";

const GameBoard = () => {
	return (
		<div>
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
