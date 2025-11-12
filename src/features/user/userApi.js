import { apiSlice } from "../api/apiSlice";
import { setUser } from "./userSlice";

const userApi = apiSlice.injectEndpoints({
  name: "user",
  reducerPath: "user",
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // endpoint to get user
    getMe: builder.query({
      query: () => "/users/me",
      providesTags: ["User"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      },
    }),
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "PUT",
        body: user,
      }),
      // advance rtk query options, without calling the actual api or providing the tags
      // async onQueryStarted(arg, { queryFulfilled, dispatch }) {
      //   // optimistic update starts here
      //   const patchResult = dispatch(apiSlice.util.updateQueryData('getMe', undefined, (draft) => {
      //     draft.push(arg);
      //   })).unwrap();
      //   // optimistic update ends here
      //   try {
      //     const { data } = await queryFulfilled;
      //     console.log(data);
      //     // silently update the user
      //     const res = await dispatch(apiSlice.endpoints.getMe.initiate()).unwrap();
      //     console.log(res);
      //     // pissmistic update the user
      //     dispatch(apiSlice.util.updateQueryData('getMe', undefined, (draft) => {
      //       draft.push(res);
      //     }));
      //     // pissmistic update the user
      //   } catch (error) {
      //     console.error("Error updating user:", error);
      //     patchResult.undo();
      //   }
      // },
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetMeQuery, useGetUsersQuery, useGetUserQuery, useUpdateUserMutation, useDeleteUserMutation } = userApi;
export default userApi;