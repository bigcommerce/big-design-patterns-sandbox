import React, { ComponentPropsWithoutRef, forwardRef, memo, Ref } from 'react';

import { MarginProps, ProgressCircle } from '@bigcommerce/big-design';

import { ContentWrapper, LoadingSpinnerWrapper, StyledButton } from './ButtonStyled';

interface PrivateProps {
  forwardedRef: Ref<HTMLButtonElement>;
}

export interface ButtonProps extends ComponentPropsWithoutRef<'button'>, MarginProps {
  actionType?: 'normal' | 'destructive';
  children?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconOnly?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  mobileWidth?: 'auto' | '100%';
  variant?: 'primary' | 'secondary' | 'subtle' | 'utility';
}

const LoadingSpinner = () => (
  <LoadingSpinnerWrapper alignItems="center">
    <ProgressCircle size="xxSmall" />
  </LoadingSpinnerWrapper>
);

const RawButton: React.FC<ButtonProps & PrivateProps> = memo(
  ({ forwardedRef, isLoading, disabled, ...props }) => {
    return (
      <StyledButton
        className="bd-button"
        {...props}
        disabled={isLoading || disabled}
        ref={forwardedRef}
      >
        {isLoading ? <LoadingSpinner /> : null}
        <ContentWrapper isLoading={isLoading}>
          {!props.iconOnly && props.iconLeft}
          {props.iconOnly}
          {!props.iconOnly && props.children}
          {!props.iconOnly && props.iconRight}
        </ContentWrapper>
      </StyledButton>
    );
  },
);

export const StyleableButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <RawButton {...props} forwardedRef={ref} />
));

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, style, ...props }, ref) => <RawButton {...props} forwardedRef={ref} />,
);

const defaultProps = {
  actionType: 'normal' as const,
  isLoading: false,
  mobileWidth: '100%' as const,
  variant: 'primary' as const,
};

Button.displayName = 'Button';
Button.defaultProps = { ...defaultProps };

StyleableButton.displayName = 'StyleableButton';
StyleableButton.defaultProps = { ...defaultProps };
