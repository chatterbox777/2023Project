import { classNames } from "shared/lib/classNames/classNames";
import {
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Portal } from "shared/ui/Portal/Portal";
import classes from "./Modal.module.scss";
import { useTheme } from "app/providers/ThemeProvider";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = () => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  };

  const onkeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeHandler();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onkeyDown);
    }

    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener("keydown", onkeyDown);
    };
  }, [isOpen, onkeyDown]);

  const mods: Record<string, boolean> = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  };
  const onContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(classes.Modal, mods, [className, theme])}>
        <div className={classes.overlay} onClick={closeHandler}>
          <div className={classes.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
