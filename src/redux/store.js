import { configureStore } from "@reduxjs/toolkit";

import categorySlice from "./categories/categoriesSlice"


const store = configureStore({
    reducer: {
      categories: categorySlice,

    },
});

export default store;
