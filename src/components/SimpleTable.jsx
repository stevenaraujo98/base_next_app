import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import Button from "./Button";

const SimpleTable = ({ data, columns }) => {
	const [sorting, setSorting] = useState([]);
	const [filtering, setFiltering] = useState("");

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		state: {
			sorting,
			globalFilter: filtering,
		},
		onSortingChange: setSorting,
		getFilteredRowModel: getFilteredRowModel(),
		onGlobalFilterChange: setFiltering,
	});

	return (
		<div>
			<div className="mb-2">
				<input
					type="text"
					value={filtering}
					onChange={e => setFiltering(e.target.value)}
					placeholder="Buscar"
				/>
			</div>
			<table>
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<th key={header.id} onClick={header.column.getToggleSortingHandler()}>
									{header.isPlaceholder ? null : (
										<div>
											{flexRender(header.column.columnDef.header, header.getContext())}
											{{ asc: "⬆️", desc: "⬇️", none: "" }[header.column.getIsSorted() ?? null]}
										</div>
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map(row => (
						<tr key={row.id}>
							{row.getVisibleCells().map(cell => (
								<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
							))}
						</tr>
					))}
				</tbody>
				<tfoot>
					{table.getFooterGroups().map(footerGroup => (
						<tr key={footerGroup.id}>
							{footerGroup.headers.map(footer => (
								<td key={footer.id}>
									{footer.isPlaceholder
										? null
										: flexRender(footer.column.columnDef.footer, footer.getContext())}
								</td>
							))}
						</tr>
					))}
				</tfoot>
			</table>
			<div className="flex justify-center gap-3 mt-2">
				<Button onClick={() => table.setPageIndex(0)}>Primera página</Button>
				<Button onClick={() => table.previousPage()}>Anterior</Button>
				<Button onClick={() => table.nextPage()}>Siguiente</Button>
				<Button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>Ultima página</Button>
			</div>
		</div>
	);
};

export default SimpleTable;
