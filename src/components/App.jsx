
import { Phonebook } from './pages/phonebook/phonebook';
import { Contacts } from './pages/contacts/contacts';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './sharedLayout/sharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Phonebook/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
      </Route>
    </Routes>
  );
};
