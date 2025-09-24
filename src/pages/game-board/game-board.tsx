import {
	Inventory,
	Crafting,
	DiscoveredRecipeButton,
	Discovery,
	Resources, Garbage,
} from "~/libs/components/components.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const GameBoard = () => {
	return (
		<DndProvider backend={HTML5Backend}>
			<DiscoveredRecipeButton />
			<div style={{ display: "flex" }}>
				<Discovery />
				<Crafting />
			</div>
			<div style={{ display: "flex" }}>
				<Resources />
				<Inventory />
				<Garbage />
			</div>
		</DndProvider>
	);
};

export { GameBoard };
