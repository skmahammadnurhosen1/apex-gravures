/**
 * =============================================================================
 * WHITE-LABEL MASTER DEMO TEMPLATE - MAIN INTERACTIVE LOGIC
 * =============================================================================
 * 
 * Features:
 * - Dynamic Data Hydration from companyData.js (Zero hardcoded company data)
 * - Dynamic Leaflet Interactive Satellite Map with Esri World Imagery
 * - Dynamic WhatsApp Integration with pre-formatted inquiry text
 * - Clean Header Scroll & ScrollSpy navigation states
 * - Responsive Mobile Navigation Drawer & Touch Interactions
 * - B2B Terms & Conditions Modal
 * - Smooth Offset Anchor Scrolling
 * =============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  applyCompanyData();
  initHeaderScroll();
  initMobileNav();
  initSmoothScroll();
  initScrollSpy();
  initSatelliteMap();
  initTermsModal();
});

/**
 * 1. Dynamic Data Binding & Content Hydration
 * Ingests window.COMPANY_DATA (or window.SITE_CONFIG) and updates all company
 * references, contact points, links, and leadership data dynamically.
 */
function applyCompanyData() {
  const data = window.COMPANY_DATA || window.SITE_CONFIG;
  if (!data) return;

  // Helper: Safely resolve nested object paths (e.g. "company.legalName")
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, obj);
  };

  // A. Generic Text Bindings via [data-bind]
  document.querySelectorAll('[data-bind]').forEach(el => {
    const key = el.getAttribute('data-bind');
    const val = getNestedValue(data, key);
    if (val !== undefined) {
      if (el.getAttribute('data-bind-type') === 'html') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // B. Generic Attribute & Link Bindings via [data-bind-attr]
  document.querySelectorAll('[data-bind-attr]').forEach(el => {
    const attrSpecs = el.getAttribute('data-bind-attr').split(';');
    attrSpecs.forEach(spec => {
      const [attrName, key] = spec.split(':').map(s => s.trim());
      if (attrName && key) {
        const val = getNestedValue(data, key);
        if (val !== undefined) {
          el.setAttribute(attrName, val);
        }
      }
    });
  });

  // C. Dynamic WhatsApp Links
  if (data.contact && data.contact.whatsappUrl) {
    document.querySelectorAll('.whatsapp-cta-btn, .drawer-btn-wa, [data-role="whatsapp-link"]').forEach(btn => {
      btn.setAttribute('href', data.contact.whatsappUrl);
    });
  }

  // D. Dynamic Phone Links & Text
  if (data.contact && data.contact.primaryPhone) {
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
      link.setAttribute('href', data.contact.primaryPhoneLink || `tel:${data.contact.primaryPhone.replace(/\s+/g, '')}`);
    });
  }

  // E. Dynamic Email Links & Text
  if (data.contact && data.contact.primaryEmail) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
      link.setAttribute('href', data.contact.primaryEmailLink || `mailto:${data.contact.primaryEmail}`);
    });
  }

  // F. Dynamic Leadership Council Rendering / Hydration
  if (data.council && Array.isArray(data.council.members)) {
    const councilCards = document.querySelectorAll('.council-cards-row .council-card');
    data.council.members.forEach((member, index) => {
      if (councilCards[index]) {
        const nameEl = councilCards[index].querySelector('.council-card-name');
        const imgEl = councilCards[index].querySelector('.council-portrait-img');
        if (nameEl) nameEl.textContent = member.name;
        if (imgEl) {
          if (member.image) imgEl.setAttribute('src', member.image);
          imgEl.setAttribute('alt', `${member.name} - ${member.title || 'Director'}`);
        }
      }
    });
  }

  // G. Document Title & Head Metadata
  if (data.company && data.company.legalName) {
    document.title = `${data.company.legalName} | Precision Rotogravure Cylinders & Packaging`;
  }
}

/**
 * 2. Header Scroll State
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 3. Mobile Navigation Drawer
 */
function initMobileNav() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer || !overlay) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    menuBtn.classList.toggle('open', isOpen);
    drawer.classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    menuBtn.setAttribute('aria-expanded', isOpen);
  };

  const drawerCloseBtn = document.getElementById('mobile-drawer-close');

  menuBtn.addEventListener('click', () => toggleMenu());
  overlay.addEventListener('click', () => toggleMenu(false));
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', () => toggleMenu(false));
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/**
 * 4. Smooth Offset Scrolling
 */
