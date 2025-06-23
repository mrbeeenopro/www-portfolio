<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
const cursor = ref({ x: 0, y: 0 });
let ctx = null;
let animationFrame = null;
let chars = [];
let bgImage = null;

class Char {
  constructor(x, y, char) {
    this.x = x;
    this.y = y;
    this.char = char;
    this.speed = 1.2 + Math.random() * 1.8;
    this.opacity = 0.05 + Math.random() * 0.15;
    this.actualY = y;
  }

  draw() {
    const distToCursor = Math.hypot(
      this.x - cursor.value.x,
      this.y - cursor.value.y,
    );
    const highlight = Math.max(0, 0.5 - distToCursor / 250);
    const baseColor = [177, 151, 252]; // #b197fc
    const highlightColor = [196, 181, 253]; // #c4b5fd
    const r = Math.round(baseColor[0] + (highlightColor[0] - baseColor[0]) * highlight);
    const g = Math.round(baseColor[1] + (highlightColor[1] - baseColor[1]) * highlight);
    const b = Math.round(baseColor[2] + (highlightColor[2] - baseColor[2]) * highlight);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity + highlight})`;
    ctx.fillText(this.char, this.x, this.y);
  }

  update() {
    this.actualY += this.speed;
    this.y = this.actualY % window.innerHeight;
    if (this.y < this.speed) {
      this.char = String.fromCharCode(0x30a0 + Math.random() * 96);
      this.opacity = 0.05 + Math.random() * 0.15;
    }
  }
}

const calculateFontSize = () => {
  const baseSize = 16;
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    return Math.max(18, baseSize * (screenWidth / 768));
  }
  return Math.min(22, Math.max(18, baseSize * (screenWidth / 1920)));
};

const init = () => {
  if (!canvas.value) return;
  ctx = canvas.value.getContext("2d", { alpha: false });
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
  const fontSize = calculateFontSize();
  const columnSpacing = fontSize * 1.5;
  const minColumns = 15;
  const columns = Math.max(
    minColumns,
    Math.floor(window.innerWidth / columnSpacing),
  );
  const rowSpacing = fontSize * 2;
  const minRows = 15;
  const maxRows = 25;
  const rows = Math.min(
    maxRows,
    Math.max(minRows, Math.floor(window.innerHeight / rowSpacing)),
  );
  chars = [];
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * (window.innerWidth / columns);
      const y = j * rowSpacing - Math.random() * window.innerHeight;
      const char = String.fromCharCode(0x30a0 + Math.random() * 96);
      chars.push(new Char(x, y, char));
    }
  }
  ctx.font = `${fontSize}px monospace`;
};

// Load background image
const loadBackgroundImage = () => {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.src = "/assets/images/manjaro-linux.png";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
  });
};

const animate = () => {
  // Draw background image if available (cover, crop excess)
  if (bgImage) {
    // Calculate scale to always cover canvas, crop excess (like CSS background-size: cover)
    const canvasW = canvas.value.width;
    const canvasH = canvas.value.height;
    const imgW = bgImage.width;
    const imgH = bgImage.height;
    const scale = Math.max(canvasW / imgW, canvasH / imgH);
    const drawW = imgW * scale;
    const drawH = imgH * scale;
    const offsetX = (canvasW - drawW) / 2;
    const offsetY = (canvasH - drawH) / 2;
    ctx.drawImage(bgImage, offsetX, offsetY, drawW, drawH);
  } else {
    ctx.fillStyle = "#22223b";
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
  }

  chars.forEach((char) => {
    char.draw();
    char.update();
  });

  animationFrame = requestAnimationFrame(animate);
};

// Mouse move event for highlight effect
const handleMouseMove = (e) => {
  cursor.value = {
    x: e.clientX,
    y: e.clientY,
  };
};

let resizeTimeout;
// Handle window resize for responsive canvas
const handleResize = () => {
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
  resizeTimeout = setTimeout(() => {
    if (canvas.value) {
      canvas.value.width = window.innerWidth;
      canvas.value.height = window.innerHeight;
      init();
    }
  }, 250);
};

onMounted(async () => {
  bgImage = await loadBackgroundImage();
  init();
  animate();
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <canvas ref="canvas" class="fixed inset-0 -z-10 h-full w-full bg-crust" />
</template>
