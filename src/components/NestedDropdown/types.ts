import { Key } from 'react';

export enum MenuItemType {
	Link = 'LINK',
	Separator = 'SEPARATOR',
	Label = 'LABEL',
}

export type MenuItem = {
	key: Key;
	type?: MenuItemType;
	prefixedComponent?: JSX.Element | string;
	label?: JSX.Element | string;
	suffixedComponent?: JSX.Element | string;
	className?: string;
	tooltip?: string;
	href?: string;
	isDisabled?: boolean;
	hasSeparator?: boolean;
	onClick?: () => void;
	children?: MenuItem[];
};

export type NestedDropdownStructure = MenuItem[];
