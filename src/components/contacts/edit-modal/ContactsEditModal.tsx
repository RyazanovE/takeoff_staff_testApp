import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useEditContactMutation, useGetContactByIdQuery } from 'api/contacts/contactsApi';
import { useActions } from 'hooks/actions/useActions';
import { useInput } from 'hooks/input/useInput';
import { useAppSelector } from 'hooks/redux/reduxHooks';
import React, { useCallback, useEffect } from 'react';
import { VioletButton } from 'shared/ui/buttons/violet-button/VioletButton';
import ModalHoc from 'shared/ui/modal/ModalHoc';
import { setIsEditModalShown } from 'store/actions';
import { editContactIdSelector, isEditModalShownSelector } from 'store/slices/contacts/contactsSlice';

export type IContactsEditModalProps = {

}

const ContactsEditModal: React.FC<IContactsEditModalProps> = ({ }) => {
	const isEditModalOpen = useAppSelector(isEditModalShownSelector)
	const editContactId = useAppSelector(editContactIdSelector)

	const { setValue: setName, ...name } = useInput()
	const { setValue: setPhone, ...phone } = useInput()

	const [editContact] = useEditContactMutation()
	const { data: contact, isSuccess, isLoading } = useGetContactByIdQuery(editContactId ?? skipToken, { refetchOnMountOrArgChange: true })

	useEffect(() => {
		if (contact) {
			setName(contact?.name)
			setPhone(contact?.phone)
		}
	}, [contact?.id])



	const { setIsEditModalShown } = useActions()


	const onEditModalClose = useCallback(() => {
		setIsEditModalShown(false)
	}, [isEditModalOpen]);

	const editClickHandler = () => {
		if (!name.value || !phone.value || !editContactId) return

		const editedContact = { name: name.value, phone: phone.value, id: editContactId }
		editContact(editedContact)
			.unwrap()
			.then(() => setIsEditModalShown(false))
			.catch(e => console.log(e?.message))
	}

	return (
		<ModalHoc title="Редактирвание контакта" onClose={onEditModalClose} isOpen={isEditModalOpen && !isLoading}>
			<form onSubmit={e => e.preventDefault()} className="w-full flex flex-col items-center gap-3">
				<div className='flex items-center gap-3 w-full'><label className='w-[65px]'>Имя</label><input {...name} type="text" className='flex-1 p-2 border-violet border rounded-[5px]' /></div>
				<div className='flex items-center gap-3 w-full'><label className='w-[65px]'>Телефон</label><input {...phone} type="text" className='flex-1 p-2 border-violet border rounded-[5px]' /></div>
				<VioletButton onClick={editClickHandler} isLoading={false}>Сохранить</VioletButton>
			</form>
		</ModalHoc>
	);
}

export { ContactsEditModal };