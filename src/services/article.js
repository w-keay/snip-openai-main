import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Retrieve the RapidAPI key from the environment variables
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// Create an API with RTK Query
export const articleApi = createApi({
    reducerPath: 'articleApi', // Specify the slice name in the Redux store
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            // Set RapidAPI headers for authentication
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        // Define an endpoint for getting article summaries
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

// Export the query hook for the getSummary endpoint
export const { useLazyGetSummaryQuery } = articleApi
