"use client";
import { Table, Space } from "antd";
import { Post } from "@/types";
import TableControl from "./table-control";
import useCustomTableAction from "@/hook/use-custom-table-action";
import CreateBtn from "./create-btn";
import UpdateBtn from "./update-btn";
import DeleteBtn from "./delete-btn";

interface ICustomTable {
    data: Post[] | undefined;
}

const CustomTable = ({ data }: ICustomTable) => {
    const {
        pageSize,
        handlePageSize,
        filteredData,
        updatedColumns,
        handleAddNewPost,
        handleUpdateRow,
        handleDeleteRow
    } = useCustomTableAction(data);

    const actionColumn = {
        title: "Actions",
        key: "actions",
        width: 100,
        render: (_: undefined, record: Post) => (
            <Space size="middle">
                <UpdateBtn data={record} onUpdate={handleUpdateRow} />
                <DeleteBtn id={record.id} onDetele={handleDeleteRow}/>
            </Space>
        ),
    }

    const columnsWithActions = [...updatedColumns, actionColumn];


    return (
        <div style={{ display: 'flex', flexDirection: "column", gap: "20px", marginTop: "40px" }}>
            <div style={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                <CreateBtn posts={filteredData} onNewPost={handleAddNewPost} />
                <TableControl
                    pageSize={pageSize}
                    handlePageSize={handlePageSize}
                    count={filteredData?.length}
                />
            </div>
            <Table
                columns={columnsWithActions}
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
