import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import portraitImg from "../assets/portfolio-picture.jpeg"

const techTags = ["C#", ".NET", "Azure", "Angular", "SQL Server", "Docker"]

export default function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        pt: { xs: "100px", md: "120px" },
        pb: { xs: 8, md: 10 },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -200, right: -200,
          width: 700, height: 700,
          background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={{ xs: 5, md: 10 }}
          sx={{ alignItems: "center" }}
        >
          {/* --- Text --- */}
          <Box sx={{ flex: 1 }}>
            {/* Available badge */}
            <Box
              sx={{
                display: "inline-flex", alignItems: "center", gap: 1,
                bgcolor: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
                borderRadius: "100px",
                px: 2, py: 0.75,
                mb: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 8, height: 8, borderRadius: "50%", bgcolor: "#10B981",
                  "@keyframes pulse": {
                    "0%,100%": { opacity: 1 },
                    "50%": { opacity: 0.5 },
                  },
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <Typography sx={{ fontSize: "0.82rem", fontWeight: 600, color: "secondary.main" }}>
                Available for new opportunities
              </Typography>
            </Box>

            {/* Sub-title */}
            <Typography
              sx={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1rem", fontWeight: 500,
                color: "primary.main", letterSpacing: "0.06em",
                textTransform: "uppercase", mb: 2,
              }}
            >
              Senior Full-Stack Software Engineer
            </Typography>

            {/* Name */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", sm: "3.8rem", md: "5rem" },
                lineHeight: 1.05, mb: 3.5, color: "text.primary",
              }}
            >
              Hasan
              <Box component="span" sx={{ color: "primary.main", display: "block" }}>
                Rahimzade
              </Box>
            </Typography>

            {/* Bio */}
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4.5, maxWidth: 580 }}>
              Results-driven engineer with{" "}
              <Box component="strong" sx={{ color: "text.primary" }}>14+ years</Box> of experience
              delivering robust, scalable enterprise applications. Expert in{" "}
              <Box component="strong" sx={{ color: "text.primary" }}>C#, .NET Core, ASP.NET Web API</Box>{" "}
              and <Box component="strong" sx={{ color: "text.primary" }}>Angular</Box>, with a
              proven track record in cloud architecture, microservices, and leading
              high-performing engineering teams.
            </Typography>

            {/* CTA Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 5, flexWrap: "wrap" }}>
              <Button
                href="/resume.pdf"
                download
                variant="contained"
                size="large"
                startIcon={<DownloadIcon />}
                sx={{
                  bgcolor: "primary.main",
                  px: 4, py: 1.5,
                  fontWeight: 700,
                  boxShadow: "0 4px 20px rgba(56,189,248,0.35)",
                  "&:hover": { bgcolor: "primary.dark", boxShadow: "0 6px 28px rgba(56,189,248,0.5)", transform: "translateY(-2px)" },
                  transition: "all 0.2s ease",
                }}
              >
                Download CV
              </Button>
              <Button
                href="#contact"
                variant="outlined"
                size="large"
                startIcon={<EmailOutlinedIcon />}
                sx={{
                  borderColor: "divider", color: "text.primary", px: 4, py: 1.5,
                  fontWeight: 600,
                  "&:hover": { borderColor: "primary.main", color: "primary.main", transform: "translateY(-2px)" },
                  transition: "all 0.2s ease",
                }}
              >
                Get In Touch
              </Button>
            </Stack>

            {/* Tech chips */}
            <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
              {techTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: "rgba(56,189,248,0.08)",
                    color: "primary.main",
                    border: "1px solid rgba(56,189,248,0.2)",
                    fontFamily: "monospace",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* --- Portrait --- */}
          <Box sx={{ flexShrink: 0, position: "relative" }}>
            <Box
              sx={{
                position: "absolute", inset: -24,
                background: "radial-gradient(circle at center, rgba(56,189,248,0.15) 0%, transparent 70%)",
                borderRadius: "50%", pointerEvents: "none",
              }}
            />
            <Box
              component="img"
              src={portraitImg}
              alt="Hasan Rahimzade"
              sx={{
                width: { xs: 240, md: 360 },
                height: { xs: 280, md: 440 },
                objectFit: "cover",
                objectPosition: "top center",
                borderRadius: 6,
                display: "block",
                position: "relative",
                zIndex: 1,
                boxShadow: "0 0 0 1px rgba(56,189,248,0.15), 0 20px 60px rgba(0,0,0,0.25), 0 0 80px rgba(56,189,248,0.12)",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
