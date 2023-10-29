import { FC } from 'react';

type Props = {
  errorMessage: string;
};

const ErrorMessage: FC<Props> = ({ errorMessage }) => {
  return (
    <div data-testid='error-message'>
      <p className='error'>{`⛔️ ${errorMessage}`}</p>
    </div>
  );
};

export default ErrorMessage;
