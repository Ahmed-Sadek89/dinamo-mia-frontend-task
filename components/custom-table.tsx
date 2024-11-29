"use client";
import { Table } from "antd";
import { Post } from "@/types";
import TableControl from "./table-control";
import useCustomTableAction from "@/hook/use-custom-table-action";
import CreateBtn from "./create-btn";

interface ICustomTable {
    data: Post[] | undefined;
}

const CustomTable = ({ data }: ICustomTable) => {
    
    const {
        pageSize,
        handlePageSize,
        handleSearchText,
        filteredData,
        updatedColumns
    } = useCustomTableAction(data);

    return (
        <div style={{ display: 'flex', flexDirection: "column", gap: "20px", marginTop: "40px" }}>
            <div style={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                <CreateBtn />
                <TableControl pageSize={pageSize} handlePageSize={handlePageSize} handleSearchText={handleSearchText} />
            </div>
            <Table
                columns={updatedColumns}
                dataSource={filteredData}
                rowKey="id"
                pagination={{
                    pageSize,
                    showSizeChanger: false,
                }}
                scroll={{ x: "max-content" }}
                bordered
                size="middle"
            />
        </div>
    );
};

export default CustomTable;
