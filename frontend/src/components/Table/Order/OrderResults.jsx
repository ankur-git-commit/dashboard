/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
    useReactTable,
    createColumnHelper,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
} from "@tanstack/react-table";

function OrderResults({
    data = [],
    pagination = { currentPage: 0, totalPages: 0, totalRecords: 0 },
    onPageChange,
    isLoading = false,
}) {
    const { currentPage, totalPages, totalRecords } = pagination;

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
    });

    if (isLoading) {
        return (
            <div className="p-4 text-center">
                <p className="text-lg font-medium">Loading orders...</p>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="p-4 text-center">
                <p className="text-lg font-medium">No results found</p>
                <p className="text-sm text-gray-500">Try adjusting your search criteria</p>
            </div>
        );
    }
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
            <div className="bg-gray-50 py-3">
                <div className="flex items-center justify-center gap-5 p-1">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 0 || isLoading}
                        className="rounded border px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Previous page"
                    >
                        {"<"}
                    </button>
                    <span className="flex items-center gap-1">
                        <div>Page</div>
                        <strong>
                            {currentPage + 1} of {totalPages || 1}
                        </strong>
                    </span>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage >= totalPages - 1 || isLoading || totalPages === 0}
                        className="rounded border px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next page"
                    >
                        {">"}
                    </button>
                    <span className="flex items-center gap-1">
                        Go to page:
                        <input
                            type="number"
                            min="1"
                            max={totalPages || 1}
                            defaultValue={currentPage + 1}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    const page = e.target.value
                                        ? Number(e.target.value) - 1
                                        : 0;
                                    if (page >= 0 && page < (totalPages || 1)) {
                                        onPageChange(page);
                                    }
                                }
                            }}
                            // onChange={(e) => {
                            //     const page = e.target.value
                            //         ? Number(e.target.value) - 1
                            //         : 0;
                            //     if (page >= 0 && page < (totalPages || 1)) {
                            //         onPageChange(page);
                            //     }
                            // }}
                            className="w-16 rounded border text-center"
                            aria-label="Go to page"
                        />
                    </span>
                    <span className="text-sm text-gray-500">
                        (Total: {totalRecords} records)
                    </span>
                </div>
            </div>
        </div>
    );
}

export default OrderResults;
