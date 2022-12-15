import { APP_API } from "./ApiManager";
import { api } from "./rtkApi";

APP_API.createEntity({ name: "messages" });

export default APP_API.endpoints.messages;
export const chatApi = api.injectEndpoints({
  endpoints: (build) => ({
    sendChatMessage: build.mutation({
      invalidatesTags: ["ChatsId",'Chats'],
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: "/chats/message/add",
      }),
    }),
    getMessageById: build.mutation({
      providesTags: ["Messages"],
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: `/chats/message/info`,
      }),
    }),
    searchMessage: build.mutation({
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: "/chats/message/search",
      }),
    }),
    deleteMessage: build.mutation({
      invalidatesTags:['Messages', 'Chats','ChatsId'],
      query: (payload) => ({
        body: payload,
        method: "POST",
        url: "/chats/message/delete",
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useSendChatMessageMutation,
  useDeleteMessageMutation,
  useGetMessageByIdMutation,
  useSearchMessageMutation,
} = chatApi;
