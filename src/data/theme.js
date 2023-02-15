import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export let theme = responsiveFontSizes(
	createTheme({
		palette: {
			primary: {
				main: 'rgb(195,65,61)',
			},
			secondary: {
				main: 'rgb(24,242,178)',
			},
			background: {
				default: 'rgb(49, 49, 49)',
			},
			black: {
				main: 'rgb(12, 12, 12)',
			},
		},
		typography: {
			allVariants: {
				color: '#fff',
			},
		},
	})
);

theme = createTheme(theme, {
	typography: {
		h2: {
			fontFamily: 'Comicool',
			[theme.breakpoints.down('sm')]: {
				fontSize: '9vw',
			},
		},
		h5: {
			fontFamily: 'Comicool',
			[theme.breakpoints.down('sm')]: {
				fontSize: '3.5vw',
			},
		},
	},
	components: {
		MuiLink: {
			styleOverrides: {
				root: {
					'&:hover': {
						borderBottom: `1px solid ${theme.palette.primary.main}`,
						transition: '0.5s ease',
					},
				},
			},
		},
	},
});
