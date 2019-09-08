import React from 'react';
import FrequencySelector, {
	FREQUENCIES,
} from '../frequency-selector/frequency-selector';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Card from "@material-ui/core/Card";

interface IProps {
	classes: { [key: string]: any };
}

interface IState {
	income: string;
	incomeFrequency: FREQUENCIES;
}

export default class App extends React.Component<IProps, IState> {
	state = {
		income: '0',
		incomeFrequency: FREQUENCIES.MONTHLY,
	};

	handleStateValueChangeRequested = (whichKey: keyof IState) => (
		event: React.ChangeEvent<any>
	) => {
		this.setState(state => {
			return {
				...state,
				[whichKey]: event.target.value,
			};
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<Typography variant="body1" component="div" className="root">
				<AppBar className={classes.appBar} position="static">
					<Typography variant="h5" component="h1" color="inherit">
						Financial Health Check
					</Typography>
				</AppBar>
				<div className="max-width-container">
					<Card className={classes.section}>
						<Typography component="h2" variant="h5">
							Income
						</Typography>
						<TextField
							label="Income"
							value={this.state.income}
							onChange={this.handleStateValueChangeRequested('income')}
							className={classes.textField}
						/>
						<FrequencySelector
							id="income"
							value={this.state.incomeFrequency}
							onChange={this.handleStateValueChangeRequested(
								'incomeFrequency'
							)}
						/>
					</Card>
					<Typography component="h2" variant="h5">
						Income
					</Typography>
				</div>
			</Typography>
		);
	}
}
