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
          Splitter AI
          </Text>
          <Text align="center" className="large-title-2" size="lg" color="white"> {/* Increased size to "lg" */}
          Split music into separated parts with AI-Powered algorithms.
          </Text>
          
          <Image
            src="/assets/images/player_1.png" // Path to your image
            alt="Description of image"
            width={500} // Adjust the width as needed
            height={200} // Adjust the height as needed
            style={{ borderRadius: '8px' }} // Optional styling
          />
          <br/> <br/><br/> <br/>
          <Button variant="outline" className="custom-button" component="label" style={{ marginTop: '20px'}} color="orange">
            Browse My File
            <input type="file" style={{ display: "none" }} />
          </Button>
          <br/> <br/><br/> <br/>

          <Text align="center" size="md" className="large-title-1" color="white">
          AI-Powered Music Separator
          </Text>

          
          <Text align="center" size="md" className="large-title-2" color="white">
          This app allows to separate music into an individual streams such as vocal, bass, percussion, and lets you rebalance their individual volumes. This is the simplest way to get multitracks from any song.
          </Text>
          <Text align="center" size="md" className="large-title-2" color="white">
          Once you choose a song, artificial intelligence will separate music into stems: vocals, bass, drums, others. Processing usually takes about 1 minute.
          </Text>
        </Card>
      </Stack>
    </Container>
  );
}
