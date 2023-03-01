import { PropsWithChildren, ReactElement } from 'react';
import { NestedDropdownButtonProps } from './NestedDropdownButton';
import './styles.css';
import NestedDropdownMenu, {
	NestedDropdownMenuProps,
} from './NestedDropdownMenu';

type NestedDropdownProps = {
	classNameWrapper?: string;
} & NestedDropdownMenuProps &
	NestedDropdownButtonProps;

const NestedDropdown = ({
	classNameWrapper,
	menu,
	children,
}: PropsWithChildren<NestedDropdownProps>): ReactElement => {
	return (
		<div className={['group inline-block', classNameWrapper].join(' ')}>
			{children}

			<NestedDropdownMenu menu={menu} />
		</div>
	);
};

export default NestedDropdown;
