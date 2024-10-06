// app/layout.js
import Sidebar from '../components/Sidebar';
import './globals.css'; // Your global styles
import { MantineProvider } from '@mantine/core'; // Mantine Provider

export const metadata = {
  title: 'Vocal Remover',
  description: 'Description of your app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
        <MantineProvider withGlobalStyles withNormalizeCSS>
        <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>{children}</div>
      </div>
        </MantineProvider>
        
        </div>
      </body>
    </html>
  );
}
