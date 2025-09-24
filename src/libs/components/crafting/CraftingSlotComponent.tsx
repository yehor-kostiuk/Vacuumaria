import { useDrag, useDrop } from "react-dnd";
import { useGameStore } from "~/libs/modules/store.module.ts";
import { Cell } from "../cell/cell.tsx";
import { type Item, type CraftingSlot } from "~/libs/types/types.ts";

const ItemTypes = { ITEM: "item" };

type CraftingSlotProps = {
	slot: CraftingSlot;
	index: number;
};

export const CraftingSlotComponent = ({ slot, index }: CraftingSlotProps) => {
	const moveItem = useGameStore((s) => s.moveItem);

	const [, dragRef] = useDrag({
		type: ItemTypes.ITEM,
		item: { item: slot.item, index, context: "crafting" as const },
		canDrag: !!slot.item,
	});

	const [, dropRef] = useDrop({
		accept: ItemTypes.ITEM,
		drop: (dragged: { item?: Item | null; index: number; context: string }) => {
			moveItem(
				{ context: dragged.context as "inventory" | "crafting", index: dragged.index },
				{ context: "crafting", index }
			);
		},
	});

	// merge drag & drop in one ref
	const ref = (node: HTMLDivElement | null) => {
		dragRef(node);
		dropRef(node);
	};

	return (
		<div ref={ref}>
			<Cell item={slot.item} context="crafting" index={index} />
		</div>
	);
};
