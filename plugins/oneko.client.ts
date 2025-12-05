export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/oneko@latest/oneko.js";
    script.async = true;
    document.body.appendChild(script);
  }
});
