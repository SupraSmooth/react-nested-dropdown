import './styles.css';

import { PropsWithChildren, ReactElement } from 'react';
import NestedDropdownMenu from './NestedDropdownMenu';
import { NestedDropdownStructure } from './types';

type NestedDropdownProps = {
	menu?: NestedDropdownStructure;
	className?: string;
};

const NestedDropdown = ({
	menu,
	className,
	children,
}: PropsWithChildren<NestedDropdownProps>): ReactElement => {
	return (
		<div className={['group inline-block', className].join(' ')}>
			{children}

			<NestedDropdownMenu menu={menu} />
		</div>
	);
};

export default NestedDropdown;
