import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import Semantic from '../semantic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBeXATW1vTUKF2h1CNXzaDrW9TYlbu1RDU',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div style={{ marginTop: '7.5vh' }}>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              zoom={12}
              center={{ lat: props.latitude, lng: props.longitude }}
            />
          </Col>
          <Col md={6} sm={12}>
            <Semantic
              style={{ width: '100%', height: '100%' }}
              url={props.url}
              href={props.href}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// function Map(props) {
//   return (
//     <div className="map-box">
//       <GoogleMap
//         zoom={10}
//         center={{ lat: props.latitude, lng: props.longitude }}
//         mapContainerClassName="map-container"
//         width="50%"
//         height="50%"
//       >
//         Map is not showing
//       </GoogleMap>
//       <Semantic />
//     </div>
//   );
// }
