import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
    background: { default: "#f4f6f8", paper: "#ffffff" },
    text: { primary: "#1e1e1e", secondary: "#555" },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    h1: { fontWeight: 600, fontSize: "2.4rem" },
    h2: { fontWeight: 500, fontSize: "2rem" },
    h3: { fontWeight: 500, fontSize: "1.6rem" },
    body1: { fontSize: "1rem" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: "none", fontWeight: 500 },
      },
    },
    MuiPaper: { styleOverrides: { root: { padding: 16, borderRadius: 12 } } },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#ce93d8" },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#ffffff", secondary: "#aaaaaa" },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    h1: { fontWeight: 600, fontSize: "2.4rem" },
    h2: { fontWeight: 500, fontSize: "2rem" },
    h3: { fontWeight: 500, fontSize: "1.6rem" },
    body1: { fontSize: "1rem" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: "none", fontWeight: 500 },
      },
    },
    MuiPaper: { styleOverrides: { root: { padding: 16, borderRadius: 12 } } },
  },
});
