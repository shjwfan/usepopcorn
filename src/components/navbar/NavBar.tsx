import { FC, PropsWithChildren } from 'react';

const NavBar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className='nav-bar' data-testid='nav-bar'>
      {children}
    </nav>
  );
};

export default NavBar;
