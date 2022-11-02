import { v4 as uuid } from "uuid";
import { SET_ALERT, REMOVE_SET_ALERT } from "./types";

export const setAlert = (msg, alertType, timeout) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_SET_ALERT,
        payload: id,
      }),
    timeout
  );
};
