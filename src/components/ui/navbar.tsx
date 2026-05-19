import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

function Navbar() {
  const navItems = ["Home", "About", "Contact"];
  return (
    <AppBar position="static" sx={{ backgroundColor: "#d7b5aa" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer" }}
          >
            Onion Kitchen
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff", mx: 1 }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
