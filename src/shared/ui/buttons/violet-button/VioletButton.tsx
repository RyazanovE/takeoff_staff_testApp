import React, { PropsWithChildren } from 'react';
import cl from 'classnames';

export type IVioletButtonProps = {
	className?: string
}

const VioletButton: React.FC<PropsWithChildren<IVioletButtonProps>> = ({ className, children, ...props }) => {
	return (
		<button className={cl(className, "bg-violet text-white rounded-[30px]")}>
			{children}
		</button>
	);
}

export { VioletButton };