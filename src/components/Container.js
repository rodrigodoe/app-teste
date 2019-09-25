import React, { useContext, useEffect } from "react";
import { Context as ListContext } from "../context/listContext";
import List from "./List";

export default () => {
  const { state, fetchLists } = useContext(ListContext);

  useEffect(() => {
    fetchLists();
  }, []);

  const renderLists = () => {
    return state.lists.map(l => <List key={l.id} data={l} />);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
      {renderLists()}
    </div>
  );
};
