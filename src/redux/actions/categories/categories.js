import axios from 'axios'
import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,

} from './type';


export const get_categories = ()=> async dispatch =>{
    const config = {
        headers:{
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/list`,config)
        console.log(res)

        if(res.status === 200){
            dispatch(
                {
                    type: GET_CATEGORIES_SUCCESS,
                    payload: res.data.Categories || [] // <-- envías solo el array
                }
            )
        }else{
            dispatch(
                {
                    type: GET_CATEGORIES_FAIL
                }
            )
        }

    } catch (err) {
        dispatch(
            {
                type: GET_CATEGORIES_FAIL
            }
        )
    }
}