import React, { memo, useEffect, useRef } from 'react';
import cn from "classnames"
import { MailSvg } from '../../svg/mail/MailSvg';

export type ILoginInputProps = {
	className?: string
	type: "email" | "password"
	isValid: boolean
}

const LoginInput: React.FC<ILoginInputProps> = memo(({ className, isValid, type, ...props }) => {
	const isEmail = type === "email"
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => { isEmail && inputRef.current?.focus() }, []);



	const wrapperClass = cn("flex text-login-text gap-3  flex-col bg-white shadow-loginInput p-4  rounded-[20px] border-[2px] border-transparent transition-colors duration-150", { "!border-red/80": !isValid })

	const inputClass = cn(className, "placeholder:text-black min-w-[300px] outline-none ")

	return (
		<div className={wrapperClass}>
			<label className="">{isEmail ? "Email Address" : "Password"}</label>
			<div className='flex items-center gap-3'>
				{isEmail ? <MailSvg fill='login-text' height={16} width={16} /> : <MailSvg fill='black' height={16} width={16} />}
				<input ref={inputRef} {...props} className={inputClass} placeholder={(isEmail) ? "Username@gmail.com" : "*********"} />
			</div>
		</div>
	);
})

export { LoginInput };