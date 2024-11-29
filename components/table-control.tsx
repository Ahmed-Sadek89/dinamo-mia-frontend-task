import { Select, Input } from "antd";

const { Option } = Select;
const { Search } = Input;

interface ITableControl {
    pageSize: number,
    handlePageSize: (page: number) => void,
    handleSearchText: (text: string) => void
}

const TableControl = ({ pageSize, handlePageSize, handleSearchText }: ITableControl) => {

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
            <div>
                <Search
                    placeholder="Search by title or body"
                    onChange={(e) => handleSearchText(e.target.value)}
                    enterButton
                />
            </div>
        </div>
    )
}

export default TableControl
