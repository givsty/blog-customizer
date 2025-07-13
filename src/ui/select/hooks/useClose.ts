import { useEffect } from 'react';

type useClose = {
  isOpen: boolean;
  onClose?: () => void;
  rootRef: React.RefObject<HTMLDivElement>;
};

export const useClose = ({
  isOpen,
  rootRef,
  onClose,
}: useClose) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [onClose, isOpen]);
};
