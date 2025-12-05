export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/oneko@latest/oneko.js";
    script.async = true;
    script.onload = () => {
      if (window.oneko) {
        window.oneko({
          scale: 1,   
        });
      }
    };
    document.body.appendChild(script);
  }
});
