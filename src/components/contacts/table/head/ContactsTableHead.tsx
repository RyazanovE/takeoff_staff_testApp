import React from 'react';

export type IContactsTableHeadProps = {

}

const ContactsTableHead: React.FC<IContactsTableHeadProps> = ({ }) => {
	return (
		<thead>
			<tr className='text-left'>
				<th>Имя</th>
				<th>Телефон</th>
				<th></th>
				<th></th>
			</tr>
		</thead>
	);
}

export { ContactsTableHead };