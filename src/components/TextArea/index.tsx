import { useState } from "react";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = ({
  onFocus,
  onBlur,
  value,
  onChange,
  placeholder,
  ...rest
}: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    onFocus?.(e);
    setIsFocused(true);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    onBlur?.(e);
    setIsFocused(false);
  };
  return (
    <div>
      <div
        className={`relative border-[1px]  rounded-sm p-2 ${
          isFocused || value ? "border-primary" : "border-text-dark-800"
        }`}
      >
        <p
          className={`absolute z-1 top-2 transition-all ease-in-out  text-sm ${
            isFocused || value ? "top-2 text-[10px] text-primary" : ""
          }`}
        >
          {placeholder}
        </p>
        <textarea
          className="z-2 w-full h-[200px] focus-within:outline-none pt-5 text-sm resize-none"
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
