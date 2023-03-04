// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

import NestedDropdown from '@/components/NestedDropdown/NestedDropdown';
import NestedDropdownButton from '@/components/NestedDropdown/MenuTriggers/NestedDropdownButton';
import {
	NestedDropdownStructure,
	MenuItemType,
	MenuItem,
} from '@/components/NestedDropdown/types';

export type { NestedDropdownStructure, MenuItem };

export { NestedDropdown, NestedDropdownButton, MenuItemType };
