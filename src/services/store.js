import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

// Configure the Redux store
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer, // Add the articleApi reducer under a specified path
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware) // Add the middleware for the articleApi
})
