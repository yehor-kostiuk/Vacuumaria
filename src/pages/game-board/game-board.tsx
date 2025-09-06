import { Discovery, Resources, DiscoveredRecipeButton } from "~/libs/components/components.jsx";

const GameBoard = () => {
	return (
		<div>
			<Discovery />
			<Resources />
			<DiscoveredRecipeButton />
		</div>
	);
};

export { GameBoard };
