import { CSSProperties, PropsWithChildren, ReactElement } from 'react';

export type NestedDropdownButtonProps = {
	title?: string;
	className?: string;
	styles?: CSSProperties;
	href?: string;
	isDisabled?: boolean;
	onClick?: () => void;
};

const NestedDropdownButton = ({
	title,
	className,
	styles,
	href,
	isDisabled = false,
	onClick,
	children,
}: PropsWithChildren<NestedDropdownButtonProps>): ReactElement => {
	const classNameBase = `w-full inline-flex justify-left items-center bg-white whitespace-nowrap ${
		isDisabled ? 'text-gray-300' : ''
	}`;

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
				style={styles}
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
				onClick ? '' : 'hover:cursor-default',
			].join(' ')}
			style={styles}
			aria-disabled={isDisabled}
			disabled={isDisabled}
			onClick={handleOnClick}
		>
			{children}
		</button>
	);
};

export default NestedDropdownButton;
