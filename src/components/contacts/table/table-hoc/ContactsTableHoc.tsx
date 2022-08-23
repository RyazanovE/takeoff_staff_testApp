import { useActions } from 'hooks/actions/useActions';
import React, { PropsWithChildren } from 'react';
import { PlusSvg } from 'shared/ui/svg/plus/PlusSvg';

export type IContactsTableHocProps = {

}

const ContactsTableHoc: React.FC<PropsWithChildren<IContactsTableHocProps>> = ({ children }) => {

	const { setisCreateModalShown } = useActions()

	const createClickHandler = () => setisCreateModalShown(true)



	return (
		<table className=" w-[80%]   border-separate border-spacing-x-0 border-spacing-y-3" >
			<caption className='bg-violet p-3 text-white text-base font-semibold rounded-[10px] relative'>
				Контакты
				<button onClick={createClickHandler} className=' flex gap-3 items-center absolute right-6 top-[50%] -translate-y-[50%] opacity-80 hover:opacity-100 transition-opacity duration-150'>
					Добавить контакт
					<PlusSvg className='' fill='white' height={20} width={20} />
				</button>
			</caption>
			{children}
		</table>
	);
}

export { ContactsTableHoc };