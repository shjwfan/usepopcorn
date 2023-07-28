import { FC, MouseEventHandler } from 'react';
import FilledStarSvg from './svg/FilledStarSvg';
import StarSvg from './svg/StarSvg';

type Props = {
  color: string;
  isFilled: boolean;
  rectangle: string[];
  onClick: MouseEventHandler<HTMLSpanElement>;
  onMouseEnter: MouseEventHandler<HTMLSpanElement>;
  onMouseLeave: MouseEventHandler<HTMLSpanElement>;
};

const Star: FC<Props> = ({
  color,
  isFilled,
  rectangle,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <span
      style={{
        color: color,
        width: rectangle[0],
        height: rectangle[1],
        display: 'block',
        cursor: 'pointer',
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isFilled ? <FilledStarSvg color={color} /> : <StarSvg color={color} />}
    </span>
  );
};

export default Star;