function initSmoothScroll() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.site-header');

  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        history.pushState(null, null, targetId);
      }
    });
  });
}

/**
 * 5. ScrollSpy
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * 6. Interactive Satellite Map
 * - Dynamically consumes coordinates, address, and legal info from COMPANY_DATA
 * - Esri World Imagery (Satellite) by default
 * - +/- Zoom controls visible at top-left with no obstructive popups
 */
function initSatelliteMap() {
  const mapContainer = document.getElementById('factory-map');
  if (!mapContainer || typeof L === 'undefined') return;

  const data = window.COMPANY_DATA || window.SITE_CONFIG || {};
  const mapConfig = data.map || {
    lat: 17.4560,
    lng: 78.4380,
    zoom: 16,
    locationLabel: "DEMO GRAVURES PRIVATE LIMITED",
    addressLabel: "Industrial Estate, Hyderabad, Telangana",
    satelliteTilesUrl: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    satelliteAttribution: "Tiles &copy; Esri &mdash; Satellite Imagery"
  };

  const legalName = (data.company && data.company.legalName) || "DEMO GRAVURES PRIVATE LIMITED";
  const address = (data.contact && data.contact.registeredOffice) ? data.contact.registeredOffice : {
    line1: "Plot 42, Phase-II,",
    line2: "Industrial Estate, Sanathnagar,",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500001",
    country: "India"
  };
  const cin = (data.company && data.company.cin) || "U32900TG2024PTC000000";

  // Initialize Leaflet map
  const map = L.map('factory-map', {
    center: [mapConfig.lat, mapConfig.lng],
    zoom: mapConfig.zoom,
    zoomControl: true,
    scrollWheelZoom: false
  });

  // Enable scroll zoom on click/focus
  map.on('focus', () => { map.scrollWheelZoom.enable(); });
  map.on('blur', () => { map.scrollWheelZoom.disable(); });

  // Add Esri World Imagery (Satellite) by DEFAULT
  L.tileLayer(
    mapConfig.satelliteTilesUrl || 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: mapConfig.satelliteAttribution || 'Tiles &copy; Esri &mdash; Satellite Imagery',
      maxZoom: 18
    }
  ).addTo(map);

  // Add reference boundaries & places
  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
    {
      maxZoom: 18
    }
  ).addTo(map);

  // Custom Gold Marker Icon
  const customIcon = L.divIcon({
    className: 'custom-factory-marker-container',
    html: `
      <div class="custom-factory-marker" style="display:flex;align-items:center;justify-content:center;width:38px;height:38px;background:#080808;border:2px solid #DFB76C;border-radius:50%;box-shadow:0 0 16px rgba(183,134,59,0.7);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DFB76C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3" fill="#DFB76C"></circle>
        </svg>
      </div>
    `,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
  });

  // Add marker with informative click-to-open popup
  const marker = L.marker([mapConfig.lat, mapConfig.lng], { icon: customIcon }).addTo(map);
  
  marker.bindPopup(`
    <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 6px; min-width: 220px;">
      <strong style="color: #DFB76C; font-size: 0.95rem; display: block; margin-bottom: 4px; font-weight: 700;">
        ${legalName}
      </strong>
      <span style="font-size: 0.8rem; color: #E5E0D5; line-height: 1.4; display: block;">
        ${address.line1}<br>
        ${address.line2}<br>
        ${address.city}, ${address.state} &ndash; ${address.postalCode}, ${address.country}
      </span>
      <span style="font-size: 0.72rem; color: #B7863B; display: block; margin-top: 6px; font-weight: 600;">
        CIN: ${cin}
      </span>
    </div>
  `);
}

/**
 * 7. Terms & Conditions Minimal B2B Modal
 */
function initTermsModal() {
  const modal = document.getElementById('terms-modal');
  const triggers = document.querySelectorAll('.footer-terms-trigger');
  const closeBtn = document.getElementById('close-terms-btn');
  const confirmBtn = document.getElementById('confirm-terms-btn');

  if (!modal) return;

  const openModal = (e) => {
    if (e) e.preventDefault();
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!modal.classList.contains('open')) {
        modal.style.display = 'none';
      }
    }, 250);
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', openModal);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (confirmBtn) {
    confirmBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}
