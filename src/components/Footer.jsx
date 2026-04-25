import { COLORS } from "../constants/colors";
import Logo from "./Logo";

const Footer = ({ navigate }) => (
  <footer
    style={{
      background: COLORS.darkNav,
      color: "#fff",
      padding: "40px 5% 20px",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 24,
        marginBottom: 32,
      }}
    >
      <div style={{ maxWidth: 400 }}>
        <Logo navigate={navigate} />
        <p
          style={{
            marginTop: 16,
            fontSize: 14,
            color: "#9CA3AF",
            lineHeight: 1.7,
          }}
        >
          Building innovative digital solutions for a better tomorrow. Your
          trusted partner in web, mobile, and AI development.
        </p>
      </div>
      <div>
        <p
          style={{
            fontWeight: 700,
            marginBottom: 12,
            fontFamily: "'Exo 2', sans-serif",
          }}
        >
          Contact
        </p>
        <p style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 6 }}>
          lhosanglama555@gmail.com
        </p>
        <p style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 6 }}>
          +977 9829552379
        </p>
        <p style={{ fontSize: 13, color: "#9CA3AF" }}>Bhaktapur, Kathmandu</p>
      </div>
    </div>
    <div
      style={{
        borderTop: "1px solid #1F2937",
        paddingTop: 16,
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 13, color: "#6B7280" }}>
        2026@DevBros Tech. All rights reserved
      </p>
    </div>
  </footer>
);

export default Footer;
