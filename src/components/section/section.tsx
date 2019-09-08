import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

export default function Section({classes, title, children} : {classes: {[key: string]: any}, title: string, children: React.ReactElement}) {
	return (
		<Card className={classes.section}>
			<Typography component="h2" variant="h5">
				{title}
			</Typography>
			{children}
		</Card>
	)
}