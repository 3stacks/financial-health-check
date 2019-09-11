import React from 'react';
import nanoid from 'nanoid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

interface ILivingExpense {
	category: string;
	amount: number;
	id: string;
}

interface IState {
	isExpanded: boolean;
	total: number;
	expenses: ILivingExpense[];
}

const numberFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

export default class LivingExpenses extends React.Component<any, IState> {
	state = {
		isExpanded: true,
		total: 0,
		expenses: [],
	};

	addExpense = () => {
		this.setState(state => {
			return {
				...state,
				expenses: [
					...state.expenses,
					{
						id: nanoid(),
						amount: 0,
						category: ''
					}
				]
			}
		})
	};

	handleChange = (
		whichExpense: string,
		whichProperty: keyof ILivingExpense
	) => (event: React.ChangeEvent<any>) => {
		this.setState(state => {
			return {
				...state,
				expenses: state.expenses.map(expense => {
					if (expense.id === whichExpense) {
						return {
							...expense,
							[whichProperty]: event.target.value,
						};
					}

					return expense;
				}),
			};
		});
	};

	render() {
		return (
			<div>
				<div>
					<span>
						Total {numberFormatter.format(this.state.total)} per
						month
					</span>
					<Button></Button>
				</div>
				{this.state.isExpanded && (
					<ul>
						{this.state.expenses.map((expense: ILivingExpense) => {
							return (
								<li key={expense.id}>
									<FormControl component="div">
										<InputLabel
											htmlFor={`${expense.id}_amount`}
										>
											Amount
										</InputLabel>
										<Input
											id={`${expense.id}_amount`}
											value={expense.amount}
											onChange={this.handleChange(
												expense.id,
												'amount'
											)}
											startAdornment={
												<InputAdornment position="start">
													$
												</InputAdornment>
											}
										/>
									</FormControl>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		);
	}
}
