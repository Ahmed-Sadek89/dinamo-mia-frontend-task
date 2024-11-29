"use client";

import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Spin size="large" tip="Loading..." />
    </div>
  );
};

export default Loading;
