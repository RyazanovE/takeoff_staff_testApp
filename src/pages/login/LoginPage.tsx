import React from 'react';
import { VioletButton } from 'shared/ui/buttons/violet-button/VioletButton';
import { LoginInput } from 'shared/ui/inputs/login-input/LoginInput';

export type ILoginPageProps = {

}

const LoginPage: React.FC<ILoginPageProps> = ({ }) => {


	return (
		<section className='min-h-screen w-full bg-main flex justify-center items-center'>
			<form className='h-[70vh] bg-form p-6 flex flex-col gap-6 rounded-[30px]' onSubmit={e => e.preventDefault()}>
				<img src="/circle.JPG" alt="circle" className='mx-auto my-6' />
				<LoginInput type='email' />
				<LoginInput type='password' />
				<VioletButton>Login</VioletButton>
			</form>
		</section>
	);
}

export default LoginPage;