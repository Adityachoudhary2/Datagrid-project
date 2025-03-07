import StatusIndicator from "./StatusIndicator"


const TableRow =({row})=> {
    return (
        <tr>
            <td>
                <input type="checkbox"
                  
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
