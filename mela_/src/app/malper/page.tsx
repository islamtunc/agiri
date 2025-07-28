// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber
// La ilahe illallah Muhammedur Resulullah
// SUBHANALLAHI WA BIHAMDIHI SUBHANALLAHIL AZIM
"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import BasicExample from "./components/mmslide";
import { Card } from "react-bootstrap";

function ContainerFluidExample() {
  return (
    <Container fluid>
      <br /> <br />
      <Row>
        <Col xs={12} md={4} className="mb-4">
          <Card
            style={{
              width: "100%",
              height: "100%",
              opacity: 0.95,
              textAlign: "center",
            }}
          >
            <Card.Body>
              <Card.Title>Sürücü Kursumuza Hoş Geldiniz</Card.Title>
              <Card.Text>
                <br />
                Ehliyet sahibi olmak artık çok kolay! Alanında uzman eğitmenlerimiz ve modern araçlarımızla sizi hem teorik hem pratik olarak hazırlıyoruz.
                <br />
                <br />
                Kursumuza katılarak güvenli sürüş becerileri kazanabilir, hayalinizdeki ehliyete kısa sürede ulaşabilirsiniz.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4 d-flex justify-content-center">
          <Image src="/ehliyet.jpg" fluid />
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <Card
            style={{
              width: "100%",
              height: "100%",
              opacity: 0.95,
              color: "black",
              textAlign: "center",
            }}
          >
            <Card.Body>
              <Card.Title>Biz Kimiz?</Card.Title>
              <Card.Text>
                <p>
                  Yılların verdiği deneyimle, binlerce adayın ehliyet sahibi olmasına katkıda bulunduk. Modern sınıflarımız, profesyonel eğitmen kadromuz ve birebir direksiyon derslerimizle başarıyı garantiliyoruz.
                </p>
                <br />
                <p>
                  Kayıt ve eğitim süreci hakkında bilgi almak için bizimle iletişime geçebilirsiniz. Ehliyet almak hiç bu kadar kolay olmamıştı!
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <BasicExample
            nav="Ehliyet Sınıfları"
            nivis="A, A2, B, C ve D sınıfı ehliyetler hakkında detaylı bilgi alın. Hangi sınıf size uygun? Başvuru şartları, yaş kriterleri ve daha fazlası..."
            cih="/siniflar"
            wene="/ehliyet-siniflari.jpg"
          />
        </Col>
        <Col>
          <BasicExample
            nav="Direksiyon Eğitimi"
            nivis="Birebir uygulamalı direksiyon eğitimlerimiz ile trafikte kendinize güvenin. Uzman eğitmenlerle öğrenin, sınavda başarınız garanti olsun!"
            cih="/direksiyon-egitimi"
            wene="/direksiyon.jpg"
          />
        </Col>
        <Col>
          <BasicExample
            nav="Teorik Sınav Desteği"
            nivis="Teorik sınavdan korkmayın! Güncel müfredata uygun ders anlatımı, çıkmış sorular ve deneme testleri ile yanınızdayız."
            cih="/teorik-sinav"
            wene="/teorik.jpg"
          />
        </Col>
      </Row>

      <br />
      <Row>
        <Col>
          <BasicExample
            nav="Kayıt Süreci"
            nivis="Sürücü kursumuza nasıl kayıt olunur? Gerekli belgeler, yaş şartları ve kayıt takvimi hakkında bilgi almak için tıklayın."
            cih="/kayit"
            wene="/kayit.jpg"
          />
        </Col>
        <Col>
          <BasicExample
            nav="Fiyat ve Kampanyalar"
            nivis="Uygun fiyatlarımız ve dönemsel kampanyalarımızla ehliyet sahibi olmak artık çok daha ekonomik! Detaylar için bizi arayın."
            cih="/fiyatlar"
            wene="/fiyat.jpg"
          />
        </Col>
        <Col>
          <BasicExample
            nav="Sık Sorulan Sorular"
            nivis="Ehliyet almak isteyen adayların en çok merak ettiği soruları burada derledik. Kafanızdaki tüm soruların cevabı burada!"
            cih="/sss"
            wene="/sss.jpg"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;
