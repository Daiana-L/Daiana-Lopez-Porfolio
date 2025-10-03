import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { PiGithubLogoBold, PiLinkedinLogoBold } from 'react-icons/pi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSending(false);
          setFormData({ email: "", message: "" });
          toast.success("¡Mensaje enviado!");
        },
        (error) => {
          setSending(false);
          console.error("Error al enviar el mensaje:", error);
          toast.error("Error al enviar el mensaje");
        }
      );
  };

  return (
    <div>
      <section id="contact" className="py-8 sm:py-10 bg-gray-900 scroll-mt-24 px-4 sm:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center transform md:scale-[0.95] md:origin-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-sky-500">
            Contáctame
          </h2>

          {/* Formulario */}
          <form
            onSubmit={sendEmail}
            className="bg-gray-800 w-full min-h-[40vh] sm:min-h-[45vh] p-6 sm:p-8 rounded-lg shadow-lg flex flex-col gap-6 sm:gap-8"
          >
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-sky-500 w-full"
            />
            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-sky-500 w-full"
            />
            <button
              type="submit"
              disabled={sending}
              className={`bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition w-full sm:w-auto mx-auto cursor-pointer ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {sending ? "Enviando..." : "Enviar"}
            </button>
          </form>

          {/* Cartas */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/daiana-celeste-lopez/"
              target="_blank"
              className="flex flex-col items-center justify-center gap-2 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition w-full sm:w-auto"
            >
              <PiLinkedinLogoBold size={40} />
              <span className="font-semibold text-white">Mi LinkedIn</span>
            </a>
            <a
              href="https://github.com/Daiana-L"
              target="_blank"
              className="flex flex-col items-center justify-center gap-2 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition w-full sm:w-auto"
            >
              <PiGithubLogoBold size={40} />
              <span className="font-semibold text-white">Mi GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </section>
    </div>
  );
}

export default Contact;
