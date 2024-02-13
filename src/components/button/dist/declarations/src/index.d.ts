/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/button/_button.scss
 */
import type { StyledComponentProps } from 'styled-components';
import type { WithWhiteSpaceProps } from '@govuk-react/lib';
import * as React from 'react';
interface ButtonOwnProps extends WithWhiteSpaceProps {
    /**
     * Button text
     */
    children: React.ReactNode;
    /**
     * Button icon
     */
    icon?: React.ReactNode;
    /**
     * Renders a large button if set to true
     */
    start?: boolean;
    /**
     * Override for default button colour
     */
    buttonColour?: string;
    /**
     * Override for default button hover colour,
     * which defaults to `buttonColour` darkened by 5%
     */
    buttonHoverColour?: string;
    /**
     * Override for default button shadow colour,
     * which defaults to `buttonColour` darkened by 15%
     */
    buttonShadowColour?: string;
    /**
     * Override for default button text colour,
     * which defaults to govuk white
     */
    buttonTextColour?: string;
}
/**
 * Use the button component to help users carry out an action like starting an application or saving their information.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/button
 * - https://design-system.service.gov.uk/components/button/
 */
export declare const Button: ButtonType;
type ButtonRefType = React.Ref<HTMLButtonElement>;

export interface ButtonType extends React.ForwardRefExoticComponent<ButtonOwnProps> {
    (props: ButtonPropsWithoutAs, ref?: ButtonRefType): React.ReactElement<ButtonPropsWithoutAs>;
    <AsC extends string | React.ComponentType<any> = 'button', FAsC extends string | React.ComponentType<any> = AsC>(props: ButtonPropsWithAs<AsC, FAsC>, ref?: React.Ref<AsC>): React.ReactElement<ButtonPropsWithAs<AsC, FAsC>>;
}
type ButtonPropsWithoutAs = StyledComponentProps<'button', never, ButtonOwnProps, never> & {
    as?: never | undefined;
    forwardedAs?: never | undefined;
};

type ButtonPropsWithAs<AsC extends string | React.ComponentType<any>, FAsC extends string | React.ComponentType<any> = AsC> = StyledComponentProps<AsC, never, ButtonOwnProps, never, FAsC> & {
    as?: AsC | undefined;
    forwardedAs?: FAsC | undefined;
};

export default Button;
