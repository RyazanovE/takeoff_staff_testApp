import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

interface IInitialState {
	isEditModalShown: boolean;
	isCreateModalShown: boolean;
	editContactId: number | null
	searchContactsQuery: string,

}


const INITIAL_STATE: IInitialState = {
	isEditModalShown: false,
	isCreateModalShown: false,
	editContactId: null,
	searchContactsQuery: "",
};

const contactsSlice = createSlice({
	name: "contactsSlice",
	initialState: INITIAL_STATE,
	reducers: {
		setIsEditModalShown(state, action: PayloadAction<boolean>) {
			state.isEditModalShown = action.payload
		},
		setisCreateModalShown(state, action: PayloadAction<boolean>) {
			state.isCreateModalShown = action.payload
		},
		setEditContactId(state, action: PayloadAction<number>) {
			state.editContactId = action.payload
		},
		setSearchContactsQuery(state, action: PayloadAction<string>) {
			state.searchContactsQuery = action.payload
		},
	},
});

//selectors
export const isEditModalShownSelector = (state: RootState) => state.contactsSlice.isEditModalShown;
export const isisCreateModalShownSelector = (state: RootState) => state.contactsSlice.isCreateModalShown;
export const editContactIdSelector = (state: RootState) => state.contactsSlice.editContactId;
export const searchContactsQuerySelector = (state: RootState) => state.contactsSlice.searchContactsQuery;

//actions
export const { setIsEditModalShown, setEditContactId, setSearchContactsQuery, setisCreateModalShown } = contactsSlice.actions;


export default contactsSlice.reducer;
