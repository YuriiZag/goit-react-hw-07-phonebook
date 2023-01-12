import { Filter } from '../../filter';
import {
  Header,
  DeleteButton,
  Container,
  ContactList,
  ContactName,
  ContactNumber,
} from './contacts.styled';
import { getContactsList, getFilterRequest } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from 'components/redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const {contactsList, isLoading, error} = useSelector(getContactsList);
  const filterRequest = useSelector(getFilterRequest);

  const contactsFilter = () => {
    const normalizedFilter = filterRequest.toLowerCase();
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  console.log(contactsList);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  const onDelete = e => {
    dispatch(deleteContacts(e.currentTarget.value));
    
  };

  const contacts = contactsFilter();
  console.log(isLoading);
  return (
    <Container>
      <Header>Contacts</Header>
      <Filter></Filter>
      {isLoading && (<p>Loading...</p>)}
      {error !== null &&(<p>{error}</p>)}
      {!isLoading && (
        <ContactList>
          {contacts.map(({ name, phonenumber, id }) => {
            return (
              <li key={id}>
                <ContactName>{name}</ContactName>:
                <ContactNumber>{phonenumber}</ContactNumber>
                <DeleteButton type="button" value={id} onClick={onDelete}>
                  delete
                </DeleteButton>
              </li>
            );
          })}
        </ContactList>
      )}
    </Container>
  );
};
