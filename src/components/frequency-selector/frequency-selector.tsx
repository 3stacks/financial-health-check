import * as React from 'react';

enum FREQUENCIES {
	DAILY = 'Daily',
	WEEKLY = 'Weekly',
	MONTHLY = 'Monthly',
	ANNUALLY = 'Annually'
}

const options = [
	FREQUENCIES.DAILY,
	FREQUENCIES.WEEKLY,
	FREQUENCIES.MONTHLY,
	FREQUENCIES.ANNUALLY,
];

export default function FrequencySelector({onChange} : {onChange: (event: React.ChangeEvent) => void}) {
	return (
		<label>
			Frequency
			<select>
				{options.map(frequencyOption => {
					return (
						<option value={frequencyOption}>
							{frequencyOption}
						</option>
					)
				})}
			</select>
		</label>
	);
}