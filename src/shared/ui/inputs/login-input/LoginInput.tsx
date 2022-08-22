import React, { useEffect, useRef } from 'react';
import cn from "classnames"
import { MailSvg } from '../../svg/mail/MailSvg';

export type ILoginInputProps = {
	className?: string
	type: "email" | "password"
}

const LoginInput: React.FC<ILoginInputProps> = ({ className, type, ...props }) => {
	const isEmail = type === "email"
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => { isEmail && inputRef.current?.focus() }, []);

	return (
		<div className="flex text-login-text gap-3  flex-col bg-white shadow-loginInput p-4  rounded-[20px]">
			<label className="">{isEmail ? "Email Address" : "Password"}</label>
			<div className='flex items-center gap-3'>
				{isEmail ? <MailSvg fill='login-text' height={16} width={16} /> : <MailSvg fill='black' height={16} width={16} />}
				<input ref={inputRef} {...props} className={cn(className, "placeholder:text-black min-w-[300px] outline-none")} placeholder={(isEmail) ? "Username@gmail.com" : "*********"} />
			</div>
		</div>
	);
}

export { LoginInput };