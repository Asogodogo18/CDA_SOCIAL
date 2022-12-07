import { APP_API } from "./ApiManager";
import { api } from "./rtkApi";

APP_API.createEntity({ name: "posts" });

export default APP_API.endpoints.posts;

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    addPost: build.mutation({
      invalidatesTags: ["Feeds"],
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: "/posts/create",
      }),
    }),
    postsByUser: build.mutation({
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: `/posts/user`,
      }),
    }),
    likeUnlikePost: build.mutation({
      invalidatesTags: ["Feeds"],
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: "/posts/like_unlike",
      }),
    }),
    bookmarksUnbookmarksPost: build.mutation({
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: "/posts/bookmarks_unbookmarks",
      }),
    }),
    postsById: build.query({
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: "/posts/info",
      }),
    }),
    deletePost: build.mutation({
      invalidatesTags: ["Feeds"],
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: "/posts/delete",
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddPostMutation,
  useBookmarksUnbookmarksPostMutation,
  useDeletePostMutation,
  usePostsByUserMutation,
  usePostsByIdQuery,
  useLikeUnlikePostMutation,
} = postApi;
