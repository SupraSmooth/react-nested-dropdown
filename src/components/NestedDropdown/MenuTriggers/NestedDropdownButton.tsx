import { CSSProperties, PropsWithChildren, ReactElement } from 'react';
import mergeStrings from '@/components/Util/mergeStrings';

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
	const disabledStyle = !isDisabled ? '' : styles.disabled;
	const cursorStyle = onClick ? '' : styles.cursorDefault;

	const handleOnClick = (): void => {
		if (isDisabled) {
			return;
		}

		onClick?.();
	};

	if (href && !isDisabled) {
		return (
			<a
				className={mergeStrings([
					styles.base,
					className,
					disabledStyle,
				])}
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
			className={mergeStrings([
				styles.base,
				className,
				disabledStyle,
				cursorStyle,
			])}
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
