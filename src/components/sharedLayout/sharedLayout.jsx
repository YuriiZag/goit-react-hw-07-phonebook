import { Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Navigation, NavItem } from './sharedLayout.style';

export const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <NavItem to="/">Phonebook</NavItem>
        <NavItem to="/contacts">Contacts</NavItem>
      </Navigation>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
