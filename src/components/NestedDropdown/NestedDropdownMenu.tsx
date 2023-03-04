import { ReactElement } from 'react';
import {
	NestedDropdownStructure,
	MenuItemType,
} from '@/components/NestedDropdown/types';
import NestedDropdownButton from '@/components/NestedDropdown/MenuTriggers/NestedDropdownButton';
import MenuTypeSeparator from '@/components/NestedDropdown/MenuTypes/MenuTypeSeparator';
import MenuTypeLabel from '@/components/NestedDropdown/MenuTypes/MenuTypeLabel';

import styles from './NestedDropdownMenu.module.scss';

export type NestedDropdownMenuProps = {
	menu?: NestedDropdownStructure;
	isSubmenu?: boolean;
};

const NestedDropdownMenu = ({
	menu,
	isSubmenu = false,
}: NestedDropdownMenuProps): ReactElement | null => {
	if (menu?.length === 0) {
		return null;
	}

	return (
		<ul
			aria-hidden="true"
			className={`ndGroupChildren ${
				isSubmenu ? styles.dropdownListSubmenu : ''
			} ${styles.dropdownList}`}
		>
			{menu?.map((menuItem) => {
				const hasChildren = menuItem.children !== undefined;

				switch (menuItem.type ?? MenuItemType.Link) {
					case MenuItemType.Link:
						return (
							<li
								className={[
									styles.listItem,
									hasChildren ? styles.relative : '',
								].join(' ')}
								key={menuItem.key}
							>
								{!hasChildren && (
									<NestedDropdownButton
										className={menuItem.className}
										title={menuItem.tooltip}
										isDisabled={menuItem.isDisabled}
										href={menuItem.href}
										onClick={menuItem.onClick}
									>
										{menuItem.prefixedComponent}
										<div className={styles.label}>
											{menuItem.label}
										</div>
										{menuItem.suffixedComponent}
									</NestedDropdownButton>
								)}

								{hasChildren && (
									<>
										<NestedDropdownButton
											className={menuItem.className}
											title={menuItem.tooltip}
											isDisabled={menuItem.isDisabled}
										>
											{menuItem.prefixedComponent}
											<div className={styles.label}>
												{menuItem.label}
											</div>
											{menuItem.suffixedComponent}
										</NestedDropdownButton>

										{!menuItem.isDisabled && (
											<NestedDropdownMenu
												menu={menuItem.children}
												isSubmenu
											/>
										)}
									</>
								)}
							</li>
						);
					case MenuItemType.Separator:
						return (
							<MenuTypeSeparator
								key={menuItem.key}
								menuItem={menuItem}
							/>
						);
					case MenuItemType.Label:
						return (
							<MenuTypeLabel
								key={menuItem.key}
								menuItem={menuItem}
							/>
						);
					default:
						return null;
				}
			})}
		</ul>
	);
};

export default NestedDropdownMenu;
