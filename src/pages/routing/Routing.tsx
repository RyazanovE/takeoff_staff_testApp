import { useAppSelector } from "hooks/redux/reduxHooks";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { isLoggedinSelector } from "store/slices/auth/authSlice";
import { CONTACTS_ROUTE, LOGIN_ROUTE } from "./routes";

//TODO:добавить loader
const LoginPage = lazy(() => import("../login/LoginPage"));
const ContactsPage = lazy(() => import("../contacts/ContactsPage"));

export const Routing = () => {

	const isLoggedIn = useAppSelector(isLoggedinSelector)


	return (!isLoggedIn)
		? < Routes >
			<Route path={LOGIN_ROUTE} element={<LoginPage />} />
			<Route path="*" element={<LoginPage />} />
		</ Routes >
		:
		<Routes>
			<Route path={CONTACTS_ROUTE} element={<ContactsPage />} />
			<Route path="*" element={<ContactsPage />} />
		</Routes>
};