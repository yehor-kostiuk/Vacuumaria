import {
	Discovery,
	Resources,
	Inventory,
} from "~/libs/components/components.jsx";

const GameBoard = () => {
	return (
		<div>
			<Discovery />
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
