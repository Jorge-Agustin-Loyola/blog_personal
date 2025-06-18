import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const ENDPOINT_category_list = `${process.env.REACT_APP_API_URL}/api/category/list`;

// read categories
export const readCategories = createAsyncThunk("readCateories", async (data)=>{
    
    const config = {    // tells the backend the response should be in json format
        headers:{
            'Accept': 'application/json'   
        }
    };

    try {
        const response = await axios.get(ENDPOINT_category_list, data, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return isRejectedWithValue(error.response);
    }
});