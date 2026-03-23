import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Loader2 } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Hero: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const cvContainer = document.createElement('div');
      cvContainer.style.position = 'absolute';
      cvContainer.style.left = '-9999px';
      cvContainer.style.top = '0';
      cvContainer.style.display = 'flex';
      cvContainer.style.flexDirection = 'column';
      
      // CONFIGURACIÓN BASE A4
      const a4Width = '800px';
      const a4Height = '1131px';
      const bgColor = '#ffffff'; 
      const primaryColor = '#2962ff';
      const textColor = '#111827';
      const mutedColor = '#4b5563';
      const borderColor = '#e5e7eb';
      
      // ÍCONOS SVG LIMPIOS (Nada de emojis)
      const iconUser = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
      const iconBriefcase = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`;
      const iconEdu = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`;
      const iconCode = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
      const iconGlobe = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;

      // PAGE 1
      const page1 = document.createElement('div');
      page1.style.width = a4Width;
      page1.style.height = a4Height;
      page1.style.padding = '50px';
      page1.style.boxSizing = 'border-box';
      page1.style.backgroundColor = bgColor;
      page1.style.fontFamily = '"Inter", system-ui, sans-serif';
      
      page1.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px;">
          <div style="flex: 1; padding-right: 20px;">
            <h1 style="font-size: 48px; margin: 0 0 5px 0; color: ${textColor}; font-weight: 900; letter-spacing: -1px; line-height: 1;">EDISON<br/>GAVILANES</h1>
            <h2 style="font-size: 18px; margin: 0 0 20px 0; color: ${primaryColor}; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">Ingeniero en Sistemas & Desarrollador</h2>
            
            <div style="display: flex; flex-wrap: wrap; gap: 15px; font-size: 12px; color: ${mutedColor}; font-weight: 500;">

  <span style="display: flex; align-items: center; gap: 5px;">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
    +593 98 851 5225
  </span>

  <span style="display: flex; align-items: center; gap: 5px;">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
    gavilanessebas45@gmail.com
  </span>

  <span style="display: flex; align-items: center; gap: 5px;">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
    Ambato
  </span>

  <span style="display: flex; align-items: center; gap: 5px;">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07L11 4"></path>
      <path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 0 0 7.07 7.07L13 20"></path>
    </svg>
    <a href="https://edison-gavilanes-portfolio-923591689593.us-west1.run.app/" target="_blank" style="color:${mutedColor}; text-decoration:none;">
      Visita mi curriculo digital aplicando diversas tecnologias
    </a>
  </span>

