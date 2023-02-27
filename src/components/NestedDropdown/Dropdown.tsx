import { ReactElement } from 'react';

export const Dropdown = (): ReactElement => {
	const handleOnClick = () => {
		console.log('Dropdown clicked');
	};

	return (
		<div>
			<button
				onClick={handleOnClick}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Dropdown
			</button>
		</div>
	);
};
