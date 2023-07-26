import { FC, PropsWithChildren } from 'react';

const List: FC<PropsWithChildren> = ({ children }) => {
  return <ul className='list'>{children}</ul>;
};

export default List;
