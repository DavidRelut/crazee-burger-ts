import styled from "styled-components";
import { theme } from "../../theme";
import type { FunctionComponent, ReactNode } from "react";

interface TextInputProps {
  value: string;
  onChange: React.ChangeEventHandler;
  Icon: ReactNode;

  placeholder?: string;
  required: boolean;
}

export const TextInput: FunctionComponent<TextInputProps> = ({
  value,
  onChange,
  Icon,
  placeholder,
  required,
}) => {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        required={required}
      />
    </TextInputStyled>
  );
};

const TextInputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  input {
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.dark};
    width: 100%;
  }

  input:focus-visible {
    outline: 2px solid ${theme.colors.primary};
  }

  &::placeholder {
    background: ${theme.colors.background_white};
    color: ${theme.colors.primary};
  }
`;
