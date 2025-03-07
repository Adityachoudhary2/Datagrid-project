import React from "react";
import { DataRow } from "../Data/sampleData"
import StatusIndicator from "./StatusIndicator"

interface TableRowProps {
    row: DataRow;
    selectedRows: string[];
    handleRowSelection: (name: string) => void; 

}
const TableRow: React.FC<TableRowProps> =({row, selectedRows ,handleRowSelection})=> {
    return (
        <tr>
            <td>
                <input type="checkbox"
                  checked={selectedRows.includes(row.name)}
                  onChange={() => handleRowSelection(row.name)}
                  disabled={row.status === "scheduled"}
                />
            </td>
            <td>{row.name}</td>
            <td>{row.device}</td>
            <td>{row.path}</td>
            <td><StatusIndicator status={row.status} /> {row.status}</td>
        </tr>   
    )
}


export default TableRow
