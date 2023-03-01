import { ReactElement } from 'react';
import NestedDropdownButton from './NestedDropdownButton';

export type NestedDropdownMenuStructure = {
	icon?: JSX.Element;
	label: string;
	tooltip?: string;
	href?: string;
	isDisabled?: boolean;
	onClick?: () => void;
	children?: NestedDropdownMenuStructure;
}[];

export type NestedDropdownMenuProps = {
	menu?: NestedDropdownMenuStructure;
	isSubmenu?: boolean;
};

const NestedDropdownMenu = ({
	menu,
	isSubmenu = false,
}: NestedDropdownMenuProps): ReactElement | null => {
	if (menu?.length === 0) {
		return null;
	}

	const subMenuClasses = isSubmenu
		? 'absolute top-0 right-0 origin-top-left'
		: '';

	return (
		<ul
			id="menu"
			aria-hidden="true"
			className={`bg-white border hidden group-hover:block absolute origin-top min-w-32 ${subMenuClasses}`}
		>
			{menu?.map((menuItem) => {
				const hasChildren = menuItem.children !== undefined;

				return (
					<li
						className={hasChildren ? 'relative' : ''}
						key={menuItem.label}
					>
						{!hasChildren && (
							<NestedDropdownButton
								title={menuItem.tooltip}
								isDisabled={menuItem.isDisabled}
								href={menuItem.href}
								onClick={menuItem.onClick}
							>
								{menuItem.icon}
								{menuItem.label}
							</NestedDropdownButton>
						)}
						{hasChildren && (
							<>
								<NestedDropdownButton title={menuItem.tooltip}>
									{menuItem.label}
									<svg
										className="fill-current h-4 w-4 -rotate-90"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</NestedDropdownButton>

								<NestedDropdownMenu
									menu={menuItem.children}
									isSubmenu
								/>
							</>
						)}
					</li>
				);
			})}
		</ul>
	);
};

export default NestedDropdownMenu;
