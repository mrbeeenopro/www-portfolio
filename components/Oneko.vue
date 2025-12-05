<script setup>
import { onMounted } from 'vue';


onMounted(() => {

    if (process.client && !document.querySelector('script[src="/assets/oneko.js"]')) {
        
  
        const script = document.createElement('script');
        
 
        script.src = "/assets/oneko.js"; 
        
        script.async = true;
        

        document.body.appendChild(script);
        

    }
});
</script>

<template>
    </template>
