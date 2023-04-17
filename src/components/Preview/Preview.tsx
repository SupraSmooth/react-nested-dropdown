import { ReactElement } from 'react';
import { NestedDropdown, NestedDropdownButton } from '@/index';
import MenuStructure from './Data/MenuStructure';

import styles from './Preview.module.scss';

const Preview = (): ReactElement => {
	return (
		<div className={styles.container}>
			<div className={styles.component}>
				<NestedDropdown menu={MenuStructure}>
					<NestedDropdownButton>Some Dropdown</NestedDropdownButton>
				</NestedDropdown>

				<NestedDropdown menu={MenuStructure}>
					<NestedDropdownButton>Some Dropdown</NestedDropdownButton>
				</NestedDropdown>
			</div>

			<div className={styles.component}>
				<NestedDropdownButton href="/">Link</NestedDropdownButton>

				<NestedDropdownButton
					onClick={() => console.log('Button clicked!')}
				>
					Button
				</NestedDropdownButton>

				<NestedDropdownButton
					onClick={() => console.log('Button clicked!')}
					className={styles.additionalButtonStyles}
				>
					Additional Styles
				</NestedDropdownButton>

				<NestedDropdownButton>No Actions</NestedDropdownButton>

				<NestedDropdownButton
					onClick={() => console.log('Button clicked!')}
					isDisabled
				>
					Disabled
				</NestedDropdownButton>
			</div>
		</div>
	);
};

export default Preview;
