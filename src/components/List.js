import React from "react";
import CardList from "./CardList";

export default ({ data }) => {
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
        {data.nome}
        <CardList id={data.id} />
      </div>
    </div>
  );
};
