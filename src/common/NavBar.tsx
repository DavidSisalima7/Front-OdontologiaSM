import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
  Typography,
  Stack
} from '@mui/material';
export const NavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>Odontólogia SM</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={1}>
                  <Button variant="contained">Login</Button>
                  <Button variant="outlined">Registro</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
