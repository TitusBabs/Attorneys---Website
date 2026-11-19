/** Reference `onBook`: smooth-scroll to the contact section, 80px above it. */
export function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
}
