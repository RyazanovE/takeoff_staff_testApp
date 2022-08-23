import { useActions } from 'hooks/actions/useActions';
import { useDebounce } from 'hooks/debounce/useDebounce';
import { useInput } from 'hooks/input/useInput';
import React, { useEffect } from 'react';

export type IContactsSearchProps = {

}

const ContactsSearch: React.FC<IContactsSearchProps> = ({ }) => {

	const { setSearchContactsQuery } = useActions()
	const { setValue, ...search } = useInput()
	const { debouncedValue } = useDebounce(search.value, 500)

	useEffect(() => {
		setSearchContactsQuery(debouncedValue)
	}, [debouncedValue]);



	return (
		<input {...search} type="text" className='w-[80%] p-3 border-violet border rounded-[10px] placeholder:text-login-text' placeholder='Поиск' />
	);
}

export { ContactsSearch };