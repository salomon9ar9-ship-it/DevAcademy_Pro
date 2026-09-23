"use strict";

/**
 * DEVACADEMY PRO - Lógica Principal
 * Incluye: Validación JS puro, API Media, Arreglos + Ciclos,
 * setTimeout, setInterval, clearInterval, Delegación de Eventos,
 * Try/Catch y Sistema de Temas Claro/Oscuro.
 */

// ==========================================
// 1. SISTEMA DE TEMAS (CLARO/OSCURO)
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Cargar tema guardado o usar el predeterminado
const savedTheme = localStorage.getItem('devacademy-theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
themeToggle.checked = savedTheme === 'light';

// Cambiar tema al hacer clic en el toggle
themeToggle.addEventListener('change', (e) => {
  const newTheme = e.target.checked ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('devacademy-theme', newTheme);
});

// ==========================================
// 2. DATOS: Arreglo de 8 objetos
// ==========================================
const modulosAprendizaje = [
  { id: 1, titulo: "Introducción a HTML5", tipo: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4", desc: "Conceptos básicos de estructura web y semántica." },
  { id: 2, titulo: "Podcast: Historia de JS", tipo: "audio", url: "https://www.w3schools.com/html/horse.ogg", desc: "Origen y evolución de JavaScript desde 1995." },
  { id: 3, titulo: "CSS Grid y Flexbox", tipo: "video", url: "https://www.w3schools.com/html/movie.mp4", desc: "Diseño de layouts modernos y responsivos." },
  { id: 4, titulo: "Entrevista a Experto", tipo: "audio", url: "https://www.w3schools.com/html/horse.mp3", desc: "Consejos para desarrolladores junior." },
  { id: 5, titulo: "Manipulación del DOM", tipo: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4", desc: "Cómo interactuar con elementos HTML dinámicamente." },
  { id: 6, titulo: "Async/Await Explicado", tipo: "audio", url: "https://www.w3schools.com/html/horse.ogg", desc: "Manejo de promesas y operaciones asíncronas." },
  { id: 7, titulo: "Seguridad Web Básica", tipo: "video", url: "https://www.w3schools.com/html/movie.mp4", desc: "Prevención de XSS y buenas prácticas de seguridad." },
  { id: 8, titulo: "Resumen del Módulo 1", tipo: "audio", url: "https://www.w3schools.com/html/horse.mp3", desc: "Repaso rápido de todos los temas vistos." }
];

// ==========================================
// 3. RENDERIZADO DINÁMICO CON CICLOS
// ==========================================
const contenedorModulos = document.getElementById('lista-modulos');

function renderizarModulos() {
  modulosAprendizaje.forEach((modulo, index) => {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'module-card';
    tarjeta.dataset.id = modulo.id;
    tarjeta.style.animationDelay = `${index * 0.1}s`;
    tarjeta.innerHTML = `
      <div class="module-type">${modulo.tipo === 'video' ? '🎥 Video HD' : '🎧 Audio Podcast'}</div>
      <h3 class="module-title">${modulo.titulo}</h3>
      <p>${modulo.desc}</p>
    `;
    contenedorModulos.appendChild(tarjeta);
  });
}

// ==========================================
// 4. API DE MULTIMEDIA con Try/Catch
// ==========================================
const videoPlayer = document.getElementById('reproductor-video');
const audioPlayer = document.getElementById('reproductor-audio');
const mediaStatus = document.getElementById('media-status');
const mediaPlaceholder = document.getElementById('media-placeholder');
let mediaActivo = null;

// EXCELENCIA: Delegación de eventos
contenedorModulos.addEventListener('click', (e) => {
  const tarjeta = e.target.closest('.module-card');
  if (!tarjeta) return;

  const id = parseInt(tarjeta.dataset.id);
  const modulo = modulosAprendizaje.find(m => m.id === id);

  cargarMedia(modulo);
});

function cargarMedia(modulo) {
  try {
    if (mediaActivo) {
      mediaActivo.pause();
      mediaActivo.currentTime = 0;
      mediaActivo.hidden = true;
    }

    mediaPlaceholder.hidden = true;
    mediaStatus.innerHTML = '<span class="status-dot"></span> Cargando: ' + modulo.titulo + '...';

    if (modulo.tipo === 'video') {
      videoPlayer.src = modulo.url;
      videoPlayer.hidden = false;
      mediaActivo = videoPlayer;
    } else {
      audioPlayer.src = modulo.url;
      audioPlayer.hidden = false;
      mediaActivo = audioPlayer;
    }

    mediaStatus.innerHTML = '<span class="status-dot"></span> Reproduciendo: ' + modulo.titulo;
    mediaActivo.play().catch(err => console.error("Error al reproducir:", err));

  } catch (error) {
    mediaStatus.innerHTML = '<span class="status-dot" style="background: var(--danger);"></span> Error al cargar el contenido.';
    console.error("Error en cargarMedia:", error);
  }
}

document.getElementById('btn-play').addEventListener('click', () => {
  if (mediaActivo) mediaActivo.play();
});

document.getElementById('btn-pause').addEventListener('click', () => {
  if (mediaActivo) mediaActivo.pause();
});

document.getElementById('btn-mute').addEventListener('click', function() {
  if (mediaActivo) {
    mediaActivo.muted = !mediaActivo.muted;
    const muteText = document.getElementById('mute-text');
    this.querySelector('.btn-icon').textContent = mediaActivo.muted ? '🔇' : '';
    muteText.textContent = mediaActivo.muted ? 'Unmute' : 'Mute';
  }
});

document.getElementById('volumen').addEventListener('input', (e) => {
  if (mediaActivo) mediaActivo.volume = e.target.value;
});

// ==========================================
// 5. VALIDACIÓN DE FORMULARIO EN JS PURO
// ==========================================
const formulario = document.getElementById('formulario-registro');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  
  document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
  let esValido = true;

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const password = document.getElementById('password').value;

  if (nombre.length < 3) {
    document.getElementById('error-nombre').textContent = "⚠️ El nombre debe tener al menos 3 caracteres.";
    esValido = false;
  }

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    document.getElementById('error-correo').textContent = "⚠️ Ingrese un correo electrónico válido.";
    esValido = false;
  }

  if (password.length < 6) {
    document.getElementById('error-password').textContent = "⚠️ La contraseña debe tener al menos 6 caracteres.";
    esValido = false;
  }

  if (esValido) {
    const btnSubmit = formulario.querySelector('button[type="submit"]');
    btnSubmit.disabled = true;
    btnSubmit.textContent = ' Procesando...';

    setTimeout(() => {
      document.getElementById('form-success').hidden = false;
      formulario.reset();
      btnSubmit.disabled = false;
      btnSubmit.textContent = 'Registrarse al Curso';
      
      setTimeout(() => {
        document.getElementById('form-success').hidden = true;
      }, 4000);
    }, 1500);
  }
});

