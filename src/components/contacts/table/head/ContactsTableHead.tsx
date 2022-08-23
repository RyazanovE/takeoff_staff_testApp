import React from 'react';

export type IContactsTableHeadProps = {

}

const ContactsTableHead: React.FC<IContactsTableHeadProps> = ({ }) => {
	return (
		<thead>
			<tr className='text-left'>
				<th className='w-[40%]'>Имя</th>
				<th className='w-[40%]'>Телефон</th>
				<th className='w-[10%]'></th>
				<th className='w-[10%]'></th>
			</tr>
		</thead>
	);
}

export { ContactsTableHead };