const mergeStrings = (classes: Array<string | undefined>): string => {
	return classes
		.filter(
			(classString) => classString !== undefined && classString !== ''
		)
		.join(' ');
};

export default mergeStrings;
