import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, Paper } from '@mui/material';
import '../styles/ProfessionalSummary.css'; // Import the custom ProfessionalSummary styles

const ProfessionalSummaryContainer = styled(Container)(({ theme }) => ({
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
}));

const SectionContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

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

const ProfessionalSummary = () => {
  return (
    <ProfessionalSummaryContainer>
      <section id="professional-summary" className="professional-summary">
          <AccentPaperTitle>
            <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
              Professional Summary
            </Typography>
          </AccentPaperTitle>
          <SectionContainer>
          <Typography variant="body1" gutterBottom>
            {/* ... Your Professional Summary text here ... */}
          </Typography>
          </SectionContainer>
      </section>
    </ProfessionalSummaryContainer>
  );
};

export default ProfessionalSummary;
