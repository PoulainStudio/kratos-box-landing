# 🚀 GUÍA RÁPIDA DE INICIO - KratosBox Landing Page

## Instalación en 3 pasos

### 1️⃣ Instalar dependencias
```bash
npm install
```

### 2️⃣ Iniciar servidor de desarrollo
```bash
npm run dev
```

La página se abrirá automáticamente en `http://localhost:3000`

### 3️⃣ Compilar para producción
```bash
npm run build
```

---

## 📱 Características principales

✅ **8 Componentes React** modulares y reutilizables
✅ **CSS Personalizado** 100% - Sin frameworks
✅ **Responsive Design** - Funciona en todos los dispositivos
✅ **Modal Interactivo** - "Método Kratos" con estado React
✅ **Scroll Suave** - Navegación fluida entre secciones
✅ **Animaciones Premium** - Efectos visuales de alto impacto
✅ **Formulario Funcional** - Con validación y feedback visual
✅ **Paleta Spartan** - Negro, Rojo Bordó, Blanco (tema profesional)

---

## 🎨 Estructura de la página

```
Header → Hero → Nosotros → Planes → Staff → Horarios → Contacto → Footer
```

Cada sección es independiente y tiene scroll suave.

---

## ⚙️ Personalización

### Cambiar colores
Edita `:root` en `src/styles/global.css`:
```css
:root {
  --bordo: #800000;  /* Cambiar aquí */
  --black: #000000;
  --white: #FFFFFF;
}
```

### Cambiar información de contacto
Edita `src/components/Contact.jsx` con tus datos:
- Email
- Teléfono
- Dirección

### Cambiar información de coaches
Edita el array `coaches` en `src/components/Staff.jsx`

---

## 📊 Estadísticas del Proyecto

- **8 Componentes React**
- **9 Archivos CSS**
- **0 Dependencias de UI** (Puro CSS3)
- **100% Responsivo**
- **Compatible con todos los navegadores modernos**

---

## 🔗 Links importantes

- 🌐 Google Maps: Indart 2757, San Justo, Buenos Aires
- 📱 Instagram: @kratosbox
- 📧 Email: info@kratosbox.com

---

## 💡 Tips

- Las imágenes de coaches usan placeholders de `via.placeholder.com`
- Reemplaza con URLs de imágenes reales cuando sea necesario
- El formulario de contacto es funcional pero no envía datos (solo valida)
- Para envíos reales, integra con Formspree, EmailJS o tu backend

---

## ✨ Lo que hace especial a KratosBox

- 🎯 Diseño agresivo y motivador
- 🏋️ Enfocado en Powerlifting profesional
- ⚔️ Tema Spartan único y memorable
- 📱 Funciona perfectamente en móvil
- ⚡ Carga rápida (sin dependencias innecesarias)

---

**¡Listo para conquistar! 💪⚔️**

Cualquier duda, consulta el README.md completo.
