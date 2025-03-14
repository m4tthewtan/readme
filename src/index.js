document.querySelectorAll("a").forEach((anchor) => {
  if (anchor.href.includes("https")) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }
});

window.addEventListener("load", () => {
  if (window.location.hash) {
    window.location.replace(window.location.origin + window.location.pathname);
  }
});
