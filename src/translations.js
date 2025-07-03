const translations = {
  pl: {
    // HERO / NAV / FOOTER / SEKCJE
    heroTitle: "Zobacz swoją budowę w nowym świetle",
    heroSub:
      "Interaktywne cyfrowe bliźniaki dla inteligentnego, bezpiecznego i efektywnego budowania.",
    exploreBtn: "Eksploruj projekt",
    contactUs: "Kontakt",
    about3dTitle: "INTERAKTYWNY DIGITAL TWIN 3D",
    resourcesTitle: "Cyfrowe bliźniaki w praktyce",
    resourcesDesc: "Poznaj przykłady, jak digital twin zmienia przemysł:",

    // MINI OPISY VIDEO (pod miniaturami)
    resourcesShort: {
      twinzo: "Przemysłowa platforma digital twin do monitorowania zakładów.",
      omniverse: "Symulacje fabryk i procesów z użyciem Omniverse od NVIDIA.",
      treedis: "Przestrzenie cyfrowe i wizualizacja IoT – Treedis.",
      tandem: "Cyfrowy bliźniak od Autodesk – BIM w praktyce.",
    },

    // CTA SECTION
    ctaTitle: "Gotowy na cyfrową rewolucję?",
    ctaDesc:
      "Porozmawiajmy o tym, jak mogę pomóc wdrożyć cyfrowe bliźniaki w Twojej firmie.",
    ctaButton: "Napisz do mnie",
    ctaPhotoTitle: "Kliknij, aby zobaczyć więcej",
    ctaPhotoAlt: "Aleks ze Scenovis",
    ctaRole: "Lider Digital Twin",

    // CTA MODAL - "My Unique Angle"
    ctaModalTitle: "Moje unikalne spojrzenie",
    ctaModal1: {
      title: "Kim jestem?",
      desc: "Entuzjasta nowych technologii, z pasją do wdrażania cyfrowych rozwiązań, które mają realny wpływ na firmy i ludzi.",
    },
    ctaModal2: {
      title: "Dlaczego warto mi zaufać?",
      desc: "Na co dzień pracuję z największymi zespołami i korporacjami w Polsce i Europie, ale zawsze najważniejsze były dla mnie relacje i konkretne efekty dla użytkowników",
    },
    ctaModal3: {
      title: "Co mnie napędza?",
      desc: "Lubię, gdy technologia naprawdę służy ludziom i biznesowi. Fascynuje mnie, jak Digital Twin usprawnia życie, pracę i bezpieczeństwo — nie tylko jest „fajny”, ale rozwiązuje prawdziwe problemy.",
    },
    ctaModal4: {
      title: "Co zrobię dla Ciebie?",
      desc: "Pomogę wdrożyć cyfrowego bliźniaka w Twojej firmie, uproszczę procesy, pokażę potencjał technologii i przełożę cyfrowe pomysły na wymierne korzyści.",
    },

    // CTA FORMULARZ - MODAL DEMO
    ctaDemoTitle: "Umów się na demo",
    ctaDemoThanks: "Dziękuję! Skontaktujemy się wkrótce.",
    ctaFormName: "Twoje imię:",
    ctaFormNamePh: "Wpisz swoje imię",
    ctaFormEmail: "Twój e-mail:",
    ctaFormEmailPh: "Wpisz swój adres e-mail",
    ctaFormMsg: "Opisz potrzeby:",
    ctaFormMsgPh: "Jak mogę Ci pomóc?",
    ctaSendBtn: "Wyślij zgłoszenie",
    ctaFormNote: "Twoja wiadomość trafi do zespołu Scenovis!",

    // ABOUT 3D (digital twin)
    digitalTwinInfo: {
      id: "twin-intro",
      label: "Cyfrowy Bliźniak",
      desc: `
        <b>Cyfrowy bliźniak to interaktywna wizualizacja obiektu, która umożliwia śledzenie parametrów na żywo, prognozowanie awarii i testowanie scenariuszy.</b>
        <ul style="margin: 8px 0 0 14px; padding: 0; color: #b3fdff; font-size: 15px;">
            <li>Klikaj <span style="font-size:20px;">+</span> na modelu, by zobaczyć szczegóły.</li>
            <li>Obracaj i przybliżaj, by eksplorować każdy element.</li>
            <li>Analizuj statusy, odczyty i historię inspekcji.</li>
        </ul>
        `,
      image: "/digitaltwin_intro.png",
      extra: {},
    },
    hotspots: [
      {
        id: "prod_center",
        label: "Linia produkcyjna",
        desc: "Główna linia montażowa – monitorowanie przebiegu procesu. <br>Status: <b style='color:#ffdf50'>W eksploatacji</b>.",
        image: "/hotspot_center.png",
        extra: {
          status: "W eksploatacji",
          lastInspection: "2025-07-03",
          kpi: "Liczba cykli: 1245",
        },
        position: [-1, 2.5, -3.2],
        camera: { position: [25, 20, 15], target: [-1, 2.5, -3.2] },
      },
      {
        id: "prod_right_top",
        label: "Kontrola jakości",
        desc: "Strefa końcowej kontroli jakości produktów. <br>Status: <b style='color:#00ffba'>Bez uwag</b>.",
        image: "/hotspot_right.png",
        extra: {
          status: "Bez uwag",
          lastInspection: "2025-07-02",
          kpi: "Błędy: 0 / 1000 szt.",
        },
        position: [4.5, 0.7, -2.5],
        camera: { position: [20, 20, 20], target: [4.5, 0.7, -2.5] },
      },
      {
        id: "prod_left",
        label: "Strefa załadunku surowców",
        desc: "Punkt załadunku komponentów do produkcji. <br>Status: <b style='color:#00ffba'>Aktywny</b>.",
        image: "/hotspot_left.png",
        extra: {
          status: "Aktywny",
          lastInspection: "2025-07-03",
          kpi: "Waga surowca: 350 kg",
        },
        position: [10, 4.6, -4],
        camera: { position: [50, 30, 5], target: [10, 4.6, -4] },
      },
    ],
    statusLabel: "Status",
    lastInspectionLabel: "Ostatnia inspekcja",
    parametersLabel: "Parametry",
    statuses: {
      "W eksploatacji": "W eksploatacji",
      "Bez uwag": "Bez uwag",
      Aktywny: "Aktywny",
    },
    // FOOTER NAV
    footerAbout: "O nas",
    footerServices: "Usługi",
    footerCases: "Przykłady",
    footerBlog: "Blog",
    footerContact: "Kontakt",
    footerCopy:
      "© 2023 Scenovis Digital Solutions. Wszelkie prawa zastrzeżone. Transformujemy przemysł dzięki technologii digital twin.",

    // SERVICES SECTION
    servicesSectionTitle: "Usługi Digital Twin & BIM",
    services: [
      {
        title: "Modelowanie 3D na podstawie dokumentacji 2D",
        desc: "Modele 3D na podstawie rysunków DWG/PDF lub skanów chmury punktów.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 18 zł/m²</span>",
        img: "/services/visualization.png",
        link: "/zamow-modelowanie-3d",
        cta: "Zamów model 3D",
      },
      {
        title: "Wizualizacja i spacery 3D (Expo, VR/AR, makiety cyfrowe)",
        desc: "Prezentacje 3D do targów, na stronę lub do metaversum. Interaktywny spacer online lub w VR/AR. Skanowanie istniejących budynków z szybkim dostępem w chmurze.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 25 zł/m²</span>",
        img: "/services/walkthrough.png",
        link: "/zamow-wizualizacje",
        cta: "Zamów wizualizację",
      },
      {
        title: "Facility Management & Lean Digital Twin",
        desc: "Cyfrowy bliźniak istniejącego obiektu z analizą Lean.<br />Monitoring postępów, awarii, alarmów – integracja z Power BI.<br />Wirtualne zarządzanie obiektem, raporty i powiadomienia.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 19 zł/m²</span>",
        img: "/services/fm_dtw.png",
        link: "/zamow-fm-twin",
        cta: "Zamów Digital Twin FM",
      },
      {
        title: "Cyfrowy Bliźniak Budowy + Analiza Power BI",
        desc: "Digital twin inwestycji w trakcie budowy.<br />Analiza postępu prac, integracja z Power BI, analiza kosztów Lean.<br />Interaktywny raport i widok 3D postępu online.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 22 zł/m²</span>",
        img: "/services/construction_twin.png",
        link: "/zamow-twin-budowy",
        cta: "Zamów Digital Twin Budowy",
      },
      {
        title: "Opracowanie standardów EIR, BEP, wdrożenie",
        desc: "Kompleksowe opracowanie i wdrożenie standardów EIR, BEP oraz procesów cyfrowych zgodnych z ISO 19650.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 3 500 zł (projekt)</span>",
        img: "/services/bim_4d5d.png",
        link: "/zamow-bep-eir",
        cta: "Zamów wdrożenie EIR/BEP",
      },
      {
        title: "Szkolenia z modelowania, zarządzania CDE/BIM",
        desc: "Szkolenia online i stacjonarne z modelowania 3D, BIM, zarządzania CDE.<br />Wdrożenie platform do zarządzania dokumentacją. Personalizowane warsztaty dla zespołów.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 950 zł (szkolenie)</span>",
        img: "/services/training.png",
        link: "/zamow-szkolenie",
        cta: "Zamów szkolenie",
      },
      {
        title: "Kosztorysowanie oraz BIM 4D/5D",
        desc: "Przygotowanie kosztorysów na podstawie modeli BIM (4D/5D), analiza kosztów i harmonogramów, integracja z Power BI lub Excel.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 1 900 zł (projekt)</span>",
        img: "/services/costing.png",
        link: "/zamow-bim4d5d",
        cta: "Zamów kosztorysowanie/BIM 4D/5D",
      },
    ],
  },

  en: {
    heroTitle: "See Your Construction Site in a New Light",
    heroSub:
      "Interactive digital twins for smart, safe, and successful building.",
    exploreBtn: "Explore your project",
    contactUs: "Contact Me",
    about3dTitle: "INTERACTIVE DIGITAL TWIN 3D",
    resourcesTitle: "Digital Twins in Action",
    resourcesDesc:
      "Explore these curated examples to see how digital twins are transforming industries:",

    // MINI DESCRIPTIONS VIDEO (under thumbnails)
    resourcesShort: {
      twinzo: "Industrial digital twin platform for plant monitoring.",
      omniverse: "Factory and process simulation with NVIDIA Omniverse.",
      treedis: "Digital spaces & IoT visualization – Treedis.",
      tandem: "Autodesk's digital twin – BIM in action.",
    },

    // CTA SECTION
    ctaTitle: "Ready to Transform Your Business?",
    ctaDesc:
      "Let's discuss how I can help you implement digital twin solutions.",
    ctaButton: "Contact Me",
    ctaPhotoTitle: "Click for Aleks's unique angle",
    ctaPhotoAlt: "Aleks from Scenovis",
    ctaRole: "Digital Twin Leader",

    // CTA MODAL - "My Unique Angle"
    ctaModalTitle: "My Unique Angle",
    ctaModal1: {
      title: "Who am I?",
      desc: "A technology enthusiast passionate about implementing digital solutions that make a real difference for companies and people.",
    },
    ctaModal2: {
      title: "Why trust me?",
      desc: "I work every day with the largest teams and corporations in Poland and Europe, but building relationships and delivering real value to users always comes first.",
    },
    ctaModal3: {
      title: "What drives me?",
      desc: "I love when technology truly serves people and business. I'm fascinated by how Digital Twins improve life, work, and safety — not just 'cool', but solving real problems.",
    },
    ctaModal4: {
      title: "What can I do for you?",
      desc: "I'll help you implement a digital twin in your company, simplify processes, show the potential of the technology, and turn digital ideas into measurable benefits.",
    },

    // CTA FORM - DEMO MODAL
    ctaDemoTitle: "Schedule a Demo",
    ctaDemoThanks: "Thank you! We’ll get back to you soon.",
    ctaFormName: "Your Name:",
    ctaFormNamePh: "Enter your name",
    ctaFormEmail: "Your Email:",
    ctaFormEmailPh: "Enter your email",
    ctaFormMsg: "Describe your needs:",
    ctaFormMsgPh: "How can I help you?",
    ctaSendBtn: "Send Request",
    ctaFormNote: "Your message will go to the Scenovis team!",

    // ABOUT 3D (digital twin)
    digitalTwinInfo: {
      id: "twin-intro",
      label: "Digital Twin",
      desc: `
        <b>The digital twin is an interactive visualization of a facility, enabling live parameter tracking, failure prediction and scenario testing.</b>
        <ul style="margin: 8px 0 0 14px; padding: 0; color: #b3fdff; font-size: 15px;">
            <li>Click <span style="font-size:20px;">+</span> on the model to view details.</li>
            <li>Rotate and zoom to explore each element.</li>
            <li>Analyze statuses, readings, and inspection history.</li>
        </ul>
        `,
      image: "/digitaltwin_intro.png",
      extra: {},
    },
    hotspots: [
      {
        id: "prod_center",
        label: "Production Line",
        desc: "Main assembly line – process monitoring. <br>Status: <b style='color:#ffdf50'>Operational</b>.",
        image: "/hotspot_center.png",
        extra: {
          status: "Operational",
          lastInspection: "2025-07-03",
          kpi: "Cycle count: 1245",
        },
        position: [-1, 2.5, -3.2],
        camera: { position: [25, 20, 15], target: [-1, 2.5, -3.2] },
      },
      {
        id: "prod_right_top",
        label: "Quality Control",
        desc: "Final product quality control area. <br>Status: <b style='color:#00ffba'>No issues</b>.",
        image: "/hotspot_right.png",
        extra: {
          status: "No issues",
          lastInspection: "2025-07-02",
          kpi: "Errors: 0 / 1000 pcs",
        },
        position: [4.5, 0.7, -2.5],
        camera: { position: [20, 20, 20], target: [4.5, 0.7, -2.5] },
      },
      {
        id: "prod_left",
        label: "Raw Material Loading Area",
        desc: "Loading point for production components. <br>Status: <b style='color:#00ffba'>Active</b>.",
        image: "/hotspot_left.png",
        extra: {
          status: "Active",
          lastInspection: "2025-07-03",
          kpi: "Material weight: 350 kg",
        },
        position: [10, 4.6, -4],
        camera: { position: [50, 30, 5], target: [10, 4.6, -4] },
      },
    ],
    statusLabel: "Status",
    lastInspectionLabel: "Last inspection",
    parametersLabel: "Parameters",
    statuses: {
      Operational: "Operational",
      "No issues": "No issues",
      Active: "Active",
    },
    // FOOTER NAV
    footerAbout: "About",
    footerServices: "Services",
    footerCases: "Case Studies",
    footerBlog: "Blog",
    footerContact: "Contact",
    footerCopy:
      "© 2023 Scenovis Digital Solutions. All rights reserved. Transforming industries through digital twin technology.",

    // SERVICES SECTION
    servicesSectionTitle: "Digital Twin & BIM Services",
    services: [
      {
        title: "3D Modeling from 2D Documentation",
        desc: "3D models based on DWG/PDF drawings or point cloud scans.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 18 PLN/m²</span>",
        img: "/services/visualization.png",
        link: "/order-3d-modeling",
        cta: "Order 3D Model",
      },
      {
        title: "Visualization & 3D Tours (Expo, VR/AR, Digital Models)",
        desc: "3D presentations for trade shows, website, or metaverse. Interactive tours online or in VR/AR. Scanning of existing buildings with fast cloud access.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 25 PLN/m²</span>",
        img: "/services/walkthrough.png",
        link: "/order-visualization",
        cta: "Order Visualization",
      },
      {
        title: "Facility Management & Lean Digital Twin",
        desc: "Digital twin of an existing facility with Lean analysis.<br />Progress, failure, and alarm monitoring – Power BI integration.<br />Virtual facility management, reports and notifications.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 19 PLN/m²</span>",
        img: "/services/fm_dtw.png",
        link: "/order-fm-twin",
        cta: "Order FM Digital Twin",
      },
      {
        title: "Construction Digital Twin + Power BI Analysis",
        desc: "Digital twin for projects under construction.<br />Progress analysis, Power BI integration, Lean cost analysis.<br />Interactive report and 3D live progress view.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 22 PLN/m²</span>",
        img: "/services/construction_twin.png",
        link: "/order-construction-twin",
        cta: "Order Construction Digital Twin",
      },
      {
        title: "EIR/BEP Standards Development & Implementation",
        desc: "Comprehensive development and implementation of EIR, BEP and digital processes according to ISO 19650.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 3,500 PLN (project)</span>",
        img: "/services/bim_4d5d.png",
        link: "/order-bep-eir",
        cta: "Order EIR/BEP Implementation",
      },
      {
        title: "3D/BIM Modeling & CDE Management Training",
        desc: "Online and onsite training in 3D modeling, BIM, and CDE management.<br />Implementation of documentation management platforms. Personalized team workshops.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 950 PLN (training)</span>",
        img: "/services/training.png",
        link: "/order-training",
        cta: "Order Training",
      },
      {
        title: "Cost Estimation & BIM 4D/5D",
        desc: "Cost estimates based on BIM models (4D/5D), cost & schedule analysis, Power BI or Excel integration.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 1,900 PLN (project)</span>",
        img: "/services/costing.png",
        link: "/order-bim4d5d",
        cta: "Order Costing/BIM 4D/5D",
      },
    ],
  },
};

export default translations;
