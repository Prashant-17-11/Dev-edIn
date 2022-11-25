import axios from "axios";
import { post } from "request";
import { setAlert } from "./alert";

import { GET_PROFILE, PROFILE_ERROR } from "./types";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Create or Update profile
export const createProfile =
  (formData, history, edit = false) =>
  async (dispatch) => {
    console.log(formData, history, edit);
    try {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post("api/profile", formData, config);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(setAlert(edit ? "Profile Updated" : "Profile Created"));

      if (!edit) {
        history.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) =>
          dispatch(setAlert(error.msg, "danger", 5000))
        );
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  };
