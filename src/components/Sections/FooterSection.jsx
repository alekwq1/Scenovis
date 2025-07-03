import React from "react";

// Social media links
const YT_URL = "https://www.youtube.com/@AlekscanUE";
const LN_URL = "https://www.linkedin.com/in/aleks-malyshka/";

const iconStyle = {
  width: 34,
  height: 34,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  background: "rgba(0,230,255,0.07)",
  boxShadow: "0 2px 18px #00e6ff18",
  transition: "box-shadow .21s, background .21s, filter .19s",
  margin: "0 8px",
  border: "1.3px solid #00e6ff22",
  cursor: "pointer",
};

const iconHoverStyle = {
  boxShadow: "0 0 32px #00e6ff90",
  background: "#00e6ff22",
  filter: "brightness(1.3)",
  border: "1.6px solid #00e6ff88",
};

// Przekaż: lang, t={translations[lang]}
const FooterSection = ({ lang, t }) => {
  const [hovered, setHovered] = React.useState("");

  // Domyślne tłumaczenia dla linków i stopki
  const links = [
    { href: "#", label: t.footerBlog || "Blog" },
    { href: "#about", label: t.footerAbout || "About" },
    { href: "#services", label: t.footerServices || "Services" },
    { href: "#resources", label: t.footerCases || "Case Studies" },

    { href: "#contact", label: t.footerContact || "Contact" },
  ];
  const copyright =
    t.footerCopy ||
    "© 2023 Scenovis Digital Solutions. All rights reserved. Transforming industries through digital twin technology.";

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2.5rem 0 1.2rem 0",
        background: "rgba(5, 14, 23, 0.96)",
        borderTop: "1px solid rgba(0, 230, 255, 0.1)",
        fontSize: "1.03rem",
        color: "rgba(255,255,255,0.80)",
      }}
    >
      {/* Socials */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.7rem",
          marginBottom: "1.1rem",
          alignItems: "center",
        }}
      >
        {/* YouTube */}
        <a
          href={YT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          style={{
            ...iconStyle,
            ...(hovered === "yt" ? iconHoverStyle : {}),
          }}
          onMouseEnter={() => setHovered("yt")}
          onMouseLeave={() => setHovered("")}
        >
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
            <path
              d="M21.82 7.27a2.82 2.82 0 0 0-1.98-2c-1.75-.47-8.8-.47-8.8-.47s-7.05 0-8.8.47a2.82 2.82 0 0 0-1.98 2A29.37 29.37 0 0 0 0 12c.06 1.58.24 3.15.54 4.73a2.82 2.82 0 0 0 1.98 2c1.75.47 8.8.47 8.8.47s7.05 0 8.8-.47a2.82 2.82 0 0 0 1.98-2A29.37 29.37 0 0 0 24 12c-.06-1.58-.24-3.15-.54-4.73ZM9.54 15.15V8.85L15.81 12l-6.27 3.15Z"
              fill="#00e6ff"
            />
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href={LN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{
            ...iconStyle,
            ...(hovered === "ln" ? iconHoverStyle : {}),
          }}
          onMouseEnter={() => setHovered("ln")}
          onMouseLeave={() => setHovered("")}
        >
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              stroke="#00e6ff"
              strokeWidth="1.8"
              fill="none"
            />
            <path
              d="M7 8.8c.85 0 1.55-.7 1.55-1.55 0-.86-.7-1.56-1.55-1.56S5.45 6.4 5.45 7.25c0 .85.7 1.55 1.55 1.55ZM8.28 10.28h-2.56v6.17h2.56v-6.17ZM12.2 13.41c0-.68.54-1.23 1.2-1.23.66 0 1.2.55 1.2 1.23v3.04h2.56v-3.65c0-1.83-1.5-3.3-3.36-3.3-1.06 0-1.99.45-2.61 1.18v-1h-2.55v6.17h2.56v-3.44c0-.18.14-.32.31-.32h.1c.18 0 .32.14.32.32v3.44H12.2v-3.44Z"
              fill="#00e6ff"
            />
          </svg>
        </a>
      </div>
      {/* Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginBottom: "1.3rem",
          flexWrap: "wrap",
        }}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {l.label}
          </a>
        ))}
      </div>
      {/* Copy */}
      <div
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.98rem",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        {copyright}
      </div>
    </footer>
  );
};

export default FooterSection;
