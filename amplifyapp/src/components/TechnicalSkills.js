import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const AccentPaperTitle = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient(to bottom, #1e90ff, #00bfff)', // Use bold blue gradient as accent
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
    borderRadius: '30px', // Make the paper oval shaped
    border: '5px solid transparent', // Start with a transparent border
    backgroundClip: 'padding-box', // Apply the gradient only to the padding box (not the border)
    '&:hover': {
      border: '5px solid #1e90ff', // Show the gradient border on hover
    },
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Add the oval shadow
  }));

const TechnicalSkillsContainer = styled('div')({
  padding: '40px',
  maxWidth: '1200px',
  margin: '0 auto',
});

const SkillSection = styled('div')({
  marginBottom: '40px',
  borderBottom: '1px solid #ccc',
  paddingBottom: '20px',
});

const SkillHeader = styled(Typography)({
  fontWeight: 'bold',
});

const TechnicalSkills = () => {
  return (
    <section id="technical-skills" className="technical-skills">
      <TechnicalSkillsContainer>
        <AccentPaperTitle>
          <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
            Technical Skills
          </Typography>
        </AccentPaperTitle>
        <SkillSection>
          <SkillHeader variant="h5">Programming Languages:</SkillHeader>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>Python:</strong> Proficient in Python with 4 years of hands-on experience, leveraging its power to create efficient and scalable backend solutions for CRM systems.
              </Typography>
            </Grid>
          </Grid>
        </SkillSection>
        <SkillSection>
          <SkillHeader variant="h5">Data Management and Analysis:</SkillHeader>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>Elasticsearch:</strong> Demonstrated expertise in Elasticsearch, utilizing its capabilities for fine-tuning search functionalities and optimizing data retrieval.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>PySpark:</strong> Adept at working with PySpark for 4 years, processing vast amounts of big data to uncover valuable insights and patterns.
              </Typography>
            </Grid>
          </Grid>
        </SkillSection>
        <SkillSection>
          <SkillHeader variant="h5">API Development:</SkillHeader>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>GraphQL API:</strong> Skilled in designing and implementing GraphQL APIs, enabling flexible and intuitive data interactions for enhanced user experiences.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <strong>FastAPI:</strong> Experienced in developing APIs with FastAPI, improving development speed and overall performance.
              </Typography>
            </Grid>
          </Grid>
        </SkillSection>
        {/* ... Add other skill subsections here ... */}
      </TechnicalSkillsContainer>
    </section>
  );
};

export default TechnicalSkills;
