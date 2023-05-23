import { classNames } from "shared/lib/classNames/classNames";

import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import classes from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (v: string) => void;
  type?: string;
  placeholder?: string;
  autofocus?: boolean;
}

const Input = ({
  className,
  value,
  onChange,
  type = "text",
  placeholder,
  autofocus,
  ...restProps
}: InputProps) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    onChange?.(newValue);
    setCaretPosition(newValue.length);
  };

  const handleFocusOn = () => {
    setIsFocused(true);
  };
  const handleFocusOff = () => {
    setIsFocused(false);
  };

  const handleSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(classes.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={classes.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={classes.caretWrapper}>
        <input
          ref={inputRef}
          onFocus={handleFocusOn}
          onBlur={handleFocusOff}
          className={classes.input}
          type={type}
          value={value}
          onChange={handleChange}
          onSelect={handleSelect}
          {...restProps}
        />
        {isFocused && (
          <span
            style={{ left: `${caretPosition * 9}px` }}
            className={classes.caret}
          />
        )}
      </div>
    </div>
  );
};

const memoizedInput = memo(Input);
export { memoizedInput as Input };
