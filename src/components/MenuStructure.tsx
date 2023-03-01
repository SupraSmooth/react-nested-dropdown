import { NestedDropdownMenuStructure } from './NestedDropdown/NestedDropdownMenu';

const MenuStructure: NestedDropdownMenuStructure = [
	{
		icon: <b className="pr-1">{'>'}</b>,
		label: 'Programming',
		tooltip: 'Peter programmiert',
	},
	{
		label: 'Programming advanced',
		children: [
			{
				icon: <b className="pr-1">{'>'}</b>,
				label: 'junior',
			},
			{
				icon: <b className="pr-1">{'>'}</b>,
				label: 'with experience',
			},
			{
				icon: <b className="pr-1">{'>'}</b>,
				label: 'senior',
			},
			{
				icon: <b className="pr-1">{'>'}</b>,
				label: 'master',
			},
		],
	},
	{
		label: 'DevOps',
		isDisabled: true,
	},
	{
		label: 'Languages',
		children: [
			{
				label: 'Javascript',
				href: '/',
			},
			{
				label: 'Python',
				children: [
					{
						label: '2.7',
					},
					{
						label: '3+',
					},
				],
			},
			{
				label: 'Go',
				onClick: () => console.log('Go Go Go'),
			},
			{
				label: 'Rust',
			},
		],
	},
	{
		label: 'Testing',
	},
];

export default MenuStructure;
