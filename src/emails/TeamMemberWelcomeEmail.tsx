import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Button,
} from '@react-email/components';
import * as React from 'react';

interface TeamMemberWelcomeEmailProps {
  name: string;
  companyName: string;
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '16px',
  maxWidth: '600px',
  boxShadow: '0 4px 12px rgba(21, 125, 200, 0.05)',
};

const logoContainer = {
  padding: '32px 20px 0',
  textAlign: 'center' as const,
};

const logo = {
  color: '#157dc8',
  fontSize: '24px',
  fontWeight: 300,
  margin: '0',
  letterSpacing: '-0.06em',
};

const h1 = {
  color: '#333',
  fontSize: '28px',
  fontWeight: 800,
  margin: '32px 20px 16px',
  textAlign: 'center' as const,
  letterSpacing: '-0.05em',
};

const text = {
  color: '#555',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 20px',
  fontWeight: 400,
};

const highlightBox = {
  backgroundColor: '#f8fafc',
  borderLeft: '4px solid #157dc8',
  margin: '24px 20px',
  padding: '20px',
  borderRadius: '0 8px 8px 0',
};

const tipsBox = {
  backgroundColor: '#fff7ed',
  border: '1px solid #fed7aa',
  margin: '24px 20px',
  padding: '20px',
  borderRadius: '8px',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#157dc8',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 600,
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '0 auto',
  fontFamily: "'Inter', sans-serif",
};

const footer = {
  color: '#666',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '32px 20px 0',
  fontWeight: 400,
};

export const TeamMemberWelcomeEmail = ({ name, companyName }: TeamMemberWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Crafted</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Text style={logo}>Crafted</Text>
        </Section>
        <Heading style={h1}>
          Welcome to Crafted
        </Heading>
        <Text style={text}>
          Hi {name},
        </Text>
        <Text style={text}>
          Great news! Your company <strong>{companyName}</strong> has set you up with access to our AI-powered LinkedIn content creation agent.
        </Text>
        
        <Section style={highlightBox}>
          <Heading style={{ color: '#333', fontSize: '18px', fontWeight: 600, margin: '0 0 16px 0' }}>
            How to Get Started:
          </Heading>
          <Heading style={{ color: '#157dc8', fontSize: '16px', fontWeight: 600, margin: '0 0 8px 0' }}>
            Text Our WhatsApp Agent
          </Heading>
          <Text style={{ color: '#555', fontSize: '16px', lineHeight: '26px', margin: '0 0 16px 0' }}>
            WhatsApp Number: <a href="https://wa.me/351960482999" style={{ color: '#157dc8', textDecoration: 'none', fontWeight: 600 }}>+351960482999</a>
          </Text>
        </Section>
        
        <Section style={{ margin: '24px 20px' }}>
          <Heading style={{ color: '#333', fontSize: '18px', fontWeight: 600, margin: '0 0 16px 0' }}>
            How it works:
          </Heading>
          <Text style={{ color: '#555', fontSize: '16px', lineHeight: '26px', margin: '0', paddingLeft: '20px' }}>
            1. Send a voice message or text describing your LinkedIn post idea<br />
            2. Our AI agent will create professional, engaging content for you<br />
            3. Review, edit if needed, and post to LinkedIn
          </Text>
        </Section>
        
        <Section style={tipsBox}>
          <Heading style={{ color: '#333', fontSize: '16px', fontWeight: 600, margin: '0 0 12px 0' }}>
            💡 Tips for Best Results:
          </Heading>
          <Text style={{ color: '#555', fontSize: '14px', lineHeight: '24px', margin: '0', paddingLeft: '20px' }}>
            • Be specific about your post topic or message<br />
            • Mention your target audience if relevant<br />
            • Include any key points you want to highlight<br />
            • Feel free to ask for different tones (professional, casual, thought-provoking, etc.)
          </Text>
          <Text style={{ color: '#555', fontSize: '14px', lineHeight: '24px', margin: '12px 0 0 0', fontStyle: 'italic' }}>
            Example: "Hi! I want to write a post about the importance of team collaboration in remote work. Make it engaging and include a question to encourage comments."
          </Text>
        </Section>
        
        <Text style={text}>
          If you have any questions or need help getting started, don't hesitate to reach out!
        </Text>
        
        <Text style={footer}>
          Have a great day,<br />
          The Crafted Team
        </Text>
      </Container>
    </Body>
  </Html>
);

export default TeamMemberWelcomeEmail;
