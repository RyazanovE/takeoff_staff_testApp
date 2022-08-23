import React, { useState } from 'react';
import { useLoginMutation } from 'api/auth/authApi';
import { useInput } from 'hooks/input/useInput';
import { VioletButton } from 'shared/ui/buttons/violet-button/VioletButton';
import { LoginInput } from 'shared/ui/inputs/login-input/LoginInput';
import { useNavigate } from 'react-router';
import { useActions } from 'hooks/actions/useActions';
import { CONTACTS_ROUTE } from 'pages/routing/routes';

export type ILoginPageProps = {

}

const LoginPage: React.FC<ILoginPageProps> = ({ }) => {
	const navigate = useNavigate()

	const [login, { isLoading }] = useLoginMutation()

	const { setValue: setEmail, ...emailInput } = useInput()
	const { setValue: setPass, ...passwordInput } = useInput()
	const [isValid, setisValid] = useState(true);

	const { setIsLoggedIn } = useActions()

	const loginClickHandler = () => {

		login({ email: emailInput.value, password: passwordInput.value })
			.unwrap()
			.then(() => {
				setIsLoggedIn(true)
				navigate(CONTACTS_ROUTE)
			})
			.catch(e => {
				setisValid(false)
				setTimeout(() => setisValid(true), 1000)
			})
	}

	return (
		<section className='min-h-screen w-full bg-main flex justify-center items-center'>
			<form className='h-[70vh] bg-form p-6 flex flex-col gap-6 rounded-[30px]' onSubmit={e => e.preventDefault()}>
				<img src="/circle.JPG" alt="circle" className='mx-auto my-6' />
				<LoginInput isValid={isValid} {...emailInput} type='email' />
				<LoginInput isValid={isValid} {...passwordInput} type='password' />
				<VioletButton isLoading={isLoading} onClick={loginClickHandler}>Войти</VioletButton>
			</form>
		</section>
	);
}

export default LoginPage;