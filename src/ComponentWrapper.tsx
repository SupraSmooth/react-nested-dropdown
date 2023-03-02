import { ReactElement } from 'react';
import NestedDropdown from '@/components/NestedDropdown/NestedDropdown';
import MenuStructure from '@/components/MenuStructure';
import NestedDropdownButton from '@/components/NestedDropdown/MenuTriggers/NestedDropdownButton';

import styles from './ComponentWrapper.module.scss';
// import '@/components/NestedDropdown/styles.css';

const ComponentWrapper = (): ReactElement => {
	return (
		<>
			<div className={styles.preview}>
				<NestedDropdown menu={MenuStructure}>
					<NestedDropdownButton className="px-3 py-1">
						Dropdown ⬇️
					</NestedDropdownButton>
				</NestedDropdown>
			</div>

			<hr />

			<div className="antialiased p-10 inline-flex">
				<div className="pr-5">
					<NestedDropdownButton
						className="py-1 px-4"
						href="/"
					>
						Some Link in the same style
					</NestedDropdownButton>
				</div>
				<div>
					<NestedDropdownButton
						className="py-1 px-4"
						onClick={() => console.log('Clicked!')}
					>
						Some Button in the same style
					</NestedDropdownButton>
				</div>
			</div>
		</>
	);
};

export default ComponentWrapper;