</div>
          
          <div style="width: 130px; height: 130px; flex-shrink: 0; border-radius: 16px; overflow: hidden; border: 1px solid ${borderColor};">
            <img src="/profile.jpeg" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" crossorigin="anonymous" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'800\\' viewBox=\\'0 0 800 800\\'%3E%3Crect width=\\'800\\' height=\\'800\\' fill=\\'%23111827\\'/%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' font-family=\\'sans-serif\\' font-size=\\'100\\' fill=\\'%234b5563\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\'%3EEG%3C/text%3E%3C/svg%3E'" />
          </div>
        </div>

        <div style="width: 100%; height: 1px; background-color: ${borderColor}; margin-bottom: 30px;"></div>

        <div style="margin-bottom: 40px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
            ${iconUser}
            <h3 style="font-size: 16px; margin: 0; color: ${textColor}; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Perfil Profesional</h3>
          </div>
          <p style="font-size: 14px; line-height: 1.7; color: ${mutedColor}; text-align: justify; margin: 0;">
            Ingeniero en Sistemas de la Información, autodidacta y apasionado por el desarrollo de soluciones tecnológicas. 
            Me considero una persona responsable, respetuosa, comprometida y con alta capacidad de adaptación. 
            Especializado en la intersección entre diseño, código e Inteligencia Artificial, creando experiencias 
            digitales inmersivas y arquitecturas escalables.
          </p>
        </div>

        <div>
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 25px;">
            ${iconBriefcase}
            <h3 style="font-size: 16px; margin: 0; color: ${textColor}; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Experiencia Profesional</h3>
          </div>
          
          <div style="margin-bottom: 30px; position: relative; padding-left: 20px; border-left: 2px solid ${borderColor};">
            <div style="position: absolute; left: -5px; top: 6px; width: 8px; height: 8px; border-radius: 50%; background: ${primaryColor};"></div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
              <div>
                <h4 style="margin: 0; font-size: 16px; font-weight: 700; color: ${textColor};">Desarrollador Web & Backend (Tesis)</h4>
                <p style="margin: 4px 0 10px 0; font-size: 14px; font-weight: 500; color: ${primaryColor};">Proyecto de Grado</p>
              </div>
              <span style="font-size: 12px; color: ${mutedColor}; font-weight: 500; text-align: right;">2024<br/>Ambato</span>
            </div>
            <ul style="margin: 0; font-size: 13.5px; padding-left: 15px; color: ${mutedColor}; line-height: 1.6;">
              <li style="margin-bottom: 6px;">Desarrollo de un Sistema de Gestión de Inventario para un almacén de calzado utilizando EJS, Node.js y MySQL.</li>
              <li style="margin-bottom: 6px;">Creación de un Sistema para Toma de Exámenes Aptitudinales con interfaces de administrador para parametrización y carga masiva de preguntas.</li>
              <li style="margin-bottom: 6px;">Implementación de interfaz para estudiantes con cálculo automático de puntajes.</li>
              <li>Integración de tecnología anti-copia en JavaScript y diseño UX responsive generado y optimizado con IA.</li>
            </ul>
          </div>

          <div style="position: relative; padding-left: 20px; border-left: 2px solid ${borderColor};">
            <div style="position: absolute; left: -5px; top: 6px; width: 8px; height: 8px; border-radius: 50%; background: ${primaryColor};"></div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
              <div>
                <h4 style="margin: 0; font-size: 16px; font-weight: 700; color: ${textColor};">Desarrollador Web (Freelancer)</h4>
                <p style="margin: 4px 0 10px 0; font-size: 14px; font-weight: 500; color: ${primaryColor};">Independiente</p>
              </div>
              <span style="font-size: 12px; color: ${mutedColor}; font-weight: 500; text-align: right;">Mar 2025 – Actual<br/>Ambato</span>
            </div>
            <ul style="margin: 0; font-size: 13.5px; padding-left: 15px; color: ${mutedColor}; line-height: 1.6;">
              <li style="margin-bottom: 6px;">Creación de aplicaciones web dinámicas con HTML, CSS y JavaScript.</li>
              <li style="margin-bottom: 6px;">Implementación de control de versiones riguroso utilizando GitLab.</li>
              <li>Optimización de interfaces centradas en el usuario y desarrollo de funcionalidades para gestión de tareas.</li>
            </ul>
          </div>
        </div>
      `;

      // PAGE 2
      const page2 = document.createElement('div');
      page2.style.width = a4Width;
      page2.style.height = a4Height;
      page2.style.padding = '50px';
      page2.style.boxSizing = 'border-box';
      page2.style.backgroundColor = bgColor;
      page2.style.fontFamily = '"Inter", system-ui, sans-serif';

      page2.innerHTML = `
        <div style="margin-bottom: 40px;">
          <div style="margin-bottom: 30px; position: relative; padding-left: 20px; border-left: 2px solid ${borderColor};">
            <div style="position: absolute; left: -5px; top: 6px; width: 8px; height: 8px; border-radius: 50%; background: ${mutedColor};"></div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
              <div>
                <h4 style="margin: 0; font-size: 16px; font-weight: 700; color: ${textColor};">Estudiante en Prácticas</h4>
                <p style="margin: 4px 0 10px 0; font-size: 14px; font-weight: 500; color: ${primaryColor};">PUCE – Sede Ambato</p>
              </div>
              <span style="font-size: 12px; color: ${mutedColor}; font-weight: 500; text-align: right;">Nov 2024 – Actual<br/>Ambato</span>
            </div>
            <ul style="margin: 0; font-size: 13.5px; padding-left: 15px; color: ${mutedColor}; line-height: 1.6;">
              <li style="margin-bottom: 6px;">Desarrollo y programación de software a medida utilizando tecnologías como C#, Java, JavaScript, .NET y SQL Server.</li>
              <li>Apoyo directo en trabajo de campo relacionado con la implementación de soluciones tecnológicas.</li>
            </ul>
          </div>

          <div style="position: relative; padding-left: 20px; border-left: 2px solid transparent;">
            <div style="position: absolute; left: -5px; top: 6px; width: 8px; height: 8px; border-radius: 50%; background: ${mutedColor}; border: 2px solid #fff; box-shadow: 0 0 0 1px ${borderColor};"></div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
              <div>
                <h4 style="margin: 0; font-size: 16px; font-weight: 700; color: ${textColor};">Practicante</h4>
                <p style="margin: 4px 0 10px 0; font-size: 14px; font-weight: 500; color: ${primaryColor};">Hospital Durán</p>
              </div>
              <span style="font-size: 12px; color: ${mutedColor}; font-weight: 500; text-align: right;">Feb 2024 – Jul 2024<br/>Ambato</span>
            </div>
            <ul style="margin: 0; font-size: 13.5px; padding-left: 15px; color: ${mutedColor}; line-height: 1.6;">
              <li>Apoyo en tareas administrativas, soporte técnico básico y desarrollo de funcionalidades en Java.</li>
            </ul>
          </div>
        </div>

        <div style="margin-bottom: 40px; display: grid; grid-template-columns: 1fr; gap: 20px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
            ${iconEdu}
            <h3 style="font-size: 16px; margin: 0; color: ${textColor}; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Formación Académica</h3>
          </div>
          
          <div style="border: 1px solid ${borderColor}; border-radius: 12px; padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <h4 style="margin: 0 0 5px 0; font-size: 15px; font-weight: 700; color: ${textColor};">Ingeniería en Sistemas de la Información</h4>
                <p style="margin: 0 0 8px 0; font-size: 14px; color: ${primaryColor}; font-weight: 500;">PUCE – Sede Ambato</p>
                <p style="margin: 0; font-size: 13px; color: ${mutedColor};">Ingeniero graduado. Becario por Excelencia Académica (2024).</p>
              </div>
              <span style="font-size: 12px; color: ${mutedColor}; font-weight: 500;">Feb 2022 – 2025</span>
            </div>
          </div>

          <div style="border: 1px solid ${borderColor}; border-radius: 12px; padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <h4 style="margin: 0 0 5px 0; font-size: 15px; font-weight: 700; color: ${textColor};">Autoaprendizaje Frontend & IA</h4>
                <p style="margin: 0 0 8px 0; font-size: 14px; color: ${primaryColor}; font-weight: 500;">Mentoría IA Avanzada</p>
                <p style="margin: 0; font-size: 13px; color: ${mutedColor};">Especialización en Vite.js y React mediante un plan de estudios adaptativo.</p>
              </div>
              <span style="font-size: 12px; color: ${mutedColor}; font-weight: 500;">2024 – Actualidad</span>
            </div>
          </div>

          <div style="background-color: #f8fafc; border: 1px solid ${borderColor}; border-radius: 12px; padding: 20px; display: flex; align-items: center; gap: 15px;">
            <div style="background: #ffffff; border: 1px solid ${borderColor}; border-radius: 8px; padding: 10px;">
               ${iconGlobe}
            </div>
            <div>
              <h4 style="margin: 0 0 3px 0; font-size: 15px; font-weight: 700; color: ${textColor};">Inglés Nivel B2</h4>
              <p style="margin: 0; font-size: 13px; color: ${mutedColor};">8 Niveles Completados — Pontificia Universidad Católica del Ecuador</p>
            </div>
          </div>
        </div>

        <div>
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
            ${iconCode}
            <h3 style="font-size: 16px; margin: 0; color: ${textColor}; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Stack Tecnológico</h3>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <div>
              <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: ${primaryColor}; text-transform: uppercase;">Frontend & Mobile</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">HTML5 & CSS3</span>
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">JavaScript</span>
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">React</span>
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">Vite.js</span>
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">Tailwind</span>
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">Dart</span>
              </div>
            </div>

            <div>
              <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: ${primaryColor}; text-transform: uppercase;">Backend & Base de Datos</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">C# / .NET Core</span>
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">MySQL</span>
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">Java</span>
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">Node.js</span>
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">SQL Server</span>
              </div>
            </div>

            <div>
              <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: ${primaryColor}; text-transform: uppercase;">DevOps & Inteligencia Artificial</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; color: ${textColor}; background-color: #f8fafc;">Desarrollo Asistido por IA</span>
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; color: ${textColor}; background-color: #f8fafc;">Gemini API / AI Integration</span>
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">GitLab</span>
                <span style="border: 1px solid ${borderColor}; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; color: ${textColor};">Figma</span>
              </div>
            </div>
          </div>
        </div>
      `;

      cvContainer.appendChild(page1);
      cvContainer.appendChild(page2);
      document.body.appendChild(cvContainer);

      const canvas1 = await html2canvas(page1, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const canvas2 = await html2canvas(page2, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight1 = (canvas1.height * pdfWidth) / canvas1.width;
      const pdfHeight2 = (canvas2.height * pdfWidth) / canvas2.width;

      pdf.addImage(canvas1.toDataURL('image/png'), 'PNG', 0, 0, pdfWidth, pdfHeight1);
      pdf.addPage();
      pdf.addImage(canvas2.toDataURL('image/png'), 'PNG', 0, 0, pdfWidth, pdfHeight2);
      pdf.save('CV_Edison_Gavilanes.pdf');

      document.body.removeChild(cvContainer);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Hubo un error al generar el CV. Por favor, inténtalo de nuevo.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden z-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-gemini-primary/30 bg-gemini-primary/10 backdrop-blur-md"
          >
            <span className="text-gemini-accent text-sm font-mono tracking-wider">AVAILABLE FOR WORK</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
            Edison <span className="text-transparent bg-clip-text bg-gradient-to-r from-gemini-primary to-gemini-secondary">Gavilanes</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-400 font-light">
            Ingeniero en Sistemas & Desarrollador
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Creando experiencias digitales inmersivas y soluciones tecnológicas escalables. 
            Especializado en la intersección entre diseño, código e Inteligencia Artificial.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <a href="https://wa.me/593988515225?text=Hola%20Edison,%20he%20visto%20tu%20portafolio%20y%20me%20gustaría%20contactarte." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors cursor-hover">
              <Phone size={18} />
              Contáctame
            </a>
            
            {/* Animated Download Button */}
            <button 
              onClick={generatePDF}
              disabled={isGenerating}
              className="relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-gemini-primary focus:ring-offset-2 focus:ring-offset-gemini-dark group shadow-[0_0_20px_rgba(41,98,255,0.3)] hover:shadow-[0_0_30px_rgba(41,98,255,0.6)] transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2962ff_0%,#d500f9_50%,#2962ff_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gemini-dark px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-gemini-dark/80 gap-2">
                {isGenerating ? (
                  <Loader2 size={18} className="animate-spin text-gemini-accent" />
                ) : (
                  <Download size={18} className="group-hover:animate-bounce text-gemini-accent" />
                )}
                {isGenerating ? 'Generando...' : 'Descargar CV'}
              </span>
            </button>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start pt-8 text-gray-500">
            <div className="flex items-center gap-2 hover:text-gemini-primary transition-colors cursor-pointer">
              <Phone size={16} />
              <span className="text-sm">0988515225</span>
            </div>
            <div className="flex items-center gap-2 hover:text-gemini-primary transition-colors cursor-pointer">
              <MapPin size={16} />
              <span className="text-sm">Ambato, Ecuador</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image / 3D Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gemini-primary to-gemini-secondary rounded-3xl blur-[60px] opacity-40 animate-pulse" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-gemini-card/50 backdrop-blur-sm shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/profile.jpeg" 
                alt="Edison Gavilanes" 
                className="w-full h-full object-contain scale-110 opacity-90 hover:opacity-100 transition-all duration-500"
                onError={(e) => {
                  // Fallback if user hasn't uploaded profile.jpeg yet
                  e.currentTarget.onerror = null; // Prevent infinite loop
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Crect width='800' height='800' fill='%23111827'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='100' fill='%234b5563' text-anchor='middle' dominant-baseline='middle'%3EEG%3C/text%3E%3C/svg%3E";
                }}
              />
              
              {/* Overlay Tech Elements */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-green-400">ONLINE</span>
                  </div>
                  <span className="text-xs font-mono text-white/50">ID: 1805084280</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl"
            >
              <Github className="text-white w-6 h-6" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl"
            >
              <Linkedin className="text-blue-400 w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
