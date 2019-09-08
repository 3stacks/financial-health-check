import Section from './section';
import withStyles from '@material-ui/core/styles/withStyles';

export const styles = (theme: any) => ({
	section: {
		padding: '1.5rem',
		marginBottom: '1.5rem'
	}
});

export default withStyles(styles)(Section);
