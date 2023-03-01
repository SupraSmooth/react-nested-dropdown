import NestedDropdown from './components/NestedDropdown';
import NestedDropdownButton from './components/NestedDropdown/NestedDropdownButton';
import MenuStructure from './components/MenuStructure';

const buttonIcon = (
	<svg
		className="h-5 w-5"
		viewBox="0 0 20 20"
		fill="currentColor"
		aria-hidden="true"
	>
		<path
			fillRule="evenodd"
			d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
			clipRule="evenodd"
		/>
	</svg>
);

function ComponentWrapper() {
	return (
		<>
			<div className="antialiased p-10 flex">
				<NestedDropdown menu={MenuStructure}>
					<NestedDropdownButton>
						Dropdown
						{buttonIcon}
					</NestedDropdownButton>
				</NestedDropdown>
			</div>

			<hr />

			<NestedDropdownButton
				href="/"
				className="ml-10 mt-10 w-auto"
			>
				Some Button Link in the same style
			</NestedDropdownButton>
		</>
	);
}

export default ComponentWrapper;
