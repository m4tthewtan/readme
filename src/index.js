document.querySelectorAll("a.external").forEach((anchor) => {
  anchor.setAttribute("target", "_blank");
  anchor.setAttribute("rel", "noopener noreferrer");
});

window.addEventListener("load", () => {
  if (window.location.hash) {
    window.location.replace(window.location.origin + window.location.pathname);
  }
});
