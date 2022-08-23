import { useDeleteContactMutation } from 'api/contacts/contactsApi';
import { useActions } from 'hooks/actions/useActions';
import React from 'react';
import { DeleteSvg } from 'shared/ui/svg/delete/DeleteSvg';
import { EditSvg } from 'shared/ui/svg/edit/EditSvg';
import { IContact } from 'types/IContact';

export type IContactsTableRowProps = {
	noItems?: boolean
	contact?: IContact
}

const ContactsTableRow: React.FC<IContactsTableRowProps> = ({ noItems, contact }) => {

	const { setIsEditModalShown, setEditContactId } = useActions()
	const [deleteContact] = useDeleteContactMutation()

	const deleteClickHandler = () => {
		if (!contact) return
		deleteContact(contact.id).unwrap().catch(e => console.log(e?.message))
	}
	const editClickHandler = () => {
		if (!contact) return
		setEditContactId(contact.id)
		setIsEditModalShown(true)
	}

	return !noItems ?
		<tr className='bg-violet/20 child:p-3 first:child:rounded-l-[10px] last:child:rounded-r-[10px] overflow-hidden'>
			<td>{contact?.name}</td>
			<td>{contact?.phone}</td>
			<td><EditSvg onClick={editClickHandler} fill='blue' className="ml-auto opacity-40 cursor-pointer hover:opacity-90 transition-opacity duration-150" height={20} width={20} /></td>
			<td><DeleteSvg onClick={deleteClickHandler} fill='red' className="ml-auto opacity-40 cursor-pointer hover:opacity-90 transition-opacity duration-150" height={20} width={20} /></td>
		</tr>
		:
		<tr>
			<td className='col-span-3 '>Нет контактов</td>
		</tr>

}

export { ContactsTableRow };