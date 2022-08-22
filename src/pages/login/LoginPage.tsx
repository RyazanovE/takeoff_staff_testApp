import React, { useState } from 'react';
import { useLoginMutation } from 'api/auth/authApi';
import { useInput } from 'hooks/input/useInput';
import { VioletButton } from 'shared/ui/buttons/violet-button/VioletButton';
import { LoginInput } from 'shared/ui/inputs/login-input/LoginInput';
import { useNavigate } from 'react-router';

export type ILoginPageProps = {

}

const LoginPage: React.FC<ILoginPageProps> = ({ }) => {
	const navigate = useNavigate()

	const [login, { isLoading }] = useLoginMutation()

	const { setValue: setEmail, ...emailInput } = useInput()
	const { setValue: setPass, ...passwordInput } = useInput()
	const [isValid, setisValid] = useState(true);

	const loginClickHandler = () => {

		console.log({ email: emailInput.value, password: passwordInput.value })
		login({ email: emailInput.value, password: passwordInput.value })
			.unwrap()
			.then(() => navigate("/main"))
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
				<VioletButton isLoading={isLoading} onClick={loginClickHandler}>Login</VioletButton>
			</form>
		</section>
	);
}

export default LoginPage;