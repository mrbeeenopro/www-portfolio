<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  birthTimestamp: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  fontSize: {
    type: Number,
    default: 14,
  },
  fontFamily: {
    type: String,
    default:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  textColor: {
    type: String,
    default: "#fff",
  },
});

const canvasRef = ref(null);
const isCelebrating = ref(false);

let animationFrame = null;
let ctx = null;
let lastYearFloor = null;
let showerInterval = null;
let celebrationTimeout = null;

// Check if today is the birthday or within 1 full day (24h) after turning a full year
const checkIsWithinOneDayOfBirthday = () => {
  const now = new Date();
  const birth = new Date(props.birthTimestamp);

  // 1. Same calendar day
  if (now.getMonth() === birth.getMonth() && now.getDate() === birth.getDate()) {
    return true;
  }

  // 2. Exactly within 24 hours (1 full day) after the latest integer year milestone
  const currentYear = now.getFullYear();
  let latestBirthday = new Date(
    currentYear,
    birth.getMonth(),
    birth.getDate(),
    birth.getHours(),
    birth.getMinutes(),
    birth.getSeconds()
  );
  if (now.getTime() < latestBirthday.getTime()) {
    latestBirthday = new Date(
      currentYear - 1,
      birth.getMonth(),
      birth.getDate(),
      birth.getHours(),
      birth.getMinutes(),
      birth.getSeconds()
    );
  }

  const elapsedMs = now.getTime() - latestBirthday.getTime();
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  return elapsedMs >= 0 && elapsedMs < ONE_DAY_MS;
};

const isBirthdayPeriod = computed(() => {
  return checkIsWithinOneDayOfBirthday();
});

const calculateAge = (timestamp = Date.now()) => {
  return (timestamp - props.birthTimestamp) / (1000 * 60 * 60 * 24 * 365.25);
};

// 1 time per sec confetti shower across the screen on full 1-year birthday milestone
const shootShowerConfetti = async () => {
  if (typeof window === "undefined") return;
  try {
    const confettiModule = await import("canvas-confetti");
    const confetti = confettiModule.default || confettiModule;

    confetti({
      particleCount: 22,
      angle: 90,
      spread: 100,
      startVelocity: 16,
      origin: {
        x: 0.1 + Math.random() * 0.8,
        y: -0.05,
      },
      colors: ["#bf5af2", "#3897ff", "#f5e064", "#ff3b30", "#30d158", "#ff9500"],
      gravity: 0.7,
      scalar: 1.15,
      drift: (Math.random() - 0.5) * 0.4,
      ticks: 350,
    });
  } catch (err) {
    console.error("Confetti error:", err);
  }
};

const startShowerInterval = () => {
  if (showerInterval) return;
  shootShowerConfetti();
  showerInterval = setInterval(() => {
    shootShowerConfetti();
  }, 1000);
};

const stopShowerInterval = () => {
  if (showerInterval) {
    clearInterval(showerInterval);
    showerInterval = null;
  }
};

// Automatic full 1-year birthday trigger
const triggerBirthday = async () => {
  isCelebrating.value = true;

  if (typeof window !== "undefined") {
    try {
      const confettiModule = await import("canvas-confetti");
      const confetti = confettiModule.default || confettiModule;

      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.65 },
        colors: ["#bf5af2", "#3897ff", "#f5e064", "#ff3b30", "#30d158", "#ff9500"],
      });
    } catch (err) {
      console.error("Confetti error:", err);
    }
  }

  startShowerInterval();

  // If outside the 1-day birthday window, keep the shower for 15s
  if (celebrationTimeout) clearTimeout(celebrationTimeout);
  celebrationTimeout = setTimeout(() => {
    if (!isBirthdayPeriod.value) {
      isCelebrating.value = false;
      stopShowerInterval();
    }
  }, 15000);
};

const draw = () => {
  if (!ctx) return;

  ctx.clearRect(0, 0, props.width, props.height);

  const now = Date.now();
  const age = calculateAge(now);
  const currentFloor = Math.floor(age);

  // Trigger strictly when unix clock crosses a full 1 year boundary (+1 yr)
  if (lastYearFloor !== null && currentFloor > lastYearFloor) {
    triggerBirthday();
  }
  lastYearFloor = currentFloor;

  ctx.font = `${props.fontSize}px ${props.fontFamily}`;

  // Rainbow shimmer effect only when birthday is active / celebrating
  if (isCelebrating.value || isBirthdayPeriod.value) {
    const hue = Math.floor((now / 12) % 360);
    ctx.fillStyle = `hsl(${hue}, 90%, 65%)`;
  } else {
    ctx.fillStyle = props.textColor;
  }

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const formattedAge = age.toFixed(8);
  ctx.fillText(formattedAge, props.width / 2, props.height / 2);

  animationFrame = requestAnimationFrame(draw);
};

defineExpose({
  triggerBirthday,
  isBirthdayPeriod,
  isCelebrating,
});

onMounted(() => {
  // If today is the birthday (or within 1 day of full 1-year rollover), start the 1 time per sec shower
  if (isBirthdayPeriod.value) {
    isCelebrating.value = true;
    startShowerInterval();
  }

  const canvas = canvasRef.value;
  if (canvas) {
    ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    canvas.width = props.width * dpr;
    canvas.height = props.height * dpr;

    ctx.scale(dpr, dpr);
    draw();
  }
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  if (celebrationTimeout) {
    clearTimeout(celebrationTimeout);
  }
  stopShowerInterval();
});
</script>

<template>
  <canvas
    ref="canvasRef"
    class="inline align-middle"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  />
</template>
