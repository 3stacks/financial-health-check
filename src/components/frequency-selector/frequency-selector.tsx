import React from 'react';
import Select from '@material-ui/core/Select';
import Label from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

export enum FREQUENCIES {
	DAILY = 'Daily',
	WEEKLY = 'Weekly',
	MONTHLY = 'Monthly',
	ANNUALLY = 'Annually',
}

const options = [
	FREQUENCIES.DAILY,
	FREQUENCIES.WEEKLY,
	FREQUENCIES.MONTHLY,
	FREQUENCIES.ANNUALLY,
];

interface IProps {
	onChange?: (
		event: React.ChangeEvent<{ name?: string; value: unknown }>,
		child: React.ReactNode
	) => void;
	value: FREQUENCIES;
	id: string;
}

export default function FrequencySelector({ value, onChange, id }: IProps) {
	return (
		<FormControl component="div">
			<Label>Frequency</Label>
			<Select
				input={<Input name="frequency" id={`frequency-${id}`} />}
				value={value}
				variant="outlined"
				onChange={onChange}
			>
				{options.map(frequencyOption => {
					return (
						<MenuItem value={frequencyOption}>
							{frequencyOption}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
}
