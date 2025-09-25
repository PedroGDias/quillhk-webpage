import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface GuideEmailProps {
  name?: string;
}

export const GuideEmail = ({ name }: GuideEmailProps) => (
  <Html>
    <Head />
    <Preview>Your LinkedIn Essentials one-pager</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Text style={logo}>Crafted</Text>
        </Section>
        <Heading style={h1}>
          Your LinkedIn Essentials one-pager
        </Heading>
        <Text style={text}>
          {name ? `Hi ${name},` : 'Hi there,'}
        </Text>
        <Text style={text}>
          Thanks for joining our waitlist!
        </Text>
        <Text style={text}>
          As promised, here's your copy of our LinkedIn Essentials one-pager - the same core teachings our clients are using to get results on LinkedIn.
        </Text>
        <Text style={text}>
          Ready to put these principles into action? Book a free strategy call 
          to see how Crafted can help you implement these strategies with our 
          AI-powered content system and 1:1 mentoring.
        </Text>
        <Section style={buttonContainer}>
          <Button style={secondaryButton} href="https://calendly.com/underdogfounders/30min">
            Book a Free Strategy Call
          </Button>
        </Section>
        <Text style={footer}>
          Best regards,<br />
          The Crafted Team
        </Text>
      </Container>
    </Body>
  </Html>
);

export default GuideEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '16px',
  maxWidth: '600px',
};

const logoContainer = {
  padding: '32px 20px 0',
  textAlign: 'center' as const,
};

const logo = {
  color: '#1d4ed8',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '700',
  margin: '32px 20px 16px',
  textAlign: 'center' as const,
};

const text = {
  color: '#555',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 20px',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#1d4ed8',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '0 auto',
};

const secondaryButton = {
  backgroundColor: 'transparent',
  border: '2px solid #1d4ed8',
  borderRadius: '8px',
  color: '#1d4ed8',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '10px 22px',
  margin: '0 auto',
};

const footer = {
  color: '#666',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '32px 20px 0',
};