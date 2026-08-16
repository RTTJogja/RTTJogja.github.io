(function () {
  "use strict";

  const content = window.RTT_CONTENT;
  const initialLimits = { stories: 6, videos: 6, instagram: 10, projects: 10 };
  const expanded = new Set();

  function formatDate(value) {
    if (!value) return "Date not published";
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC"
    }).format(new Date(`${value}T00:00:00Z`));
  }

  function sourceClass(source) {
    return `source-${source.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "")}`;
  }

  function makeCard(item, index) {
    const article = document.createElement("article");
    article.className = `archive-card reveal ${sourceClass(item.source)}`;
    article.style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;

    const media = document.createElement("div");
    media.className = "card-media";

    if (item.image) {
      const image = document.createElement("img");
      image.src = item.image;
      image.alt = "";
      image.loading = "lazy";
      image.decoding = "async";
      image.addEventListener("error", function () {
        media.replaceChildren(makePlaceholder(item));
      }, { once: true });
      media.append(image);
    } else {
      media.append(makePlaceholder(item));
    }

    const body = document.createElement("div");
    body.className = "card-body";

    const meta = document.createElement("div");
    meta.className = "card-meta";

    const source = document.createElement("span");
    source.className = "card-source";
    source.textContent = item.source;

    const date = document.createElement("time");
    date.dateTime = item.date || "";
    date.textContent = formatDate(item.date);
    meta.append(source, date);

    const heading = document.createElement("h3");
    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = item.title;
    link.setAttribute("aria-label", `${item.title} — open on ${item.source}`);
    heading.append(link);

    body.append(meta, heading);

    if (item.description) {
      const description = document.createElement("p");
      description.className = "card-description";
      description.textContent = item.description;
      body.append(description);
    }

    const footer = document.createElement("div");
    footer.className = "card-footer";
    const footerText = document.createElement("span");
    footerText.textContent = "View original";
    const arrow = document.createElement("span");
    arrow.className = "card-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";
    footer.append(footerText, arrow);
    body.append(footer);

    article.append(media, body);
    return article;
  }

  function makePlaceholder(item) {
    const placeholder = document.createElement("div");
    placeholder.className = "card-placeholder";
    const lines = (item.placeholder || item.source).split("\n");
    lines.forEach(function (line, index) {
      placeholder.append(document.createTextNode(line));
      if (index < lines.length - 1) placeholder.append(document.createElement("br"));
    });
    return placeholder;
  }

  function renderSection(key) {
    const grid = document.querySelector(`[data-grid="${key}"]`);
    if (!grid || !content[key]) return;

    const sorted = [...content[key]].sort(function (a, b) {
      return (b.date || "").localeCompare(a.date || "");
    });
    const limit = expanded.has(key) ? sorted.length : initialLimits[key];
    grid.replaceChildren(...sorted.slice(0, limit).map(makeCard));

    const moreContainer = document.querySelector(`[data-more-container="${key}"]`);
    if (moreContainer) {
      moreContainer.replaceChildren();
      if (sorted.length > initialLimits[key]) {
        const button = document.createElement("button");
        button.className = "more-button";
        button.type = "button";
        button.textContent = expanded.has(key) ? `Show fewer ${key}` : `Show all ${sorted.length} ${key}`;
        button.addEventListener("click", function () {
          if (expanded.has(key)) expanded.delete(key);
          else expanded.add(key);
          renderSection(key);
          observeReveals();
        });
        moreContainer.append(button);
      }
    }
  }

  let revealObserver;
  function observeReveals() {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach(function (element) { element.classList.add("is-visible"); });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
    }

    elements.forEach(function (element) { revealObserver.observe(element); });
  }

  function setCounts() {
    Object.keys(content).forEach(function (key) {
      const counter = document.querySelector(`[data-count="${key}"]`);
      if (counter) counter.textContent = content[key].length;
    });

    const total = Object.values(content).reduce(function (sum, items) { return sum + items.length; }, 0);
    const totalCounter = document.querySelector("[data-total-count]");
    if (totalCounter) totalCounter.textContent = total;
  }

  function setupNavigation() {
    const header = document.querySelector("[data-header]");
    const toggle = document.querySelector("[data-menu-toggle]");
    const navigation = document.querySelector("[data-navigation]");

    function updateHeader() {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }

    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      navigation.classList.toggle("is-open", !open);
    });

    navigation.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
      }
    });
  }

  Object.keys(content).forEach(renderSection);
  setCounts();
  setupNavigation();
  observeReveals();
  document.querySelector("[data-year]").textContent = new Date().getFullYear();
}());
