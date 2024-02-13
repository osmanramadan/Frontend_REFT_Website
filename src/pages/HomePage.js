import React from 'react';
import { Container } from 'react-bootstrap';

function HomePage() {
  const svgString =
    '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9995 0C10.7451 0 0 10.7451 0 23.9995C0 35.2543 7.74897 44.6986 18.2022 47.2925V31.3338H13.2535V23.9995H18.2022V20.8393C18.2022 12.6708 21.8991 8.88462 29.9188 8.88462C31.4394 8.88462 34.063 9.18318 35.1363 9.48077V16.1286C34.5699 16.0691 33.5859 16.0394 32.3638 16.0394C28.4289 16.0394 26.9083 17.5302 26.9083 21.4057V23.9995H34.7475L33.4006 31.3338H26.9083V47.8234C38.7919 46.3882 48 36.27 48 23.9995C47.999 10.7451 37.254 0 23.9995 0Z" fill="blue"/></svg>';

  return (
    <div>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: svgString }} />
        HomePage HomePage HomePage HomePage HomePage HomePage HomePage HomePage
      </Container>
    </div>
  );
}

export default HomePage;
