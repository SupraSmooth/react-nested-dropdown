import { NestedDropdownStructure, MenuItemType } from './NestedDropdown/types';

import styles from './MenuStructure.module.scss';

const ChevronRight = <span className="fill-current ml-auto px-1">👉</span>;
const SomePrefixedIcon = <span className="pr-1">🚀</span>;

const Menu: NestedDropdownStructure = [
	{
		key: '0',
		label: 'Programming basic',
		tooltip: 'This is a tooltip!',
		className: styles.dummyPadding,
	},
	{
		key: '1',
		label: 'Programming advanced',
		suffixedComponent: ChevronRight,
		className: styles.dummyPadding,
		children: [
			{
				key: '1-0',
				prefixedComponent: SomePrefixedIcon,
				label: 'junior',
				className: styles.dummyPadding,
			},
			{
				key: '1-1',
				prefixedComponent: SomePrefixedIcon,
				label: 'with experience',
				className: styles.dummyPadding,
				suffixedComponent: ChevronRight,
				children: [
					{
						key: '1-1-0',
						prefixedComponent: <span className="pr-1">🏎️</span>,
						label: '< 3 years',
						className: styles.dummyPadding,
					},
					{
						key: '1-1-1',
						prefixedComponent: <span className="pr-1">🏎️</span>,
						label: '> 3 years',
						className: styles.dummyPadding,
					},
				],
			},
			{
				key: '1-2',
				prefixedComponent: SomePrefixedIcon,
				label: 'senior',
				className: styles.dummyPadding,
			},
			{
				key: '1-3',
				prefixedComponent: SomePrefixedIcon,
				label: 'master',
				className: styles.dummyPadding,
			},
		],
	},
	{
		key: '2',
		label: 'System administration',
		className: styles.dummyPadding,
		isDisabled: true,
	},
	{
		key: '3',
		type: MenuItemType.Separator,
		className: styles.dummySeperator,
	},
	{
		key: '4',
		type: MenuItemType.Label,
		label: 'With Headlines',
		className: styles.dummyLabel,
	},
	{
		key: '5',
		prefixedComponent: SomePrefixedIcon,
		label: 'Programming languages',
		className: styles.dummyPadding,
	},
	{
		key: '6',
		prefixedComponent: SomePrefixedIcon,
		label: 'Testing',
		className: styles.dummyPadding,
		suffixedComponent: ChevronRight,
		children: [
			{
				key: '6-0',
				label: 'Jest',
				className: styles.dummyPadding,
			},
			{
				key: '6-1',
				label: 'PHPUnit',
				className: styles.dummyPadding,
			},
			{
				key: '6-2',
				label: 'Mockery',
				className: styles.dummyPadding,
			},
		],
	},
];

export default Menu;