// ==========================================
// 6. TEMPORIZADORES: setInterval y clearInterval
// ==========================================
let intervaloTimer = null;
let segundosTranscurridos = 0;
const displayTimer = document.getElementById('timer-display');

function actualizarDisplay() {
  const minutos = Math.floor(segundosTranscurridos / 60).toString().padStart(2, '0');
  const segundos = (segundosTranscurridos % 60).toString().padStart(2, '0');
  displayTimer.textContent = `${minutos}:${segundos}`;
}

document.getElementById('btn-iniciar-timer').addEventListener('click', () => {
  if (intervaloTimer) return;
  
  intervaloTimer = setInterval(() => {
    segundosTranscurridos++;
    actualizarDisplay();
  }, 1000);
});

document.getElementById('btn-detener-timer').addEventListener('click', () => {
  clearInterval(intervaloTimer);
  intervaloTimer = null;
});

document.getElementById('btn-reiniciar-timer').addEventListener('click', () => {
  clearInterval(intervaloTimer);
  intervaloTimer = null;
  segundosTranscurridos = 0;
  actualizarDisplay();
});

// EXCELENCIA: Limpieza de recursos al cerrar la pestaña
window.addEventListener('beforeunload', () => {
  if (intervaloTimer) clearInterval(intervaloTimer);
});

// ==========================================
// 7. INICIALIZACIÓN Y setTimeout de Bienvenida
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderizarModulos();
  actualizarDisplay();

  const toast = document.getElementById('toast-bienvenida');
  toast.hidden = false;
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(400px)';
    setTimeout(() => {
      toast.hidden = true;
    }, 400);
  }, 4000);
});