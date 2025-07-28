// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber ve lillahi'l-hamd
import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"; // Sosyal medya ikonları için lucide-react kullanımı

const Footer = () => (
  <footer style={{ background: "#343a40", color: "white", padding: "20px 0" }}>
    <div className="container text-center text-md-left">
      <div className="row">
        {/* Sol Bölüm */}
        <div className="col-md-4 mt-md-0 mt-3">
          <h5 className="text-uppercase font-weight-bold">Hakkımızda</h5>
          <p>
          Ehliyet almak isteyen bireylerin yanında olan kurumsal bir sürücü kursuyuz. Uzman eğitmen kadromuzla,
          teorik ve direksiyon eğitimlerini profesyonel bir şekilde sunuyor; adaylarımızın güvenli ve bilinçli sürücüler olarak yetişmelerini sağlıyoruz.
          MEB onaylı eğitim programlarımızla ehliyet sürecinizde size rehberlik ediyoruz.
          </p>
        </div>

        {/* Orta Bölüm */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">İletişim</h5>
          <ul className="list-unstyled">
            <li></li>
            <li></li>
            <li></li>

<br></br>
<br></br>
<br></br>

            <a href="/login" style={{ color: "white" }}>
              <li>Kurumsal</li>
            </a>

          </ul>
        </div>

        {/* Sağ Bölüm */}
        <div className="col-md-4 mb-md-0 mb-3 text-center">
          <h5 className="text-uppercase font-weight-bold">Bizi Takip Edin</h5>
          <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <Facebook size={24} />
            </a>
            <a href="https://x.com/RojdaMusa" style={{ color: "white" }}>
              <Twitter size={24} />
            </a>
            <a href="https://www.instagram.com/p/DJ1vTH_ohLh/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <Instagram size={24} />
            </a>
            <a href="mailto:dytrojdamusaa@gmail.com" style={{ color: "white" }}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Alt Bölüm */}
    <div className="text-center py-3" style={{ borderTop: "1px solid #495057", marginTop: "20px" }}>
      powered by © <a href="https://yekazad.vercel.app">Yekazad Software Center</a> . Tüm hakları saklıdır.
    </div>
  </footer>
);

export default Footer;
