import NestedDropdown from './components/NestedDropdown';
import NestedDropdownButton from './components/NestedDropdown/MenuTriggers/NestedDropdownButton';
import MenuStructure from './components/MenuStructure';

function ComponentWrapper() {
	return (
		<>
			<div className="antialiased p-20 pb-72 inline-flex">
				<NestedDropdown menu={MenuStructure}>
					<NestedDropdownButton className="px-3 py-1">
						Dropdown ⬇️
					</NestedDropdownButton>
				</NestedDropdown>
			</div>

			<hr />

			<div className="antialiased p-10 inline-flex">
				<div className="pr-5">
					<NestedDropdownButton
						className="py-1 px-4"
						href="/"
					>
						Some Link in the same style
					</NestedDropdownButton>
				</div>
				<div>
					<NestedDropdownButton
						className="py-1 px-4"
						onClick={() => console.log('Clicked!')}
					>
						Some Button in the same style
					</NestedDropdownButton>
				</div>
			</div>
		</>
	);
}

export default ComponentWrapper;
