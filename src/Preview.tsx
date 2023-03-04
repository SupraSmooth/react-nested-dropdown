import { ReactElement } from 'react';
import NestedDropdown from '@/components/NestedDropdown/NestedDropdown';
import MenuStructure from '@/components/MenuStructure';
import NestedDropdownButton from '@/components/NestedDropdown/MenuTriggers/NestedDropdownButton';

import styles from './Preview.module.scss';

const Preview = (): ReactElement => {
	return (
		<>
			<div className={styles.preview}>
				<NestedDropdown menu={MenuStructure}>
					<NestedDropdownButton className={styles.dropdownButton}>
						Dropdown ⬇️
					</NestedDropdownButton>
				</NestedDropdown>
			</div>

			<hr />

			<div className={styles.buttonPreviewWrapper}>
				<div className={styles.firstButtonContainer}>
					<NestedDropdownButton
						className={styles.buttonContainer}
						href="/"
					>
						Some Link in the same style
					</NestedDropdownButton>
				</div>
				<div>
					<NestedDropdownButton
						className={styles.buttonContainer}
						onClick={() => console.log('Button Clicked!')}
					>
						Some Button in the same style
					</NestedDropdownButton>
				</div>
			</div>
		</>
	);
};

export default Preview;
