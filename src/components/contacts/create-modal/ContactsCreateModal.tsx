import { useCreateContactMutation } from 'api/contacts/contactsApi';
import { useActions } from 'hooks/actions/useActions';
import { useInput } from 'hooks/input/useInput';
import { useAppSelector } from 'hooks/redux/reduxHooks';
import React, { useCallback } from 'react';
import { VioletButton } from 'shared/ui/buttons/violet-button/VioletButton';
import ModalHoc from 'shared/ui/modal/ModalHoc';
import { isisCreateModalShownSelector } from 'store/slices/contacts/contactsSlice';

export type IContactsCreateModalProps = {

}

const ContactsCreateModal: React.FC<IContactsCreateModalProps> = ({ }) => {

	const isCreateModalShown = useAppSelector(isisCreateModalShownSelector);

	const { setisCreateModalShown } = useActions()
	const [create] = useCreateContactMutation()

	const { setValue: setName, ...name } = useInput()
	const { setValue: setPhone, ...phone } = useInput()


	const onCreateModalClose = useCallback(() => setisCreateModalShown(false), []);
	const afterLeaveHandler = useCallback(() => {
		setName("")
		setPhone("")
	}, []);

	const createClickHandler = () => {
		if (!name.value || !phone.value) return

		const newContact = { name: name.value, phone: phone.value }
		create(newContact)
			.unwrap()
			.then(() => setisCreateModalShown(false))
			.catch(e => console.log(e?.message))
	}




	return (
		<ModalHoc title="Добавление контакта" onClose={onCreateModalClose} isOpen={isCreateModalShown} afterLeave={afterLeaveHandler}>
			<form onSubmit={e => e.preventDefault()} className="w-full flex flex-col items-center gap-3">
				<div className='flex items-center gap-3 w-full'><label className='w-[65px]'>Имя</label><input required {...name} type="text" className='flex-1 p-2 border-violet border rounded-[5px]' /></div>
				<div className='flex items-center gap-3 w-full'><label className='w-[65px]'>Телефон</label><input required {...phone} type="text" className='flex-1 p-2 border-violet border rounded-[5px]' /></div>
				<VioletButton onClick={createClickHandler} isLoading={false}>Сохранить</VioletButton>
			</form>
		</ModalHoc>
	);
}

export { ContactsCreateModal };