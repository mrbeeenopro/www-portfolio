export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/oneko.js@1.0.0/oneko.js";
    script.async = true;
    script.onload = () => {
      if (window.oneko) {
        window.oneko();
      } else {
        console.error("Oneko not loaded");
      }
    };
    document.body.appendChild(script);
  }
});
