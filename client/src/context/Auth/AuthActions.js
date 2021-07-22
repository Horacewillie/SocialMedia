import { AUTH_SUCCESS } from "../types";
import { USER_SERVER } from "../../utils/misc";
import axios from "axios";

export const authUser =  async (dispatch) => {
    try{
        let res = await axios({
            method: 'get',
            url: `${USER_SERVER}/auth`,
          });
          console.log(res, 'Hey')
        dispatch({type: AUTH_SUCCESS, payload: res.data})
    }catch(err){
        throw err
    }
}