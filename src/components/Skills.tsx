import { Box, Card, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/material"

const skillSections = [
  { icon: "??", title: "Backend Technologies", items: ["C#", ".NET Core / Standard", "ASP.NET Web API", "MVC", "Web Forms", "WinForms", "REST / gRPC"] },
  { icon: "???", title: "Frontend Technologies", items: ["Angular (v16)", "TypeScript / JavaScript", "jQuery", "AngularJS", "KnockoutJS", "HTML / CSS"] },
  { icon: "???", title: "Databases", items: ["SQL Server (T-SQL)", "Stored Procedures", "Oracle", "PostgreSQL", "MongoDB", "Redis"] },
  { icon: "??", title: "Data Access", items: ["Entity Framework Core", "ADO.NET", "LINQ", "T-SQL"] },
  { icon: "??", title: "Cloud & DevOps", items: ["Azure", "Docker", "RabbitMQ", "Kafka", "Azure Service Bus", "CI/CD", "Azure DevOps", "Git"] },
  { icon: "???", title: "Software Design", items: ["SOLID Principles", "OOP", "Design Patterns", "Domain-Driven Design", "TDD", "Microservices"] },
  { icon: "??", title: "Methodologies", items: ["Agile (Scrum / Kanban)", "Waterfall", "SDLC", "Mentorship", "Code Reviews", "Technical Documentation"] },
]

export default function Skills() {
  return (
    <Box
      id="skills"
      component="section"
      sx={{ py: { xs: 9, md: 12 }, bgcolor: "background.paper", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "divider" }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "primary.main", mb: 1.5 }}>
            What I work with
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" }, color: "text.primary", mb: 2 }}>
            Technical Stack
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 560, mx: "auto" }}>
            A decade and a half of hands-on expertise across the full software development lifecycle.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {skillSections.map((section) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={section.title}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  transition: "all 0.25s ease",
                  "&:hover": { borderColor: "primary.main", boxShadow: "0 8px 32px rgba(124,58,237,0.08)", transform: "translateY(-3px)" },
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2.5 }}>
                    <Typography sx={{ fontSize: "1.4rem", lineHeight: 1 }} aria-hidden="true">
                      {section.icon}
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 600, color: "text.primary" }}>
                      {section.title}
                    </Typography>
                  </Stack>
                  <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                    {section.items.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          bgcolor: "rgba(124,58,237,0.08)",
                          color: "primary.main",
                          border: "1px solid rgba(124,58,237,0.18)",
                          fontSize: "0.78rem",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
