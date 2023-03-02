import { NestedDropdownStructure, MenuItemType } from './NestedDropdown/types';

const ChevronRight = <span className="fill-current ml-auto px-1">👉</span>;
const SomePrefixedIcon = <span className="pr-1">🚀</span>;

const Menu: NestedDropdownStructure = [
	{
		key: '0',
		label: 'Programming basic',
		tooltip: 'This is a tooltip!',
		className: 'px-3 py-1',
	},
	{
		key: '1',
		label: 'Programming advanced',
		suffixedComponent: ChevronRight,
		className: 'px-3 py-1',
		children: [
			{
				key: '1-0',
				prefixedComponent: SomePrefixedIcon,
				label: 'junior',
				className: 'px-3 py-1',
			},
			{
				key: '1-1',
				prefixedComponent: SomePrefixedIcon,
				label: 'with experience',
				className: 'px-3 py-1',
				suffixedComponent: ChevronRight,
				children: [
					{
						key: '1-1-0',
						prefixedComponent: <span className="pr-1">🏎️</span>,
						label: '< 3 years',
						className: 'px-3 py-1',
					},
					{
						key: '1-1-1',
						prefixedComponent: <span className="pr-1">🏎️</span>,
						label: '> 3 years',
						className: 'px-3 py-1',
					},
				],
			},
			{
				key: '1-2',
				prefixedComponent: SomePrefixedIcon,
				label: 'senior',
				className: 'px-3 py-1',
			},
			{
				key: '1-3',
				prefixedComponent: SomePrefixedIcon,
				label: 'master',
				className: 'px-3 py-1',
			},
		],
	},
	{
		key: '2',
		label: 'System administration',
		className: 'px-3 py-1',
		isDisabled: true,
	},
	{
		key: '3',
		type: MenuItemType.Separator,
		className: 'my-2 px-3 py-1',
	},
	{
		key: '4',
		type: MenuItemType.Label,
		label: 'With Headlines',
		className: 'font-bold px-3 py-1',
	},
	{
		key: '5',
		prefixedComponent: SomePrefixedIcon,
		label: 'Programming languages',
		className: 'px-3 py-1',
	},
	{
		key: '6',
		prefixedComponent: SomePrefixedIcon,
		label: 'Testing',
		className: 'px-3 py-1',
		suffixedComponent: ChevronRight,
		children: [
			{
				key: '6-0',
				label: 'Jest',
				className: 'px-3 py-1',
			},
			{
				key: '6-1',
				label: 'PHPUnit',
				className: 'px-3 py-1',
			},
			{
				key: '6-2',
				label: 'Mockery',
				className: 'px-3 py-1',
			},
		],
	},
];

export default Menu;
