import { ReactElement } from 'react';
import NestedDropdownButton from '@suprasmooth/react-nested-dropdown';

const App = (): ReactElement => {
	return (
		<div className="App">
			<h1>My package:</h1>
			<hr />
			<NestedDropdownButton
				menu={[
					{
						key: '0',
						label: 'Peter',
					},
					{
						key: '1',
						label: 'Peter 2',
					},
				]}
			>
				<p>PEPPEPEP</p>
			</NestedDropdownButton>
		</div>
	);
};

export default App;
