import { FC, useState } from 'react';
import Star from './Star';

type Props = {
  color?: string;
  rectangle?: string[];
  initialRating?: number;
  raitngLimit?: number;
  className?: '';
  messages?: string[];
  onSetRating?: (rating: number) => void;
};

const StarsRating: FC<Props> = ({
  color = 'yellow',
  rectangle = ['48px', '48px'],
  initialRating = 0,
  raitngLimit = 10,
  messages = [],
  onSetRating = null,
}) => {
  const [raiting, setRaiting] = useState<number>(() => initialRating || 0);
  const [fakeRating, setFakeRating] = useState<number>(() => 0);

  const handleSetRating = (updatedRating: number) => {
    setRaiting(updatedRating);
    if (onSetRating) {
      onSetRating(updatedRating);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ display: 'flex' }}>
        {Array.from({ length: raitngLimit }, (_, i: number) => (
          <Star
            key={i}
            color={color}
            isFilled={fakeRating > 0 ? fakeRating >= i + 1 : raiting >= i + 1}
            rectangle={rectangle}
            onClick={() => handleSetRating(i + 1)}
            onMouseEnter={() => setFakeRating(i + 1)}
            onMouseLeave={() => setFakeRating(0)}
          />
        ))}
      </div>
      <p style={{ lineHeight: '1', margin: '0', color }}>
        {messages.length === raitngLimit
          ? messages[fakeRating ? fakeRating - 1 : raiting - 1]
          : fakeRating || raiting || ''}
      </p>
    </div>
  );
};

export default StarsRating;
