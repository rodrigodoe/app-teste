import React, { useContext, useEffect, useCallback } from "react";
import { Context as ListContext } from "../context/listContext";
import { Card, CardList, Container, List } from "./";

export default () => {
  const { state, fetchLists } = useContext(ListContext);

  console.log();

  const tryFecthList = () => {
    fetchLists();
  };
  const callback = useCallback(tryFecthList, []);

  useEffect(() => {
    callback();
  }, [callback]);

  const fetchCards = tarefas => {
    return tarefas ? tarefas.map(t => <Card key={t} data={t} />) : null;
  };

  return (
    <Container>
      {state.lists.map(l => {
        const key = Object.keys(l);
        const lista = l[key];
        return (
          <List key={lista.id} nome={lista.nome}>
            <CardList >{fetchCards(lista.tarefas)}</CardList>
          </List>
        );
      })}
      )
    </Container>
  );
};
