export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement("script");
    script.src = "https://raw.githubusercontent.com/adryd325/oneko.js/master/oneko.js";
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
