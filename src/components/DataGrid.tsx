import { useState } from "react";
import { sampleData } from "../Data/sampleData";
import TableRow from "./TableRow";

export default function DataGrid() {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleRowSelection = (name: string) => {
        const updatedSelection = selectedRows.includes(name)
            ? selectedRows.filter(item => item !== name)
            : [...selectedRows, name];

        setSelectedRows(updatedSelection);
        setSelectAll(updatedSelection.length === sampleData.length);
    };

    const handleSelectAll = () => {
        if (selectAll) {
          setSelectedRows([]);
        } else {
          setSelectedRows(sampleData.filter(row => row.status === "available").map(row => row.name));
        }
        setSelectAll(!selectAll);
    }

    const handleDownload = () => {
        alert(`Downloading: ${JSON.stringify(selectedRows, null, 2)}`);
      };

    return (
        <>
            <div>
                <h2>Datagrid</h2>
                <label>
                    <input type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                    />
                    {selectedRows.length > 0 ? ` ${selectedRows.length} Selected` : "None Selected"}
                </label>
                <button onClick={handleDownload} disabled={selectedRows.length === 0}>
                    Download Selected
                </button>

                <table>
                    <thead>
                        <tr>
                            <th>✔</th>
                            <th>Name</th>
                            <th>Device</th>
                            <th>Path</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleData.map(row => (
                            <TableRow key={row.name} row={row} selectedRows={selectedRows} handleRowSelection={handleRowSelection} />

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
