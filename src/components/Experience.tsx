import { Box, Button, Card, CardContent, Chip, Container, Divider, Stack, Typography } from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"

const experiences = [
  {
    role: "Senior Full-Stack Software Engineer",
    focus: "Backend-Focused",
    period: "2019 - Present",
    highlights: [
      "Architected and led development of large-scale enterprise web applications using C#, .NET Core, and ASP.NET Web API.",
      "Spearheaded digital transformation, migrating legacy Web Forms and WinForms systems to modern microservice architecture on Azure.",
      "Designed RESTful and gRPC services, integrating message brokers (RabbitMQ, Kafka, Azure Service Bus) for event-driven workflows.",
      "Enforced SOLID principles, Domain-Driven Design, TDD (NUnit, XUnit), and rigorous code review culture.",
      "Mentored cross-functional engineering teams, elevating overall team output and code quality.",
    ],
    tags: ["C#", ".NET Core", "Azure", "Microservices", "Angular", "SQL Server", "Docker"],
  },
  {
    role: "Full-Stack Software Engineer",
    focus: ".NET & Angular Specialist",
    period: "2014 - 2019",
    highlights: [
      "Developed and maintained enterprise-grade web applications with Angular frontend and ASP.NET Web API backend.",
      "Optimised SQL Server performance through T-SQL tuning, stored procedures, and Entity Framework Core query optimisation.",
      "Integrated third-party services and built internal tooling that reduced deployment time significantly.",
      "Participated in Agile Scrum ceremonies: sprint planning, retrospectives, and technical documentation.",
    ],
    tags: ["C#", "ASP.NET Web API", "Angular", "SQL Server", "Entity Framework", "jQuery"],
  },
  {
    role: "Software Engineer",
    focus: "Desktop & Web Applications",
    period: "2010 - 2014",
    highlights: [
      "Built and delivered enterprise desktop (WinForms) and web applications (Web Forms) using C# and .NET Framework.",
      "Developed and maintained SQL Server databases with complex stored procedures and views.",
      "Collaborated with business stakeholders to translate requirements into technical solutions.",
    ],
    tags: ["C#", ".NET Framework", "WinForms", "Web Forms", "SQL Server", "ADO.NET"],
  },
]

export default function Experience() {
  return (
    <Box id="experience" component="section" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "primary.main", mb: 1.5 }}>
            Career journey
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" }, color: "text.primary", mb: 2 }}>
            Work Experience
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}>
            14+ years of progressive engineering experience, from enterprise desktop apps to leading cloud-native microservice transformations.
          </Typography>
        </Box>

        {/* Timeline */}
        <Stack spacing={0}>
          {experiences.map((exp, i) => (
            <Stack key={i} direction="row" spacing={3}>
              {/* Marker */}
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", pt: "6px", width: 24, flexShrink: 0 }}>
                <FiberManualRecordIcon sx={{ color: "primary.main", fontSize: "0.9rem" }} />
                {i < experiences.length - 1 && (
                  <Box sx={{ width: 2, flexGrow: 1, bgcolor: "divider", mt: 0.75 }} />
                )}
              </Box>

              {/* Card */}
              <Card
                variant="outlined"
                sx={{
                  flex: 1, mb: 4, borderRadius: 4,
                  transition: "all 0.25s ease",
                  "&:hover": { borderColor: "primary.light", boxShadow: "0 8px 32px rgba(124,58,237,0.07)" },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={0} sx={{ justifyContent: "space-between", alignItems: { sm: "flex-start" }, gap: 1, mb: 2.5 }}>
                    <Box>
                      <Typography variant="h5" sx={{ fontSize: "1.2rem", color: "text.primary", mb: 0.5 }}>
                        {exp.role}
                      </Typography>
                      <Typography sx={{ fontSize: "0.88rem", color: "primary.main", fontWeight: 500 }}>
                        {exp.focus}
                      </Typography>
                    </Box>
                    <Chip
                      label={exp.period}
                      size="small"
                      sx={{
                        fontFamily: "monospace", fontSize: "0.82rem",
                        bgcolor: "background.paper", border: "1px solid", borderColor: "divider",
                        color: "text.secondary", fontWeight: 600, flexShrink: 0,
                      }}
                    />
                  </Stack>

                  <Box component="ul" sx={{ pl: 0, m: 0, mb: 2.5, listStyle: "none" }}>
                    {exp.highlights.map((h, j) => (
                      <Box component="li" key={j} sx={{ display: "flex", flexDirection: "row", gap: 1, alignItems: "flex-start", mb: 1.25 }}>
                        <Typography sx={{ color: "primary.main", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.5, flexShrink: 0 }}>&#8250;</Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>{h}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {exp.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ fontFamily: "monospace", fontSize: "0.75rem", bgcolor: "background.paper", border: "1px solid", borderColor: "divider", color: "text.secondary" }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Stack>
          ))}
        </Stack>

        <Divider sx={{ mt: 2, mb: 5 }} />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.5 }}>Want the full picture?</Typography>
          <Button
            href="/resume.pdf"
            download
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            sx={{ px: 4, py: 1.5, fontWeight: 700, boxShadow: "0 4px 20px rgba(124,58,237,0.3)", "&:hover": { transform: "translateY(-2px)" }, transition: "all 0.2s" }}
          >
            Download Full CV
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
