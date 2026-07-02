<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
let ctx = null;

// Handle window size
const handleResize = () => {
  if (!canvas.value) return;
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
};

// Draw static grid lines on dark background
const draw = () => {
  if (!canvas.value || !ctx) return;

  const width = canvas.value.width;
  const height = canvas.value.height;

  // Clear background to OpenCode canvas dark slate (#161414)
  ctx.fillStyle = "#161414";
  ctx.fillRect(0, 0, width, height);

  // Draw Grid Lines (Drafting paper style)
  const gridSize = 48; // Grid square size
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(245, 242, 242, 0.03)"; // Hairline light tint

  ctx.beginPath();
  // Vertical lines
  for (let x = 0; x < width; x += gridSize) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
  }

  // Horizontal lines
  for (let y = 0; y < height; y += gridSize) {
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  }
  ctx.stroke();

  // Subtle intersection points
  ctx.fillStyle = "rgba(245, 242, 242, 0.08)";
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      ctx.fillRect(x - 0.5, y - 0.5, 1, 1);
    }
  }
};

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext("2d");
    handleResize();
    draw();
    window.addEventListener("resize", () => {
      handleResize();
      draw();
    });
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <canvas ref="canvas" class="fixed inset-0 -z-10 block pointer-events-none" />
</template>
