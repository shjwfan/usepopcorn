import { FC, PropsWithChildren, useState } from 'react';

const CloseableBox: FC<PropsWithChildren> = ({ children }) => {
  const [isClosed, setIsClosed] = useState<boolean>(() => false);

  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsClosed(isClosed => !isClosed)}
      >
        {isClosed ? '+' : '-'}
      </button>
      {!isClosed && children}
    </div>
  );
};

export default CloseableBox;
