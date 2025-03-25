import { JSX } from 'react';
import { MenuItem } from '../types';

type MenuTypeSeparatorProps = {
	menuItem: MenuItem;
};

const MenuTypeSeparator = ({
	menuItem,
}: MenuTypeSeparatorProps): JSX.Element => {
	const { className } = menuItem;

	return <hr className={className} />;
};

export default MenuTypeSeparator;
