import Image from "next/image";
import { Button, Text, Container, Title, Stack, Card } from "@mantine/core"; // Import Mantine components
import styles from "../page.module.css";
import "../globals.css"

export default function support() {
  return (
    <Container className={styles.page}>
      <Stack spacing="xl" align="center">
        <Card shadow="sm" padding="xl" radius="md" style={{ width: '100%', maxWidth: '600px' }}>
         
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>
          <br/> <br/><br/> <br/><br/> <br/>

     

          <Text size="xl" className="large-title-1" weight={700} color="orange" align="center">
          Support
          </Text>
          <Text align="center" className="large-title-2" size="lg" color="white"> {/* Increased size to "lg" */}
          Sing & record, tune voice and save complete song. Choose karaoke track you want to sing with
          </Text>
          
         
         
          <br/> <br/><br/> <br/>

          
        </Card>
      </Stack>
    </Container>
  );
}
