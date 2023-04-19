import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from 'components/layout/Layout.module.css';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: rgb(72, 72, 202);

  &:hover {
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
    font-weight: bold;
  }
`;

const Layout = () => {
  return (
    <>
      <header>
        <ul className={css.navList}>
          <li>
            <StyledNavLink
              className={css.navLink}
              // activeClassName={css.navLinkActive}
              to="/"
            >
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              className={css.navLink}
              // activeClassName={css.navLinkActive}
              to="/movies"
            >
              Movies
            </StyledNavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
