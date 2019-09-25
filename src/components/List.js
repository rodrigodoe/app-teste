import React from "react";

export default ({ nome, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        border: "solid 1px gray",
        flexDirection: "column"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {nome}
        {children}
      </div>
    </div>
  );
};
