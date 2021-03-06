import createDataContext from "./createDataContext";
import { db } from "../App";

const listReducer = (state, action) => {
  switch (action.type) {
    case "fetch_lists":
      return action.payload
    default:
      return state;
  }
};

const fetchLists = dispatch => async () => {
  const arr = [];
  await db
    .collection("list")
    .get()
    .then(snap => {
      snap.forEach(doc => {
        arr.push({ [doc.id]: { id: doc.id, ...doc.data() } });
      });
    });

  dispatch({ type: "fetch_lists", payload: arr });
};

export const { Provider, Context } = createDataContext(
  listReducer,
  { fetchLists },
  []
);
