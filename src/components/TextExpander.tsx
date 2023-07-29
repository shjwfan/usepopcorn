import { FC, PropsWithChildren, useMemo, useState } from 'react';

type Props = PropsWithChildren & {
  expandedButtonText?: string;
  collapsedButtonText?: string;
  collapsedThreshold?: number;
  collapsed?: boolean;
  buttonColor?: string;
  className?: string;
};

const TextExpander: FC<Props> = ({
  expandedButtonText = 'Show more',
  collapsedButtonText = 'Show less',
  collapsedThreshold = 5,
  collapsed = false,
  buttonColor = 'blue',
  className = '',
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => collapsed);

  const text = useMemo((): string => {
    const words = (children as string).split(' ');
    if (words.length <= collapsedThreshold || !isCollapsed) {
      return words.join(' ');
    } else {
      return words.slice(0, collapsedThreshold).join(' ') + '...';
    }
  }, [children, collapsedThreshold, isCollapsed]);

  return (
    <div className={className} data-testid='text-expander'>
      <span>{text}</span>
      <button
        onClick={() => setIsCollapsed(isCollapsed => !isCollapsed)}
        style={{
          color: buttonColor,
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          font: 'inherit',
          marginLeft: '5px',
        }}
      >
        {isCollapsed ? expandedButtonText : collapsedButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
