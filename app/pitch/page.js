import Image from "next/image";
import { Button, Text, Container, Title, Stack, Card } from "@mantine/core"; // Import Mantine components
import styles from "../page.module.css";
import "../globals.css"

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
     
        <Title order={1} className="large-title" color="white" align="center">How it works</Title>

          <Text size="xl" className="large-title-1" weight={700} color="orange" align="center">
          Audio Speed and Pitch Changer
          </Text>
          <Text align="center" className="large-title-2" size="lg" color="white"> {/* Increased size to "lg" */}
          Changes pitch and tempo of the song by adjusting musical key and bpm sliders
          </Text>
          
          
          <br/> <br/><br/> <br/>
          <Button variant="outline" className="custom-button" component="label" style={{ marginTop: '20px'}} color="orange">
            Browse My File
            <input type="file" style={{ display: "none" }} />
          </Button>
          <br/> <br/><br/> <br/>

          <Text align="center" size="md" className="large-title-1" color="white">
          Free Online Pitch Shifter
          </Text>

          <Text align="center" className="large-title-2" size="md" color="white">
          This app changes the song pitch and/or playback speed using one of the best pitch shifting algorithms. The musical key, scale, and bpm will be automatically detected.
          </Text>
          <Text align="center" size="md" className="large-title-2" color="white">
          You can easily transpose music to a different key and change the tempo by adjusting the pitch shifter key and bpm sliders.
          </Text>

          <Text align="center" size="md" className="large-title-1" color="white">
          Features
          </Text>

          <Text align="center" size="md" className="large-title-2" color="white">
          1. Analyzes music and finds musical key, scale and bpm <br/>
          2. Changes audio pitch <br/>
          3. Speed up or slow down music playback speed
          </Text>

          <Text align="center" size="md" className="large-title-1" color="white">
          Privacy and Security Guaranteed
          </Text>

          <Text align="center" size="md" className="large-title-2" color="white">
          This is serverless app. Your files does not leave your device
          </Text>
          
        </Card>
      </Stack>
    </Container>
  );
}
