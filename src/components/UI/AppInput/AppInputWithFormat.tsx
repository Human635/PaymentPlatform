import React from "react";
import { Input, InputWrapper } from "./AppInput.style";
import { AppIcon } from "../AppIcon/AppIcon";
import { PatternFormat } from "react-number-format";

interface IAppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  borderColor?: string;
  iconName?: string;
  bgc?: string;
  isDisabled?: boolean;
  hasError?: boolean;
  $errorMessage?: string;
}

export const AppInputWithFormat = ({
  type,
  name,
  bgc,
  borderColor,
  iconName,
  hasError = false,
  $errorMessage = "Ошибка!",
  isDisabled = false,
  ...props
}: IAppInputProps) => {
  return (
    <InputWrapper className="inputWrapper" $hasError={hasError}>
      <Input
        $bgc={bgc}
        $borderColor={borderColor}
        type={type}
        name={name}
        disabled={isDisabled}
        {...props}
      />
      {/* <MaskedInput format="#### #### #### ####" $bgc={bgc} /> */}
      {hasError && <p className="errorMessage">{$errorMessage}</p>}
      {iconName && <AppIcon className="inputIcon" name={iconName} />}
    </InputWrapper>
  );
};
