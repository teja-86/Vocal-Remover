import Image from "next/image";
import { Button, Text, Container, Title, Stack, Card } from "@mantine/core"; // Import Mantine components
import styles from "../page.module.css";
import "../globals.css"
import RecordButton from "@/components/RecordButton";

export default function cutter() {
  return (
    <Container className={styles.page}>
      <Stack spacing="xl" align="center">
        <Card shadow="sm" padding="xl" radius="md" style={{ width: '100%', maxWidth: '600px' }}>
          
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
     
        <Title order={1} className="large-title" color="white" align="center">How it works</Title>

          <Text size="xl" className="large-title-1" weight={700} color="orange" align="center">
          Voice Recorder
          </Text>

          {/*  */}
          <RecordButton/>
          {/*  */}

          <Text align="center" className="large-title-2" size="lg" color="white"> {/* Increased size to "lg" */}
           press button to start recording

          </Text>

          {/*  */}

          {/*  */}
          
         
          
          <br/> <br/><br/> <br/>

          <Text align="center" size="md" className="large-title-1" color="white">
          Audio Recorder & Editor
          </Text>

          <Text align="center" className="large-title-2" size="md" color="white">
          This is a free online audio recorder app which records sound from microphone. It is available for mobile devices.
          </Text>

          <Text align="center" size="md" className="large-title-1" color="white">
          Stereo
          </Text>

          <Text align="center" className="large-title-2" size="md" color="white">
          Stereo microphone gives a real stereo. Mono microphones can give mono or pseudo-stereo.
          </Text>

          <Text align="center" size="md" className="large-title-1" color="white">
          Sound Effects & Editor
          </Text>

          <Text align="center" className="large-title-2" size="md" color="white">
          After recording is done you can edit audio track - trim any fragment, adjust equalizer and sound reverb
          </Text>

          <Text align="center" size="md" className="large-title-1" color="white">
          Privacy and Security Guaranteed
          </Text>

          <Text align="center" className="large-title-2" size="md" color="white">
          This is serverless app. Your files does not leave your device
          </Text>
          
        </Card>
      </Stack>
    </Container>
  );
}
