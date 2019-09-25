import { useState, useEffect } from "react";
import { db } from "../App";


export default id => {

  const [task, setTask] = useState(null);

  const fetchTask = async (id) => {
    const data = await db
    .collection("tarefa")
    .doc(id)
    .get()
    .then(doc => doc.data());
    setTask(data)
  }

  useEffect(() => {
    fetchTask(id);
  }, [id]);

  return [task];
};
