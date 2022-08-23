import React from 'react';
import { ContactsEditModal } from 'components/contacts/edit-modal/ContactsEditModal';
import { ContactsTable } from 'components/contacts/table/ContactsTable';
import { ContactsSearch } from 'components/contacts/search/ContactsSearch';
import { HeaderHoc } from 'shared/ui/hoc/header/HeaderHoc';
import { ContactsCreateModal } from 'components/contacts/create-modal/ContactsCreateModal';


export type IContactsPageProps = {

}

const ContactsPage: React.FC<IContactsPageProps> = ({ }) => {

	return (
		<HeaderHoc>
			<section className="min-h-screen w-full bg-main flex justify-start pt-20  p-6 flex-col gap-5 items-center">
				<ContactsSearch />
				<ContactsTable />
				<ContactsEditModal />
				<ContactsCreateModal />
			</section>
		</HeaderHoc>
	);
}

export default ContactsPage



//TODO: Добавить модальное окно на редактирование/удаление/создание
