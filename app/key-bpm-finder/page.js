import Image from "next/image";
import { Button, Text, Container, Title, Stack, Card } from "@mantine/core"; // Import Mantine components
import styles from "../page.module.css";
import "../globals.css"

export default function cutter() {
  return (
    <Container className={styles.page}>
      <Stack spacing="xl" align="center">
        <Card shadow="sm" padding="xl" radius="md" style={{ width: '100%', maxWidth: '600px' }}>
          <br/> <br/><br/> <br/><br/> <br/> <br/> <br/><br/> <br/><br/> <br/> <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
     
        <Title order={1} className="large-title" color="white" align="center">How it works</Title>

          <Text size="xl" className="large-title-1" weight={700} color="orange" align="center">
          Song Key and BPM Finder
          </Text>
          <Text align="center" className="large-title-2" size="lg" color="white"> {/* Increased size to "lg" */}
          Analyzes music and finds Key, Scale and BPM for any song
          </Text>
          
          
          <br/> <br/><br/> <br/>
          <Button variant="outline" className="custom-button" component="label" style={{ marginTop: '20px'}} color="orange">
            Browse My File
            <input type="file" style={{ display: "none" }} />
          </Button>
          <br/> <br/><br/> <br/>

          <Text align="center" size="md" className="large-title-1" color="white">
          How to find Key & BPM
          </Text>

          <Text align="center" className="large-title-2" size="md" color="white">
          This app analyzes music and estimates pitch and tempo [e.g. A♭ major, 120 bpm]. You can upload multiple files at once. Processing time takes a few seconds.
          </Text>

          {/*  */}
          <Text align="center" size="md" className="large-title-1" color="white">
          Change Key & BPM
          </Text>

          <Text align="center" className="large-title-2" size="md" color="white">
          Using Pitch Shifter tool you can transpose song to a different key and tempo.
          </Text>

          {/*  */}

          <Text align="center" size="md" className="large-title-1" color="white">
          Tap tempo
          </Text>

          <Text align="center" className="large-title-2" size="md" color="white">
          Tap tempo tool allows you to calculate tempo beats per minute by tapping space key to the rhythm or beat.
          </Text>    

          {/*  */}

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
