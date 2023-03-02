import { MenuItem } from '../types';

type MenuTypeLabelProps = {
	menuItem: MenuItem;
};

const MenuTypeLabel = ({ menuItem }: MenuTypeLabelProps): JSX.Element => {
	const { className, label } = menuItem;

	return <span className={className}>{label}</span>;
};

export default MenuTypeLabel;
