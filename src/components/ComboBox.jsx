export const ComboBox = ({ title, onSelect, options = [], classOptions, ...props }) => {
	return (
		<select onChange={e => onSelect(e.target.value)} value={title} {...props}>
			{options.map((option, index) => (
				<option value={option.value} key={index} className={classOptions}>
					{option.option}
				</option>
			))}
		</select>
	);
};
