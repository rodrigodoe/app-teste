import React from "react";
import useTask from "../hook/useTask";

export default ({ data }) => {
  const [task] = useTask(data);

  return (
    <div style={{ color: "red", fontWeight: "bold" }}>
      {task ? task.nome : null}
    </div>
  );
};
