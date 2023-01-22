import React from 'react';

import { AppBar, Container, Stack, Toolbar, Typography, Link } from '@mui/material';

function NavBar() {
    return(
        <AppBar>
            <Container>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>TAPAS</Typography>
                    <Stack direction="row" spacing={2}>
                        <Link href='#' color='inherit' underline="none">Menu</Link>
                        <Link href='#' color='inherit' underline="none">Services</Link>
                        <Link href='#' color='inherit' underline="none">Our Story</Link>
                        <Link href='#' color='inherit' underline="none">Visit Us</Link>
                        <Link href='#' color='inherit' underline="none">Careers</Link>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;