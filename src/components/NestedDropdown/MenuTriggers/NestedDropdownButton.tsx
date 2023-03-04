import { CSSProperties, PropsWithChildren, ReactElement } from 'react';

import styles from './NestedDropdownButton.module.scss';

export type NestedDropdownButtonProps = {
	title?: string;
	className?: string;
	additionalStyles?: CSSProperties;
	href?: string;
	isDisabled?: boolean;
	onClick?: () => void;
};

const NestedDropdownButton = ({
	title,
	className,
	additionalStyles,
	href,
	isDisabled = false,
	onClick,
	children,
}: PropsWithChildren<NestedDropdownButtonProps>): ReactElement => {
	const classNameBase = `${styles.base} ${isDisabled ? styles.disabled : ''}`;

	const handleOnClick = (): void => {
		if (isDisabled) {
			return;
		}

		onClick?.();
	};

	if (href && !isDisabled) {
		return (
			<a
				className={[classNameBase, className].join(' ')}
				href={href}
				title={title}
				style={additionalStyles}
				onClick={handleOnClick}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			type="button"
			title={title}
			className={[
				classNameBase,
				className,
				onClick ? 'hover:nd-cursor-pointer' : 'hover:nd-cursor-default',
			].join(' ')}
			style={additionalStyles}
			aria-disabled={isDisabled}
			disabled={isDisabled}
			onClick={handleOnClick}
		>
			{children}
		</button>
	);
};

export default NestedDropdownButton;
