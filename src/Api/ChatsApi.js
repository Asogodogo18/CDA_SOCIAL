import { APP_API } from "./ApiManager";
import { api } from "./rtkApi";

APP_API.createEntity({ name: "chats" });

export default APP_API.endpoints.chats;

export const chatApi = api.injectEndpoints({
  endpoints: (build) => ({
    createChat: build.mutation({
      invalidatesTags: ["Chats"],
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: "/chats/add",
      }),
    }),
    getChatsByUser: build.query({
      providesTags: ["Chats"],
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: `/chats/user`,
      }),
    }),
    // getChatById: build.mutation({
    //   query: (payload) => ({
    //     body: payload,
    //     method: "POST",
    //     url: "/chats/info",
    //   }),
    // }),
    getChatById: build.query({
      providesTags: (id) => ["ChatsId"],
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: "/chats/info",
      }),
    }),
    deleteChat: build.mutation({
      invalidatesTags: ["Chats", "ChatsId"],

      query: (payload) => ({
        body: payload,
        method: "POST",
        url: "/chats/delete",
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useCreateChatMutation,
  useDeleteChatMutation,
  useGetChatsByUserQuery,
  useGetChatByIdQuery,
} = chatApi;
