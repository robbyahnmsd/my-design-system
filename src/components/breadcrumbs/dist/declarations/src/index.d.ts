/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/breadcrumbs/_breadcrumbs.scss
 */
import * as React from 'react';
import Link from "./atoms/link/index.js";
/**
 * The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/breadcrumbs
 * - https://design-system.service.gov.uk/components/breadcrumbs/
 */
export declare const Breadcrumbs: BreadcrumbsType;
export interface BreadcrumbsType extends React.FC<BreadcrumbsProps> {
    Link?: typeof Link;
}
interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Breadcrumbs contents
     */
    children: React.ReactNode;
}
export default Breadcrumbs;