import { Select } from "antd";

const { Option } = Select;

interface ITableControl {
    pageSize: number,
    handlePageSize: (page: number) => void,
    count: number | undefined
}

const TableControl = ({ pageSize, handlePageSize,count }: ITableControl) => {

    return (
        <div style={{ display: 'flex', gap: "15px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: 8 }}>Rows per page:</span>
                <Select
                    defaultValue={pageSize}
                    style={{ width: 80 }}
                    onChange={(value) => handlePageSize(value)}
                >
                    <Option value={5}>5</Option>
                    <Option value={10}>10</Option>
                    <Option value={20}>20</Option>
                </Select>
            </div>
            <h3 style={{margin: 0}}>Total: {count}</h3>
            
        </div>
    )
}

export default TableControl
