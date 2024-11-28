"use client";

import React, { useState } from "react";
import { Table, Select, Input } from "antd";
import { columns } from "@/utils/custom-table-columns";
import { Post } from "@/types";

const { Option } = Select;
const { Search } = Input;

interface ICustomTable {
    data: Post[] | undefined;
}

const CustomTable = ({ data }: ICustomTable) => {
    const [pageSize, setPageSize] = useState(5);
    const [searchText, setSearchText] = useState("");

    // Filter data based on search text
    const filteredData = data?.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.body.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <Search
                    placeholder="Search by title or body"
                    onChange={(e) => setSearchText(e.target.value)}
                    enterButton
                />
            </div>

            <Table
                columns={columns}
                dataSource={filteredData}
                rowKey="id" // Set unique key for each row
                pagination={{
                    pageSize,
                    showSizeChanger: false,
                }}
                footer={() => (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <div></div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span style={{ marginRight: 8 }}>Rows per page:</span>
                            <Select
                                defaultValue={pageSize}
                                style={{ width: 80 }}
                                onChange={(value) => setPageSize(value)}
                            >
                                <Option value={5}>5</Option>
                                <Option value={10}>10</Option>
                                <Option value={20}>20</Option>
                            </Select>
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

export default CustomTable;
