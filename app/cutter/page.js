import Image from "next/image"; 
import { Button, Text, Container, Title, Stack, Card, Slider } from "@mantine/core"; // Import Mantine components
import styles from "../page.module.css";
import "../globals.css"

export default function Cutter() {
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
            Audio Cutter
          </Text>
          <Text align="center" className="large-title-2" size="lg" color="white">
            Free editor to trim and cut any audio file online
          </Text>
          {/* Slider for selecting start time */}
          <Text size="lg" color="white" align="center">Select Start Time</Text>
          <Slider
            defaultValue={[0]} // Initial value, adjust as needed
            min={0}
            max={100} // Change to the actual max duration of audio
            step={1}
            marks={[{ value: 0, label: '0s' }, { value: 100, label: 'Max' }]} // Adjust marks based on audio duration
            style={{ color: 'green' }}
          />

          {/* Slider for selecting end time */}
          <Text size="lg" color="white" align="center">Select End Time</Text>
          <Slider
            defaultValue={[100]} // Initial value, adjust as needed
            min={0}
            max={100} // Change to the actual max duration of audio
            step={1}
            marks={[{ value: 0, label: '0s' }, { value: 100, label: 'Max' }]} // Adjust marks based on audio duration
            style={{ color: 'green' }}
          />

          <br/> <br/><br/> <br/>
          <Button variant="outline" className="custom-button" component="label" style={{ marginTop: '20px'}} color="orange">
            Browse My File
            <input type="file" style={{ display: "none" }} />
          </Button>
          <br/> <br/><br/> <br/>

          <Text align="center" size="md" className="large-title-1" color="white">
            How to cut audio
          </Text>

          <Text align="center" className="large-title-2" size="md" color="white">
            This app can be used to trim and/or cut audio tracks, remove an audio fragments. Fade in and fade out your music easily to make the audio harmoniously.
          </Text>
          <Text align="center" size="md" className="large-title-2" color="white">
            It fast and easy to use. You can save the audio file in any format (codec parameters are configured)
          </Text>
          <Text align="center" size="md" className="large-title-2" color="white">
            It works directly in the browser, no needs to install any software, is available for mobile devices.
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
