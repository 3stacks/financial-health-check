import App from './app';
import withStyles from '@material-ui/core/styles/withStyles';
import { FlexDirectionProperty } from 'csstype';

export const styles = (theme: any) => ({
	textField: {
		marginRight: '1.5rem',
	},
	appBar: {
		height: 64,
		display: 'flex',
		flexDirection: 'row' as FlexDirectionProperty,
		justifyContent: 'center',
		alignItems: 'center',

		'& h1': {
			margin: '0 auto',
		},
	},
	section: {
		padding: '1.5rem',
		marginBottom: '1.5rem'
	}
});

export default withStyles(styles)(App);
