/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
    useReactTable,
    createColumnHelper,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
} from "@tanstack/react-table";

function OrderResults({ data }) {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 15,
    });

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("id", {
            header: "ID",
            cell: (info) => info.getValue(),
            meta: { width: "w-24" },
        }),
        columnHelper.accessor("customers", {
            header: "Customer",
            cell: (info) => info.getValue(),
            meta: { width: "w-24" },
        }),
        columnHelper.accessor("products", {
            header: "Product",
            cell: (info) => info.getValue(),
            meta: { width: "w-24" },
        }),
        columnHelper.accessor("order_total", {
            header: "Order Total",
            cell: (info) => info.getValue(),
            meta: { width: "w-24" },
        }),
        columnHelper.accessor("date_parchased", {
            header: "Date",
            cell: (info) => info.getValue(),
            meta: { width: "w-24" },
        }),
        columnHelper.accessor("order_status", {
            header: "Order Status",
            cell: (info) => info.getValue(),
            meta: { width: "w-24" },
        }),
    ];
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
        },
    });
    return (
        <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow">
            <table className="w-full table-fixed divide-y divide-gray-200">
                <thead className="bg-[#C9C9C9]">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className={`px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase ${
                                        header.column.columnDef.meta?.width ||
                                        ""
                                    }`}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {table.getRowModel().rows.map((row, i) => (
                        <tr key={row.id} className="bg-[#F0F1F1]">
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className={`overflow-hidden px-6 py-4 text-xs text-ellipsis whitespace-nowrap text-gray-900 ${
                                        cell.column.columnDef.meta?.width || ""
                                    }`}
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                
                <div className="flex justify-center gap-5 p-1">
                    <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className="rounded border px-1"
                    >
                        {"<"}
                    </button>
                    <span className="flex items-center gap-1">
                        <div>Page</div>
                        <strong>
                            {table.getState().pagination.pageIndex + 1}
                            {"  "} of {"  "}
                            {table.getPageCount().toLocaleString()}
                        </strong>
                    </span>
                    <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className="rounded border px-1"
                    >
                        {">"}
                    </button>
                    <span className="flex items-center gap-1">
                        Go to page:
                        <input
                            type="number"
                            min="1"
                            max={table.getPageCount()}
                            defaultValue={
                                table.getState().pagination.pageIndex + 1
                            }
                            onChange={(e) => {
                                const page = e.target.value
                                    ? Number(e.target.value) - 1
                                    : 0;
                                table.setPageIndex(page);
                            }}
                            className="w-16 rounded border text-center"
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default OrderResults;
