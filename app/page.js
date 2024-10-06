import Image from "next/image";
import { Button, Text, Container, Title, Stack, Card } from "@mantine/core"; // Import Mantine components
import styles from "./page.module.css";
import "./globals.css"

export default function Home() {
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
            Vocal Remover and Isolation
          </Text>
          <Text align="center" className="large-title-2" size="lg" color="white"> {/* Increased size to "lg" */}
            Separate voice from music out of a song free with powerful AI algorithms.
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
          Remove vocals from a song
          </Text>

          <Text align="center" className="large-title-2" size="md" color="white">
            This free online application will help remove vocals from a song by creating karaoke.
          </Text>
          <Text align="center" size="md" className="large-title-2" color="white">
            Once you choose a song, artificial intelligence will separate the vocals from the instrumental ones. You will get two tracks - a karaoke version of your song (no vocals) and acapella version (isolated vocals).
          </Text>
          <Text align="center" size="md" className="large-title-2" color="white">
            Despite the complexity and high cost of service, you can use it absolutely free. Processing usually takes about 10 seconds.
          </Text>
        </Card>
      </Stack>
    </Container>
  );
}
