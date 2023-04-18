import { CSSProperties, PropsWithChildren, ReactElement } from 'react';
import { NestedDropdownStructure } from '@/components/NestedDropdown/types';
import NestedDropdownMenu from '@/components/NestedDropdown/NestedDropdownMenu';
import mergeStrings from '@/components/Util/mergeStrings';

import styles from './NestedDropdown.module.scss';

type NestedDropdownProps = {
	menu?: NestedDropdownStructure;
	className?: string;
	additionalStyles?: CSSProperties;
};

const NestedDropdown = ({
	menu,
	className,
	additionalStyles,
	children,
}: PropsWithChildren<NestedDropdownProps>): ReactElement => {
	return (
		<div
			className={mergeStrings([
				styles.ndGroup,
				styles.wrapper,
				className,
			])}
			style={additionalStyles}
		>
			{children}

			<NestedDropdownMenu menu={menu} />
		</div>
	);
};

export default NestedDropdown;
