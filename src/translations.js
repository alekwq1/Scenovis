const translations = {
  pl: {
    // HERO / NAV / FOOTER / SEKCJE
    heroTitle: "Zobacz swój projekt w nowym świetle",
    heroSub:
      "Interaktywne cyfrowe bliźniaki dla inteligentnego, bezpiecznego i efektywnego zarządzania.",
    exploreBtn: "Zobacz projekt",
    contactUs: "Kontakt",
    about3dTitle: "INTERAKTYWNY DIGITAL TWIN 3D",
    resourcesTitle: "Cyfrowe bliźniaki w praktyce",
    resourcesDesc: "Poznaj przykłady, jak digital twin zmienia przemysł:",

    resourcesShort: {
      twinzo: "Przemysłowa platforma digital twin do monitorowania zakładów.",
      omniverse: "Symulacje fabryk i procesów z użyciem Omniverse od NVIDIA.",
      treedis: "Przestrzenie cyfrowe i wizualizacja IoT – Treedis.",
      tandem: "Cyfrowy bliźniak od Autodesk – BIM w praktyce.",
    },

    ctaTitle: "Czas na cyfrową transformację Twojej firmy!",
    ctaDesc:
      "Porozmawiajmy o tym, jak mogę pomóc wdrożyć cyfrowe bliźniaki w Twojej firmie.",
    ctaButton: "Napisz do mnie",
    ctaPhotoTitle: "Kliknij, aby zobaczyć więcej",
    ctaPhotoAlt: "Aleks ze Scenovis",
    ctaRole: "Lider Digital Twin",

    ctaModalTitle: "O mnie",
    ctaModal1: {
      title: "Kim jestem?",
      desc: "Nowe technologie to moja codzienność i pasja. Uwielbiam wprowadzać rozwiązania, które naprawdę zmieniają sposób działania firm i ułatwiają życie ludziom.",
    },
    ctaModal2: {
      title: "Dlaczego warto mi zaufać?",
      desc: "Na co dzień współpracuję z dużymi zespołami i korporacjami w Polsce oraz w Europie, ale zawsze najważniejsze są dla mnie relacje i realne efekty, które widzą użytkownicy moich rozwiązań.",
    },
    ctaModal3: {
      title: "Co mnie napędza?",
      desc: "Technologia powinna służyć ludziom, a nie odwrotnie. Największą satysfakcję daje mi to, że Digital Twin nie tylko jest efektowną nowością, ale faktycznie rozwiązuje codzienne problemy i poprawia bezpieczeństwo oraz komfort pracy.",
    },
    ctaModal4: {
      title: "Co mogę zrobić dla Ciebie?",
      desc: "Chętnie pokażę Ci, jak wykorzystać cyfrowego bliźniaka w Twojej firmie. Pomogę usprawnić procesy, odkryć nowe możliwości i przełożyć cyfrowe pomysły na realne korzyści dla Twojego biznesu.",
    },

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
    footerAbout: "Blog",
    footerServices: "Usługi",
    footerCases: "Przykłady",
    footerBlog: "Blog",
    footerContact: "Kontakt",
    footerCopy:
      "© 2023 Scenovis Digital Solutions. Wszelkie prawa zastrzeżone. Transformujemy przemysł dzięki technologii digital twin.",

    servicesSectionTitle: "Usługi Digital Twin & BIM",
    services: [
      {
        title: "Modelowanie 3D na podstawie dokumentacji 2D",
        desc: "Modele 3D na podstawie rysunków DWG/PDF lub skanów chmury punktów.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 2 zł/m²</span>",
        video: "/services/visualization.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Zamów wycenę",
      },
      {
        title: "Wizualizacja i spacery 3D (Expo, VR/AR)",
        desc: "Prezentacje 3D do targów, na stronę lub do metaversum. Interaktywny spacer online lub w VR/AR. Skanowanie istniejących budynków z szybkim dostępem w chmurze.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 8 zł/m²</span>",
        video: "/services/walkthrough.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Zamów wizualizację",
      },
      {
        title: "Facility Management & Lean Digital Twin",
        desc: "Cyfrowy bliźniak istniejącego obiektu z analizą Lean.<br />Monitoring postępów, awarii, alarmów.<br />Wirtualne zarządzanie obiektem, raporty i powiadomienia.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 4 zł/m²</span>",
        video: "/services/fm_dtw.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Zamów Digital Twin FM",
      },
      {
        title: "Cyfrowy Bliźniak Budowy + Analiza Power BI",
        desc: "Digital twin inwestycji w trakcie budowy.<br />Analiza postępu prac, integracja z Power BI, analiza kosztów Lean.<br />Interaktywny raport i widok 3D postępu online.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 2 zł/m²</span>",
        video: "/services/construction_twin.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Zamów Digital Twin Budowy",
      },
      {
        title: "Opracowanie standardów EIR, BEP, wdrożenie",
        desc: "Kompleksowe opracowanie i wdrożenie standardów EIR, BEP oraz procesów cyfrowych.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 3 500 zł (projekt)</span>",
        video: "/services/bim_4d5d.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Zamów wdrożenie, EIR/BEP",
      },
      {
        title: "Szkolenia z modelowania, zarządzania CDE/BIM",
        desc: "Szkolenia online i stacjonarne z modelowania 3D, BIM, zarządzania CDE.<br />Wdrożenie platform do zarządzania dokumentacją. Personalizowane warsztaty dla zespołów.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 950 zł (szkolenie)</span>",
        video: "/services/training.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Zamów szkolenie",
      },
      {
        title: "Kosztorysowanie oraz BIM 4D/5D",
        desc: "Przygotowanie kosztorysów na podstawie modeli BIM (4D/5D), analiza kosztów i harmonogramów, integracja z Power BI lub Excel.<br /><span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 2 zł/m²</span>",
        video: "/services/costing.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Zamów kosztorysowanie/BIM 4D/5D",
      },
      {
        title: "Porównanie postępu prac na budowie PZPB, BHP",
        desc: `
          <b>Monitorowanie i porównanie postępy prac na budowie</b> – cyklicznie, przez dedykowaną stronę internetową PZPB budowy.<br>
                    Dostęp do zaawansowanych narzędzi porównawczych oraz archiwum historii zmian.<br>
          
          Idealne rozwiązanie dla kierowników budów i działów BHP.
          <ul style="margin:0 0 8px 24px; padding:0; color:#b2f6fa;">
            <li>Podgląd porównania postępu z poprzednimi okresami</li>
            
            <li>PZPB budowy ze szkoleniami BHP<br>
            <span style='color:#2ef9e8;font-weight:700'>Szacowana cena od 500 zł</span>
          </ul>
        `,
        img: "/img/pzpb-comparison.png",
        video: "/services/pzpb.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Zamów usługę",
      },
    ],
  },

  en: {
    heroTitle: "See Your Project in a New Light",
    heroSub:
      "Interactive digital twins for smart, safe, and efficient management.",
    exploreBtn: "Explore project",
    contactUs: "Contact Me",
    about3dTitle: "INTERACTIVE DIGITAL TWIN 3D",
    resourcesTitle: "Digital Twins in Action",
    resourcesDesc:
      "Explore these curated examples to see how digital twins are transforming industries:",

    resourcesShort: {
      twinzo: "Industrial digital twin platform for plant monitoring.",
      omniverse: "Factory and process simulation with NVIDIA Omniverse.",
      treedis: "Digital spaces & IoT visualization – Treedis.",
      tandem: "Autodesk's digital twin – BIM in action.",
    },

    ctaTitle: "Ready to Transform Your Business?",
    ctaDesc:
      "Let's discuss how I can help you implement digital twin solutions.",
    ctaButton: "Contact Me",
    ctaPhotoTitle: "Click to see more",
    ctaPhotoAlt: "Aleks from Scenovis",
    ctaRole: "Digital Twin Leader",

    ctaModalTitle: "About Me",
    ctaModal1: {
      title: "Who am I?",
      desc: "Technology is my passion and part of my everyday life. I love bringing in solutions that truly change the way companies operate and make people’s lives easier.",
    },
    ctaModal2: {
      title: "Why trust me?",
      desc: "Every day, I work with large teams and corporations across Poland and Europe, but for me, the most important thing has always been building relationships and delivering real, tangible results for the people who use my solutions.",
    },
    ctaModal3: {
      title: "What drives me?",
      desc: "Technology should serve people, not the other way around. What gives me the most satisfaction is seeing how digital twins are not just a flashy innovation, but actually solve real, everyday problems and make work safer and more comfortable.",
    },
    ctaModal4: {
      title: "What can I do for you?",
      desc: "I’d love to show you how to use digital twins in your business. I’ll help you streamline your processes, discover new opportunities, and turn digital ideas into real benefits for your company.",
    },

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
    footerAbout: "Blog",
    footerServices: "Services",
    footerCases: "Case Studies",
    footerBlog: "Blog",
    footerContact: "Contact",
    footerCopy:
      "© 2023 Scenovis Digital Solutions. All rights reserved. Transforming industries through digital twin technology.",

    servicesSectionTitle: "Digital Twin & BIM Services",
    services: [
      {
        title: "3D Modeling from 2D Documentation",
        desc: "3D models based on DWG/PDF drawings or point cloud scans.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 0,5 USD/m²</span>",
        video: "/services/visualization.mp4",

        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Order 3D Model",
      },
      {
        title: "Visualization & 3D Tours (Expo, VR/AR, Digital Models)",
        desc: "3D presentations for trade shows, websites, or the metaverse. Interactive tours online or in VR/AR. Scanning of existing buildings with fast cloud access.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 2 USD/m²</span>",
        video: "/services/walkthrough.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Order Visualization",
      },
      {
        title: "Facility Management & Lean Digital Twin",
        desc: "Digital twin of an existing facility with Lean analysis.<br />Progress, failure, and alarm monitoring.<br />Virtual facility management, reports, and notifications.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 1 USD/m²</span>",
        video: "/services/fm_dtw.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Order FM Digital Twin",
      },
      {
        title: "Construction Digital Twin + Power BI Analysis",
        desc: "Digital twin for construction projects.<br />Progress analysis, Power BI integration, Lean cost analysis.<br />Interactive reporting and 3D online progress view.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 0,5 USD/m²</span>",
        video: "/services/construction_twin.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Order Construction Digital Twin",
      },
      {
        title: "EIR/BEP Standards Development & Implementation",
        desc: "Comprehensive development and implementation of EIR, BEP, and digital processes.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 900 USD (project)</span>",
        img: "/services/bim_4d5d.png",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Order EIR/BEP Implementation",
      },
      {
        title: "3D/BIM Modeling & CDE Management Training",
        desc: "Online and onsite training in 3D modeling, BIM, and CDE management.<br />Implementation of document management platforms. Personalized workshops for teams.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 250 USD (training)</span>",
        video: "/services/training.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Order Training",
      },
      {
        title: "Cost Estimation & BIM 4D/5D",
        desc: "Preparation of cost estimates based on BIM models (4D/5D), cost and schedule analysis, integration with Power BI or Excel.<br /><span style='color:#2ef9e8;font-weight:700'>Estimated price from 0,5 USD/m²</span>",
        video: "/services/costing.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "Order Costing/BIM 4D/5D",
      },
      {
        title: "Construction Progress Comparison (SDP, HSE)",
        desc: `
          <b>Monitor and compare construction progress</b> cyclically through a dedicated SDP project website.<br>
  Gain access to advanced comparison tools and a full history of changes.<br>
  An ideal solution for site managers and HSE teams.
  <ul style="margin:0 0 8px 24px; padding:0; color:#b2f6fa;">
    <li>Compare progress with previous periods</li>
    <li>SDP site with integrated HSE training management</li>
    <li><span style='color:#2ef9e8;font-weight:700'>Estimated price from 130 USD</span></li>
  </ul>
        `,
        img: "/img/pzpb-comparison.png",
        video: "/services/pzpb.mp4",
        link: "https://www.linkedin.com/in/aleks-malyshka/",
        cta: "See demo",
      },
    ],
  },
};

export default translations;
