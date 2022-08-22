import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("./login/LoginPage"));

export const Routing = () => {
	
	
	
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="*" element={<LoginPage />} />
		</Routes>
	);
};