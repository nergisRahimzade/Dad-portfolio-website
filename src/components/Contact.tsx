import { Box, Button, Card, CardActionArea, CardContent, Container, Divider, Stack, Typography } from "@mui/material"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import DownloadIcon from "@mui/icons-material/Download"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

const contactLinks = [
  { label: "Email", value: "hasan.rahimzade@email.com", href: "mailto:hasan.rahimzade@email.com", Icon: EmailOutlinedIcon },
  { label: "LinkedIn", value: "linkedin.com/in/hasanrahimzade", href: "https://www.linkedin.com/in/hasanrahimzade", Icon: LinkedInIcon },
  { label: "GitHub", value: "github.com/hasanrahimzade", href: "https://github.com/hasanrahimzade", Icon: GitHubIcon },
]

export default function Contact() {
  return (
    <Box id="contact" component="section" sx={{ pt: { xs: 9, md: 12 }, pb: 0 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 6, md: 10 }} sx={{ alignItems: "flex-start", pb: { xs: 9, md: 12 } }}>
          {/* Left: header */}
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "primary.main", mb: 1.5 }}>
              Let's connect
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" }, color: "text.primary", mb: 2 }}>
              Get In Touch
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.75, maxWidth: 440 }}>
              Open to senior engineering roles, technical leadership positions, and exciting collaboration opportunities. Let's build something great together.
            </Typography>
          </Box>

          {/* Right: contact cards */}
          <Stack sx={{ flex: 1, width: "100%" }} spacing={2}>
            {contactLinks.map(({ label, value, href, Icon }) => (
              <Card
                key={label}
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  transition: "all 0.2s ease",
                  "&:hover": { borderColor: "primary.main", boxShadow: "0 4px 20px rgba(124,58,237,0.1)", transform: "translateX(4px)" },
                }}
              >
                <CardActionArea component="a" href={href} target="_blank" rel="noopener noreferrer" sx={{ p: 0 }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                      <Box
                        sx={{
                          width: 44, height: 44, flexShrink: 0,
                          bgcolor: "rgba(124,58,237,0.08)",
                          border: "1px solid rgba(124,58,237,0.2)",
                          borderRadius: 2.5,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "primary.main",
                        }}
                      >
                        <Icon fontSize="small" />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "text.secondary", mb: 0.25 }}>
                          {label}
                        </Typography>
                        <Typography sx={{ fontSize: "0.92rem", fontWeight: 500, color: "text.primary", fontFamily: "monospace" }}>
                          {value}
                        </Typography>
                      </Box>
                      <ArrowOutwardIcon sx={{ color: "text.disabled", fontSize: "1.1rem", flexShrink: 0 }} />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
        </Stack>

        <Divider />
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.5 }}>Prefer a full overview?</Typography>
          <Button
            href="/resume.pdf"
            download
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            sx={{ px: 5, py: 1.75, fontWeight: 700, fontSize: "1rem", boxShadow: "0 4px 20px rgba(124,58,237,0.3)", "&:hover": { transform: "translateY(-2px)" }, transition: "all 0.2s" }}
          >
            Download Resume
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", borderTop: "1px solid", borderColor: "divider", py: 4 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", sm: "row" }} sx={{ justifyContent: "space-between", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              � {new Date().getFullYear()} Hasan Rahimzade. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: "text.disabled" }}>
              Built with React &amp; TypeScript
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
