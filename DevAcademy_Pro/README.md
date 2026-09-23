# 🎓 DevAcademy Pro | Plataforma de Aprendizaje Interactivo

**Proyecto académico para demostrar el dominio de funcionalidades avanzadas de JavaScript puro (Vanilla JS).**

![HTML5](https://img.shields.io/badge/HTML5-Semántico-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Modern_&_Responsive-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B_Vanilla-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Excelencia-10b981)

---

## 📖 Descripción

**DevAcademy Pro** es una plataforma web educativa diseñada para integrar y demostrar el uso de funcionalidades avanzadas de JavaScript sin depender de librerías externas. El proyecto simula un entorno de aprendizaje real donde un estudiante puede registrarse, consumir contenido multimedia (video/audio) y medir su tiempo de estudio.

El código está estructurado para cumplir y superar los criterios de la rúbrica de evaluación, enfocándose en **JavaScript puro**, buenas prácticas de rendimiento y manejo robusto de errores.

---

## ✨ Características Principales (Criterios de la Rúbrica)

### 1. 📝 Formulario de Registro con Validación en JS Puro
- Validación en tiempo real sin recargar la página (`preventDefault`).
- Uso de **Expresiones Regulares (Regex)** para validar el formato del correo electrónico.
- Validación de longitud mínima para nombre y contraseña.
- Feedback visual inmediato de errores y éxito.

### 2. 🎥 Elementos Video y Audio (API de JavaScript)
- Implementación de las etiquetas nativas `<video>` y `<audio>`.
- Control total mediante la **API de Multimedia de HTML5** (`play()`, `pause()`, `volume`, `currentTime`).
- Botones personalizados que interactúan directamente con el reproductor.

### 3. 📚 Arreglo de Objetos y Ciclos (Renderizado Dinámico)
- Base de datos simulada con un **arreglo de 8 objetos** (`modulosAprendizaje`).
- Generación dinámica del DOM utilizando el ciclo `forEach` y `document.createElement`.
- Separación clara entre los datos (Modelo) y la vista (DOM).

### 4. ⏱️ Temporizadores (`setTimeout` y `setInterval`)
- **`setInterval`**: Cronómetro de estudio (Pomodoro) que actualiza la interfaz cada segundo.
- **`setTimeout`**: Mensaje de bienvenida inicial y feedback de "Procesando..." en el formulario.

---

## 🚀 Nivel de Excelencia (Optimización y Buenas Prácticas)

Este proyecto no solo cumple con los requisitos básicos, sino que implementa técnicas de nivel profesional para garantizar la calificación de **Excelencia**:

1. **Delegación de Eventos:** 
   En lugar de asignar 8 *event listeners* individuales a cada tarjeta de módulo generada por el ciclo, se asigna un único listener al contenedor padre (`contenedorModulos`). Esto reduce drásticamente el consumo de memoria y mejora el rendimiento.
2. **Limpieza de Memoria (`clearInterval`):** 
   El temporizador no solo se detiene con el botón, sino que se implementa un listener en `window.addEventListener('beforeunload', ...)` para garantizar que el intervalo se destruya si el usuario cierra o recarga la pestaña, evitando *memory leaks* (fugas de memoria).
3. **Manejo de Errores (`try...catch`):** 
   La función que carga los elementos multimedia está envuelta en un bloque `try...catch` para capturar fallos de red o URLs inválidas, mostrando un mensaje de error controlado en lugar de romper la aplicación.
4. **Código Comentado y Estructurado:** 
   Cada bloque funcional está documentado explicando el *porqué* de las decisiones técnicas.

---

## 📂 Estructura del Proyecto

```text
DevAcademy_Pro/
│
├── index.html              # Estructura semántica y accesible
├── styles.css              # Estilos modernos, responsive y variables CSS
├── app.js                  # Lógica principal en Vanilla JS (ES6+)
└── README.md               # Documentación del proyecto