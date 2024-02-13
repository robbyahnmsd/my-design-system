/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/checkboxes/_checkboxes.scss
 */
import * as React from 'react';
import type { ComponentSizeVariant } from '@govuk-react/lib';
/**
 * Let users select one or more options by using the checkboxes component.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/checkbox
 * - https://design-system.service.gov.uk/components/checkboxes/
 */
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hint?: React.ReactNode;
    /**
     * Text content for checkbox
     */
    children: React.ReactNode;
    /**
     * CSS Classname for outermost container
     */
    className?: string;
    /**
     * Size of checkbox
     */
    sizeVariant?: `${ComponentSizeVariant.MEDIUM}` | `${ComponentSizeVariant.SMALL}`;
}
export default Checkbox;