import { useActions } from 'hooks/actions/useActions';
import React, { PropsWithChildren } from 'react';

export type IHeaderHocProps = {

}

const HeaderHoc: React.FC<PropsWithChildren<IHeaderHocProps>> = ({ children }) => {

	const { setIsLoggedIn } = useActions()

	const logOutHandler = () => setIsLoggedIn(false)

	return (
		<>
			<header className=" h-10 bg-login-text  text-white sticky top-0 flex items-center justify-center">
				<div className="flex items-center justify-center w-full relative">
					<h1>Takeoff Staff testApp</h1> <button onClick={logOutHandler} className='opacity-80 hover:opacity-100 transition-opacity duration-150 bg-red/60 px-2 py-1 rounded-sm flex itemas-center justify-center absolute right-6'>Выйти</button>
				</div>
			</header>
			{children}
		</>

	);
}

export { HeaderHoc };