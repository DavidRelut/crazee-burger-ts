import type { FunctionComponent, ReactNode } from "react";
import { theme } from "../../theme";
import styled from "styled-components";

interface PrimaryButtonProps {
  label: string;
  Icon: ReactNode;
}

export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
  label,
  Icon,
}) => {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
};

const PrimaryButtonStyled = styled.button`
  width: 100%;
  border: 1px solid {theme.colors.greyLight};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.bold};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
    cursor: pointer;
  }
    
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
