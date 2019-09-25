import React from "react";

export default ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
      {children}
    </div>
  );
};
