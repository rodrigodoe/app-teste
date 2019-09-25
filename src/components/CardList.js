import React, { useContext } from "react";
import { Context as ListContext } from "../context/listContext";
import Card from "./Card";

export default ({ id }) => {
  const { state } = useContext(ListContext);
  const lista = state.lists.find(b => b.id === id);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>TASKS</h2>
      {lista.tarefas ? lista.tarefas.map(t => <Card key={t} data={t} />) : null}
    </div>
  );
};
