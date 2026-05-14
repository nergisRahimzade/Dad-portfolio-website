import { Box, Card, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/material"
import CodeIcon from "@mui/icons-material/Code"
import WebIcon from "@mui/icons-material/Web"
import StorageIcon from "@mui/icons-material/Storage"
import DataObjectIcon from "@mui/icons-material/DataObject"
import CloudIcon from "@mui/icons-material/Cloud"
import AccountTreeIcon from "@mui/icons-material/AccountTree"
import GroupsIcon from "@mui/icons-material/Groups"
import type { SvgIconComponent } from "@mui/icons-material"

const skillSections: { Icon: SvgIconComponent; title: string; items: string[] }[] = [
  { Icon: CodeIcon, title: "Backend Technologies", items: ["C#", ".NET Core / Standard", "ASP.NET Web API", "MVC", "Web Forms", "WinForms", "REST / gRPC"] },
  { Icon: WebIcon, title: "Frontend Technologies", items: ["Angular (v16)", "TypeScript / JavaScript", "jQuery", "AngularJS", "KnockoutJS", "HTML / CSS"] },
  { Icon: StorageIcon, title: "Databases", items: ["SQL Server (T-SQL)", "Stored Procedures", "Oracle", "PostgreSQL", "MongoDB", "Redis"] },
  { Icon: DataObjectIcon, title: "Data Access", items: ["Entity Framework Core", "ADO.NET", "LINQ", "T-SQL"] },
  { Icon: CloudIcon, title: "Cloud & DevOps", items: ["Azure", "Docker", "RabbitMQ", "Kafka", "Azure Service Bus", "CI/CD", "Azure DevOps", "Git"] },
  { Icon: AccountTreeIcon, title: "Software Design", items: ["SOLID Principles", "OOP", "Design Patterns", "Domain-Driven Design", "TDD", "Microservices"] },
  { Icon: GroupsIcon, title: "Methodologies", items: ["Agile (Scrum / Kanban)", "Waterfall", "SDLC", "Mentorship", "Code Reviews", "Technical Documentation"] },
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
                  "&:hover": { borderColor: "primary.main", boxShadow: "0 8px 32px rgba(56,189,248,0.12)", transform: "translateY(-3px)" },
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2.5 }}>
                    <Box sx={{ color: "primary.main", display: "flex", alignItems: "center" }}>
                      <section.Icon fontSize="small" />
                    </Box>
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
                          bgcolor: "rgba(56,189,248,0.08)",
                          color: "primary.main",
                          border: "1px solid rgba(56,189,248,0.18)",
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
