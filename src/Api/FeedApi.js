import { APP_API } from "./ApiManager";

APP_API.createEntity({ name: "feeds" });

export default APP_API.endpoints.feeds;

import { api } from "./rtkApi";

export const feedApi = api.injectEndpoints({
  endpoints: (build) => ({
    listFeed: build.query({
      providesTags: ["Feeds"],
      query: (formData) => ({
        body: formData,
        method: "POST",
        url: "/feeds",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useListFeedQuery } = feedApi;
