
// Bismillahirrahmanirrahim
// Elhamdülillahirabbulalemin 
// Esselatu vesselamu ala rasulina Muhammed'in ve ala alihi ve sahbihi ecmain 
//La ilahe illallah 

"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Mmmnavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/malper">BARIŞ SÜRÜCÜ KURSU</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper">Anasayfa</Nav.Link>
            <Nav.Link href="/malper/mmavahi">Ehliyet Sınıfları</Nav.Link>

            <Nav.Link href="/malper/mmkargeh">Direksiyon Eğitimi</Nav.Link>

            <Nav.Link href="/malper/mmhewcedari">Sınav Hazırlığı</Nav.Link>

            <Nav.Link href="/malper/mmwesayit">Kayıt ve Evraklar</Nav.Link>

            <Nav.Link href="/malper/mmkedkar">Sık Sorulan Sorular</Nav.Link>

            <Nav.Link href="/malper/mmkinc">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;
