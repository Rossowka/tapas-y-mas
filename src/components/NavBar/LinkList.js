import { Link, Stack } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

export function LinkList({ direction, sx }) {
	return (
		<>
			<Stack
				direction={direction}
				sx={[
					sx,
					{
						gap: 2,
					},
				]}
			>
				<Link
					component={RouterLink}
					to='/'
					color='inherit'
					underline='none'
				>
					Home
				</Link>
				<Link
					component={RouterLink}
					to='/about'
					color='inherit'
					underline='none'
				>
					Our Story
				</Link>
				<Link
					component={RouterLink}
					to='/menu'
					color='inherit'
					underline='none'
				>
					Menu
				</Link>
				<Link
					component={RouterLink}
					to='/recognition'
					color='inherit'
					underline='none'
				>
					Recognition
				</Link>
				<Link
					component={RouterLink}
					to='/location'
					color='inherit'
					underline='none'
				>
					Visit Us
				</Link>
			</Stack>
			{/* <Stack
  direction='row'
  sx={{
    // justifyContent: 'flex-end',
    alignItems: 'center',
    display: { xs: 'none', sm: 'inherit' },
    gap: 2,
    whiteSpace: 'nowrap',
  }}
>
  <Link
    href='#login'
    color='inherit'
    underline='none'
  >
    Log In
  </Link>
  <Box
    sx={{
      width: '1px',
      height: 30,
      backgroundColor: grey[500],
    }}
  />
  <Link
    href='#cart'
    color='inherit'
    underline='none'
  >
    Cart
  </Link>
</Stack> */}
		</>
	);
}
