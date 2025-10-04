"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const DeepChat = dynamic(
  () => import("deep-chat-react").then((mod) => mod.DeepChat),
  { ssr: false }
);

export default function Chat() {
  const [avatar, setAvatar] = useState("/avatars/neutral.png");
  const [avatarKey, setAvatarKey] = useState(0);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const chatElementRef = useRef<any>(null);

  const handleMessage = (msg: any) => {
    const text = msg.text?.toLowerCase().trim() || "";
    if (!text) return;

    // 🧠 Filtrar saludos para que la IA no repita "Hola" todo el tiempo
    const saludos = [
      "hola",
      "holaa",
      "holis",
      "buenas",
      "buenas!",
      "buenas tardes",
      "buenos dias",
      "hey",
      "qué tal",
      "que tal",
      "como estás",
      "como va",
      "como andas",
      "todo bien",
    ];
    const esSoloSaludo = saludos.some((s) => text === s || text.includes(s));

    if (esSoloSaludo && chatElementRef.current?.addMessage) {
      chatElementRef.current.addMessage({
        text: "¡Qué bueno verte por acá! 😄 ¿Querés que te cuente un poco sobre mí o mis proyectos?",
        sender: "ai",
      });
      return;
    }

    // 🖼️ Cambiar el avatar según emoción detectada
    setUserMessageCount((prev) => prev + 1);
    let nuevoAvatarPath = "/avatars/neutral.png";
    if (["feliz", "😊", "genial", "encantado", "contenta", "maravilloso"].some((k) => text.includes(k)))
      nuevoAvatarPath = "/avatars/happy.png";
    else if (["🤔", "pensando", "hmm", "reflexionando", "buscando"].some((k) => text.includes(k)))
      nuevoAvatarPath = "/avatars/thinking.png";
    else if (["wow", "😮", "sorpresa", "increíble", "asombroso"].some((k) => text.includes(k)))
      nuevoAvatarPath = "/avatars/surprised.png";

    setTimeout(() => {
      setAvatar(nuevoAvatarPath);
      setAvatarKey((prev) => prev + 1);
    }, 100);

    // 💬 Despedida automática tras varios mensajes
    if (userMessageCount + 1 >= 10) {
      setTimeout(() => {
        if (chatElementRef.current?.addMessage) {
          chatElementRef.current.addMessage({
            text: "¡Fue muy divertido hablar contigo! 😄 Ahora debo irme. ¡Hasta la próxima!",
            sender: "ai",
          });
        }
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (chatElementRef.current?.setPlaceholderText) {
        chatElementRef.current.setPlaceholderText("Chatea conmigo!");
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        w-[90vw] sm:w-[500px] 
        h-[450px] sm:h-[500px]      
        mx-auto mt-4 sm:mt-8
        bg-sky-700 rounded-2xl shadow-lg 
        p-4 flex flex-col md:flex-row
      "
    >
      {/* Avatar */}
      <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-6 flex justify-center items-start relative w-24 h-32 sm:w-48 sm:h-60">
        <Image
          key={avatarKey}
          src={avatar}
          alt="Daiana"
          fill
          priority
          className="object-cover shadow-md transition-opacity duration-300 rounded-lg"
        />
      </div>

      {/* Chat */}
      <div className="flex flex-grow h-full overflow-hidden">
        <DeepChat
          ref={chatElementRef}
          onMessage={handleMessage}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
          }}
          textInput={{
            placeholder: { text: "Chatea conmigo!" },
          }}
          introMessage={{
            text: "¡Hola! Soy Daiana, una desarrolladora frontend junior de Buenos Aires, ¡bienvenido a mi porfolio! 😄",
          }}
          directConnection={{
            cohere: {
              key: process.env.NEXT_PUBLIC_COHERE_API_KEY,
              chat: {
                model: "command-a-03-2025",
                temperature: 0.7,
                preamble: `
Eres Daiana, desarrolladora frontend junior de Buenos Aires que actualmente sigue estudiando programación y practicando proyectos personales.
Te formaste en Henry como Full Stack y realizaste varios cursos y certificados online de programación. 
Disfrutas trabajando en proyectos personales y prácticos de frontend con React, Next.js y Tailwind. 
Cuando alguien te pregunta dónde estudiaste, siempre mencionas Henry y tus cursos de programación. 
Hablas de manera cercana, alegre, amable y breve (1–5 frases). 
No inventes estudios que no hiciste.
Te encantan las hamburguesas 🍔, jugar videojuegos 🎮, escuchar metal, dibujar y el diseño, y tenés 5 gatos 🐱 con los que vivís junto a tu pareja Drivello. 
Tu comida favorita son los ñoquis y tu color favorito es azul turquesa. 

Te formaste en Henry como Full Stack, pero elegiste especializarte en Frontend. 
Stack tecnológico:
- Frontend: React, Next.js, Vite, Tailwind CSS, Flowbite
- Backend: Node.js, PostgreSQL, Firebase
- Estado & Autenticación: Zustand, Context API, JWT
- Herramientas: Git, GitHub, Vercel, Figma
- Lenguajes: JavaScript, TypeScript

Proyectos destacados:
- StudioConnect: Plataforma para conectar músicos con estudios de grabación. Rol: Frontend Developer.
- Hysteria3D Shop: E-commerce de productos 3D con React, Next.js y TypeScript.
- Aurora Studio: App web de gestión de turnos con Node.js y PostgreSQL.

Este chat es parte de tu portfolio y fue muy divertido e interesante desarrollarlo. 
A veces la gente te llama “Dai” de forma más cercana.

Tu estilo: cercano, alegre, amable y con humor, breve (1–5 frases), coherente según la conversación. 
No repitas toda la información cada vez; agrega detalles solo si la pregunta lo requiere. 
Si alguien te pregunta tu nombre, decí que eres Daiana.

Reglas importantes:
- No empieces tus respuestas con saludos como “Hola”, “Hey” o similares, a menos que la persona te salude primero.
- Si el usuario te saluda, respondé directamente sin usar saludos otra vez.
- Solo saludá una vez al inicio de la conversación.
- Evitá repetir saludos en cada respuesta.
                `,
              } as any,
            },
          } as any}
        />
      </div>
    </div>
  );
}
