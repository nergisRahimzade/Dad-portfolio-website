import { Box, Card, CardContent, Chip, Container, Stack, Typography } from "@mui/material"
import SchoolIcon from "@mui/icons-material/School"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import VerifiedIcon from "@mui/icons-material/Verified"

const education = [
  {
    degree: "Master of Science - Computer Science (AI)",
    institution: "Westcliff University",
    period: "2024 - Present",
    status: "In Progress",
    description: "Professional graduate program focused on Artificial Intelligence, machine learning, and advanced computer science concepts. Currently pursuing alongside active engineering career.",
    Icon: SchoolIcon,
  },
  {
    degree: "Bachelor of Science - Computer Science / Engineering",
    institution: "University",
    period: "2006 - 2010",
    status: "Completed",
    description: "Foundation in software engineering, algorithms, data structures, and systems programming. Basis for a 14+ year professional software engineering career.",
    Icon: MenuBookIcon,
  },
]

const certifications = [
  "Microsoft Azure Developer",
  "Agile / Scrum Practitioner",
  "AI Agent Course - Coursera / Google",
]

export default function Education() {
  return (
    <Box
      id="education"
      component="section"
      sx={{ py: { xs: 9, md: 12 }, bgcolor: "background.paper", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "divider" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "primary.main", mb: 1.5 }}>
            Academic background
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" }, color: "text.primary" }}>
            Education
          </Typography>
        </Box>

        <Stack spacing={3} sx={{ mb: 4 }}>
          {education.map((edu) => (
            <Card
              key={edu.degree}
              variant="outlined"
              sx={{
                borderRadius: 4,
                transition: "all 0.25s ease",
                "&:hover": { borderColor: "primary.light", boxShadow: "0 8px 32px rgba(124,58,237,0.07)" },
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ alignItems: { sm: "flex-start" } }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 52, height: 52, flexShrink: 0,
                      bgcolor: "rgba(124,58,237,0.08)",
                      border: "1px solid rgba(124,58,237,0.2)",
                      borderRadius: 3,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "primary.main",
                    }}
                  >
                    <edu.Icon fontSize="medium" />
                  </Box>

                  {/* Body */}
                  <Box sx={{ flex: 1 }}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={0} sx={{ justifyContent: "space-between", alignItems: { sm: "flex-start" }, gap: 1, mb: 1.5 }}>
                      <Box>
                        <Typography variant="h5" sx={{ fontSize: "1.1rem", color: "text.primary", mb: 0.5 }}>
                          {edu.degree}
                        </Typography>
                        <Typography sx={{ fontSize: "0.9rem", color: "primary.main", fontWeight: 500 }}>
                          {edu.institution}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1, flexShrink: 0 }}>
                        <Chip
                          label={edu.period}
                          size="small"
                          sx={{ fontFamily: "monospace", fontSize: "0.8rem", bgcolor: "background.default", border: "1px solid", borderColor: "divider", color: "text.secondary" }}
                        />
                        <Chip
                          label={edu.status}
                          size="small"
                          sx={
                            edu.status === "In Progress"
                              ? { bgcolor: "rgba(16,185,129,0.1)", color: "#059669", border: "1px solid rgba(16,185,129,0.25)", fontSize: "0.75rem", fontWeight: 600 }
                              : { bgcolor: "rgba(124,58,237,0.08)", color: "primary.main", border: "1px solid rgba(124,58,237,0.2)", fontSize: "0.75rem", fontWeight: 600 }
                          }
                        />
                      </Box>
                    </Stack>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                      {edu.description}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>

        {/* Certifications */}
        <Card variant="outlined" sx={{ borderRadius: 4 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 600, color: "text.primary", mb: 2.5 }}>
              Certifications &amp; Courses
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {certifications.map((cert) => (
                <Box
                  key={cert}
                  sx={{
                    display: "flex", flexDirection: "row", alignItems: "center", gap: 1,
                    bgcolor: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.18)",
                    borderRadius: 2,
                    px: 2, py: 1,
                  }}
                >
                  <VerifiedIcon sx={{ color: "primary.main", fontSize: "1.1rem" }} />
                  <Typography sx={{ fontSize: "0.88rem", fontWeight: 500, color: "text.primary" }}>
                    {cert}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
