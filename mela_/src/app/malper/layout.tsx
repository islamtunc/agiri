// Bismillahirrahmanirahim 
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// SuphanAllah ul Azim ve bihamdihi 
// Allah u Ekber velillahilhamd
//La ilahe illallah 
"use client";
import { Alert, Row, Col } from "react-bootstrap";
import Mmmnavbar from "./components/mmnav";

import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/mmbingeh";
import { Phone, MessageCircle } from "lucide-react"; // Telefon ve WhatsApp ikonları için lucide-react kullanımı

import Mmmpage from "./mmxwarin/page";
import ContactForm from "./components/mmfrm";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Mmmnavbar />
      {children}

      <Row>
        <Col style={{ margin: "0 auto", maxWidth: "600px" }}>
          <ContactForm />
        </Col>
      </Row>

      <Row>
        <Col>
          <Alert
            variant="info"
            style={{
              backgroundColor: "#17a2b8",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Ehliyet Sınıfları
          </Alert>
        </Col>
        <Col>
          <Alert
            variant="warning"
            style={{
              backgroundColor: "#ffc107",
              color: "black",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Direksiyon Eğitimi
          </Alert>
        </Col>
        <Col>
          <Alert
            variant="success"
            style={{
              backgroundColor: "#28a745",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Teorik Sınav Bilgileri
          </Alert>
        </Col>
        <Col>
          <Alert
            variant="danger"
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Sınav Stresiyle Baş Etme
          </Alert>
        </Col>
      </Row>

      <Row>
        <Col>
          <Alert
            variant="primary"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Sınav Tarihleri ve Takvim
          </Alert>
        </Col>
        <Col>
          <Alert
            variant="secondary"
            style={{
              backgroundColor: "#6c757d",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Yaş ve Belge Şartları
          </Alert>
        </Col>
        <Col>
          <Alert
            variant="dark"
            style={{
              backgroundColor: "#343a40",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Ehliyet Yenileme
          </Alert>
        </Col>
      </Row>

      <Row>
        <Col>
          <Alert
            variant="light"
            style={{
              backgroundColor: "#f8f9fa",
              color: "black",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Sınav Hazırlık Materyalleri
          </Alert>
        </Col>
        <Col>
          <Alert
            variant="dark"
            style={{
              backgroundColor: "#343a40",
              color: "white",
              fontSize: "0.9rem",
              padding: "10px",
            }}
          >
            Trafik Kuralları
          </Alert>
        </Col>
      </Row>

      <Footer />

      {/* Sabit Telefon İkonu */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={() => window.location.href = "tel:+905322545731"}
      >
        <Phone size={24} color="white" />
      </div>

      {/* Sabit WhatsApp İkonu */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25d366",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={() => window.open("https://wa.me/905322545731", "_blank")}
      >
        <MessageCircle size={24} color="white" />
      </div>
    </div>
  );
}
