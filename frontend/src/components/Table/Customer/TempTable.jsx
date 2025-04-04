/* eslint-disable no-unused-vars */
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
    useReactTable,
    createColumnHelper,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table";

function TempTable() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api.tvmaze.com/search/shows?q=snow",
                );
                const results = response.data;
                setData(results);
            } catch (error) {
                console.log("ERROR".error);
            }
        };
        fetchData();
    }, []);
    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("show.name", {
            header: "Name",
            cell: (info) => <span className="font-bold">{info.getValue()}</span>,
        }),
        columnHelper.accessor("show.language", {
            header: "Language",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("show.runtime", {
            header: "Duration (in minutes)",
            cell: (info) => info.getValue() || "N/A",
        }),
        columnHelper.accessor("show.status", {
            header: "Status",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("show.rating.average", {
            header: "Rating",
            cell: (info) => info.getValue() || "Not rated",
        }),
        columnHelper.accessor("show.network.name", {
            header: "Network",
            cell: (info) => info.getValue() || "Unkown",
        }),
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    console.log(data);

    return (
        <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow">
            {/* Table container with shadow, border and rounded corners */}
            <table className="w-full divide-y divide-gray-200">
                <thead className="bg-[#C9C9C9]">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase"
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
                                    className="px-6 py-4 text-sm whitespace-nowrap text-gray-900"
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

            {/* Empty state UI */}
            {/* {data.length === 0 && !loading && !error && (
                <div className="flex h-24 w-full items-center justify-center bg-white">
                    <p className="text-center text-gray-500">
                        No results found
                    </p>
                </div>
            )} */}
        </div>
    );
}

export default TempTable;
