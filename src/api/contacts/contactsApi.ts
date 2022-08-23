import { mainApi } from "api/main/mainApi";
import { CONTACTS_URL } from "api/urls/urls";
import { IContact } from "types/IContact";

export const authApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getContacts: build.query<IContact[], void>({
      query: (data) => ({ url: CONTACTS_URL, method: "get", data }),
      providesTags: ["Contacts"],
    }),
    getContactById: build.query<IContact, number>({
      query: (id) => ({ url: CONTACTS_URL.concat("/", id.toString()), method: "get" }),
      providesTags: ["Contacts"],
    }),
    deleteContact: build.mutation<IContact, number>({
      query: (id) => ({ url: CONTACTS_URL.concat("/", id.toString()), method: "delete" }),
      invalidatesTags: ["Contacts"],
    }),
    createContact: build.mutation<IContact, Omit<IContact, "id">>({
      query: (data) => ({ url: CONTACTS_URL.concat("/"), method: "post", data }),
      invalidatesTags: ["Contacts"],
    }),
    editContact: build.mutation<IContact, IContact>({
      query: ({ id, ...put }) => ({
        url: CONTACTS_URL.concat("/", id.toString()),
        method: "put",
        data: put,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetContactsQuery,
  useDeleteContactMutation,
  useGetContactByIdQuery,
  useEditContactMutation,
} = authApi;

export const { getContacts, deleteContact } = authApi.endpoints;
