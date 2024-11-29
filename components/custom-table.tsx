"use client";
import { Table, Space, Row, Col } from "antd";
import { Post } from "@/types";
import TableControl from "./table-control";
import useCustomTableAction from "@/hook/use-custom-table-action";
import CreateBtn from "./create-btn";
import UpdateBtn from "./update-btn";
import DeleteBtn from "./delete-btn";
import { updatedColumns } from "@/utils/updated-columns";

interface ICustomTable {
    data: Post[] | undefined;
}

const CustomTable = ({ data }: ICustomTable) => {
    const {
        pageSize,
        handlePageSize,
        filteredData,
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
                <DeleteBtn id={record.id} onDetele={handleDeleteRow} />
            </Space>
        ),
    }
    const columnsWithActions = [...updatedColumns, actionColumn];

    return (
        <div style={{ marginTop: 40 }}>
            <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
                <Col xs={24} md={18} style={{ display: "flex", alignItems: "center" }}>
                    <TableControl
                        pageSize={pageSize}
                        handlePageSize={handlePageSize}
                        count={filteredData?.length}
                    />
                </Col>
                <Col xs={24} md={6} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <CreateBtn posts={filteredData} onNewPost={handleAddNewPost} />
                </Col>
            </Row>

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
