import { apiSlice } from "../api/apiSlice";

const USER_URL = import.meta.env.VITE_USER_URL;

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/register`,
                method: "POST",
                body: data,
            })
        }),

        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: "POST",
                body: data,
            })
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${USER_URL}/logout`,
                method: "POST",
            })
        }),

        getUserProfile: builder.query({
            query: () => ({
                url: `${USER_URL}/profile`,
            })
        }),

        updateUserProfile: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/profile`,
                method: "PUT",
                body: data,
            })
        }),

    })
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useGetUserProfileQuery,
    useUpdateUserProfileMutation,
} = userApiSlice;