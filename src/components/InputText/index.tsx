import { useState } from "react";

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputText = ({
  onFocus,
  onBlur,
  value,
  onChange,
  placeholder,
  ...rest
}: InputTextProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(e);
    setIsFocused(true);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(e);
    setIsFocused(false);
  };
  return (
    <div className="flex w-full pt-4 ">
      <div
        className={`relative border-b-[1px] border-b-text-dark-800  w-full pb-1 px-2 ${
          isFocused || value ? "border-b-primary" : ""
        }`}
      >
        <p
          className={`absolute z-1 bottom-2 transition-all ease-in-out text-sm  ${
            isFocused || value ? "bottom-7 text-[10px] text-primary" : ""
          }`}
        >
          {placeholder}
        </p>
        <input
          type="text"
          className="z-2 w-full focus-within:outline-none bottom-0 text-sm "
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          value={value}
          placeholder=""
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
};
