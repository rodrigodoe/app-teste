import React, { useContext, useEffect, useCallback } from "react";
import { Context as ListContext } from "../context/listContext";
import Container from "./Container";
import List from "./List";
import CardList from "./CardList";
import Card from "./Card";

export default () => {
  const { state, fetchLists } = useContext(ListContext);

  const tryFecthList = () => {
    fetchLists();
  };
  const callback = useCallback(tryFecthList, []);

  useEffect(() => {
    callback();
  }, [callback]);

  const fetchCards = id => {
    const lista = state.lists.find(b => b.id === id);
    return lista.tarefas
      ? lista.tarefas.map(t => <Card key={t} data={t} />)
      : null;
  };

  return (
    <Container>
      {state.lists.map(l => (
        <List key={l.id} data={l}>
          <CardList data={l.id}>{fetchCards(l.id)}</CardList>
        </List>
      ))}
    </Container>
  );
};
