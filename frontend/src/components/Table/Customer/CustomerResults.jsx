/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
    useReactTable,
    createColumnHelper,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
} from "@tanstack/react-table";

function CustomerResults({ data }) {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 15,
    });

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("cid", {
            header: "CID",
            cell: (info) => info.getValue(),
            // Set a fixed width for CID column
            meta: { width: "w-24" },
        }),
        columnHelper.accessor("username", {
            header: "Username",
            cell: (info) => (
                <span className="font-bold">{info.getValue()}</span>
            ),
            meta: { width: "w-32" },
        }),
        columnHelper.accessor(
            (row) => `${row.first_name || ""} ${row.last_name || ""}`,
            {
                header: "Name",
                cell: (info) => (
                    <span className="font-bold">{info.getValue()}</span>
                ),
                meta: { width: "w-40" },
            },
        ),
        columnHelper.accessor("company_name", {
            header: "Company",
            cell: (info) => info.getValue(),
            meta: { width: "w-40" },
        }),
        columnHelper.accessor("store", {
            header: "Store",
            cell: (info) => info.getValue(),
            meta: { width: "w-32" },
        }),
        columnHelper.accessor("country", {
            header: "Country",
            cell: (info) => info.getValue(),
            meta: { width: "w-24" },
        }),
        columnHelper.accessor("mailbox", {
            header: "Mailbox #",
            cell: (info) => info.getValue(),
            meta: { width: "w-20" },
        }),
        columnHelper.accessor("docs_status", {
            header: "Doc Status",
            cell: (info) => info.getValue(),
            meta: { width: "w-28" },
        }),
        columnHelper.accessor("active", {
            header: "Active",
            cell: (info) => (info.getValue() === 1 ? "Y" : "N"),
            meta: { width: "w-16" },
        }),
        columnHelper.accessor("hold", {
            header: "Hold",
            cell: (info) => (info.getValue() === 1 ? "Y" : "N"),
            meta: { width: "w-16" },
        }),
        columnHelper.accessor("autoship", {
            header: "Auto Ship",
            cell: (info) => info.getValue(),
            meta: { width: "w-20" },
        }),
        columnHelper.accessor("start_date", {
            header: "Start Date",
            cell: (info) => info.getValue(),
            meta: { width: "w-32" },
        }),
        columnHelper.accessor("expiry_date", {
            header: "Expiry Date",
            cell: (info) => info.getValue(),
            meta: { width: "w-32" },
        }),
        columnHelper.accessor("last_login", {
            header: "Last Login",
            cell: (info) => info.getValue(),
            meta: { width: "w-32" },
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

    if (!data || data.length === 0) {
        return <div className="p-4 text-center">No results found</div>;
    }

    return (
        <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow">
            {/* Table container with shadow, border and rounded corners */}
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
                        <tr
                            key={row.id}
                            className="bg-[#F0F1F1]" // Alternating row colors
                        >
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

export default CustomerResults;
