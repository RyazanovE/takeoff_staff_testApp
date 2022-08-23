import { useGetContactsQuery } from 'api/contacts/contactsApi';
import { useAppSelector } from 'hooks/redux/reduxHooks';
import React from 'react';
import { searchContactsQuerySelector } from 'store/slices/contacts/contactsSlice';
import { ContactsTableHead } from './head/ContactsTableHead';
import { ContactsTableRow } from './row/ContactsTableRow';
import { ContactsTableHoc } from './table-hoc/ContactsTableHoc';

export type IContactsTableProps = {

}

const ContactsTable: React.FC<IContactsTableProps> = ({ }) => {

	const searchQuery = useAppSelector(searchContactsQuerySelector)
	const { contacts, length, isLoading, isSuccess } = useGetContactsQuery(undefined, {
		selectFromResult: ({ data, ...args }) => ({
			...args, contacts:
				data?.filter(el => el.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) || el.phone.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
				) ?? [], length: data?.length ?? 0
		})
	})



	return (
		<ContactsTableHoc>
			<ContactsTableHead />
			<tbody>
				{length !== 0 ?
					(!isLoading
						?
						contacts.map(contact => < ContactsTableRow key={contact.id} contact={contact} />)
						:
						"Loading")
					:
					< ContactsTableRow noItems />}
			</tbody>
		</ContactsTableHoc>)

}

export { ContactsTable };


//TODO:добавить loader