import React, { useEffect, useState } from "react";
import { db } from "../App";

export default props => {
  const [task, setTask] = useState({});

  const fetchTask = async () => {
    const t = await db
      .collection("tarefa")
      .doc(props.data)
      .get()
      .then(doc => doc.data());
    setTask(t);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return <div style={{ color: "red", fontWeight: "bold" }}>{task.nome}</div>;
};
