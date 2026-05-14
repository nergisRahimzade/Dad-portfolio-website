import { useState } from "react"
import {
  AppBar, Toolbar, Box, Button, Typography, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  useScrollTrigger, Stack,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import DownloadIcon from "@mui/icons-material/Download"
import { useTheme } from "@mui/material/styles"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 })

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: scrolled ? "rgba(10,22,40,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : "none",
          transition: "all 0.3s ease",
          color: theme.palette.text.primary,
        }}
      >
        <Toolbar sx={{ maxWidth: 1120, width: "100%", mx: "auto", px: { xs: 2, md: 3 }, py: 1 }}>
          {/* Logo */}
          <Stack direction="row" spacing={1.5} sx={{ flexGrow: 1, alignItems: "center" }}>
            <Box
              sx={{
                width: 38, height: 38,
                bgcolor: "primary.main",
                borderRadius: 2,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#fff", fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700, fontSize: "0.9rem",
                }}
              >
                HR
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Space Grotesk, sans-serif", fontWeight: 600,
                fontSize: "1rem", color: "text.primary", display: { xs: "none", sm: "block" },
              }}
            >
              Hasan Rahimzade
            </Typography>
          </Stack>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
            {navLinks.map(({ href, label }) => (
              <Button
                key={href}
                href={href}
                sx={{
                  color: "text.secondary", fontWeight: 500, fontSize: "0.9rem",
                  "&:hover": { color: "primary.main", bgcolor: "primary.main" + "15" },
                }}
              >
                {label}
              </Button>
            ))}
            <Button
              href="/resume.pdf"
              download
              variant="outlined"
              startIcon={<DownloadIcon sx={{ fontSize: "1rem !important" }} />}
              sx={{ ml: 1.5, borderColor: "primary.main", color: "primary.main", fontWeight: 600, borderRadius: 2 }}
            >
              Download CV
            </Button>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            sx={{ display: { md: "none" }, color: "text.primary" }}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, pt: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, mb: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map(({ href, label }) => (
              <ListItem key={href} disablePadding>
                <ListItemButton
                  component="a"
                  href={href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{ px: 3, py: 1.5 }}
                >
                  <ListItemText
                    primary={label}
                    slotProps={{ primary: { style: { fontWeight: 500, fontFamily: "Space Grotesk, sans-serif" } } }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem sx={{ px: 3, pt: 2 }}>
              <Button
                href="/resume.pdf"
                download
                fullWidth
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={() => setDrawerOpen(false)}
              >
                Download CV
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}
