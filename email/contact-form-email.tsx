import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

type ContactFormEmailProps = {
  message: string
  email: string
}

/** Styled inline — email clients cannot be trusted with a stylesheet. */
const styles = {
  body: {
    backgroundColor: "#f7f4ed",
    fontFamily: "Georgia, 'Times New Roman', serif",
    color: "#4a443a",
    margin: 0,
    padding: "32px 0",
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid rgba(25,23,19,0.16)",
    padding: "32px 36px",
  },
  label: {
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    fontSize: "11px",
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "#bf3b21",
    margin: 0,
  },
  heading: {
    fontSize: "22px",
    lineHeight: 1.2,
    color: "#191713",
    margin: "12px 0 0",
    fontWeight: 500,
  },
  message: {
    fontSize: "16px",
    lineHeight: 1.65,
    color: "#191713",
    whiteSpace: "pre-wrap" as const,
    margin: "24px 0 0",
  },
  rule: { borderColor: "rgba(25,23,19,0.13)", margin: "28px 0" },
  meta: {
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    fontSize: "12px",
    color: "#7c7466",
    margin: 0,
  },
}

export default function ContactFormEmail({ message, email }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio ({email})</Preview>
      <Body style={styles.body}>
        <Container>
          <Section style={styles.card}>
            <Text style={styles.label}>Portfolio · contact form</Text>
            <Heading style={styles.heading}>You have a new message</Heading>
            <Text style={styles.message}>{message}</Text>
            <Hr style={styles.rule} />
            <Text style={styles.meta}>Reply to: {email}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
