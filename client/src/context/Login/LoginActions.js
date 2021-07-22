import { LOGIN_START, LOGIN_FAILURE, LOGIN_SUCCESS } from "../types";
import { USER_SERVER } from "../../utils/misc";
import axios from "axios";

export const loginUser =  async (dispatch, dataToSubmit) => {
  
    try {
      dispatch({type: LOGIN_START})
      let res = await axios({
        method: 'post',
        url: `${USER_SERVER}/login`,
        data: dataToSubmit
      });
      dispatch({type: LOGIN_SUCCESS, payload: res.data})
      return res.data;
    } catch (error) {
      dispatch({type: LOGIN_FAILURE, payload: error})
      return error.response;
    }
}





