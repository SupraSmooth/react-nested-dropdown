import { PropsWithChildren, ReactElement } from 'react';
import { NestedDropdownStructure } from '@/components/NestedDropdown/types';
import NestedDropdownMenu from '@/components/NestedDropdown/NestedDropdownMenu';

import styles from './NestedDropdown.module.scss';

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
		<div className={['nd-group', styles.wrapper, className].join(' ')}>
			{children}

			<NestedDropdownMenu menu={menu} />
		</div>
	);
};

export default NestedDropdown;
