import { useState } from "react";

export default function DataGrid() {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    return (
        <>
            <div>
                <h2>Datagrid</h2>
                <label>
                    <input type="checkbox" />
                    {selectedRows.length > 0 ? ` ${selectedRows.length} Selected` : "None Selected"}
                </label>
                <button disabled={selectedRows.length === 0}>
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

                    </tbody>
                </table>
            </div>
        </>
    );
}
