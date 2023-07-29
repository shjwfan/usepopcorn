import { FC } from 'react';

const Logo: FC = () => {
  return (
    <div className='logo' data-testid='logo'>
      <span role='img'>🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
};

export default Logo;
