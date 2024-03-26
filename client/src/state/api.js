import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/" }),
    tagTypes: ["Boards"],
    endpoints: (build) =>({
        getBoards: build.query({
            query: () => "/api/boards",
            providesTags: ["Boards"]
        })
    })
})

export const { useGetBoardsQuery } =
  api;