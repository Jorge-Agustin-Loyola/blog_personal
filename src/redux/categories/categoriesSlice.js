import { createSlice } from "@reduxjs/toolkit";
import { readCategories } from "./categoriesAction";

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        data: [],
        loading: false,
        error: null,

    },

    extraReducers: (builder) => {
        builder
            .addCase(readCategories.pending, (state)=>{
                state.loading=true
            })
            .addCase(readCategories.fulfilled, (state,action)=>{
                state.loading = false
                state.data = action.payload

            })
            .addCase(readCategories.rejected, (state,action)=>{
                state.loading = true
                state.error = action.payload.message
            });
    }
})

export default categorySlice.reducer