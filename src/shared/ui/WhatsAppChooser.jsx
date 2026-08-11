import { MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { projectData } from "../../config/project.data";
import { WHATSAPP_CHOOSER_EVENT } from "./whatsappChooser.events";

export function WhatsAppChooser() {
  const [open, setOpen] = useState(false);
  const message = encodeURIComponent(projectData.contact.whatsappMessage);
  const options = [
    { label: "WhatsApp 1", number: "+55 82 9982-3468", digits: projectData.contact.whatsapp },
    { label: "WhatsApp 2", number: "+55 82 9620-0217", digits: projectData.contact.whatsappSecondary },
  ];

  useEffect(() => {
    const show = () => setOpen(true);
    const escape = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener(WHATSAPP_CHOOSER_EVENT, show);
    window.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener(WHATSAPP_CHOOSER_EVENT, show);
      window.removeEventListener("keydown", escape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return <>
    <button className="floating-whatsapp" type="button" onClick={() => setOpen(true)} aria-label="Escolher número de WhatsApp">
      <MessageCircle/><span>Fale conosco</span>
    </button>
    {open && <div className="whatsapp-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
      <section className="whatsapp-modal" role="dialog" aria-modal="true" aria-labelledby="whatsapp-modal-title">
        <button className="whatsapp-modal-close" type="button" onClick={() => setOpen(false)} aria-label="Fechar"><X/></button>
        <span className="eyebrow">Atendimento</span>
        <h2 id="whatsapp-modal-title">Escolha um WhatsApp</h2>
        <p>Selecione um dos números abaixo para iniciar sua conversa com a equipe.</p>
        <div className="whatsapp-options">
          {options.map((option) => <a key={option.digits} href={`https://wa.me/${option.digits}?text=${message}`} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            <span className="whatsapp-option-icon"><Phone/></span><span><b>{option.label}</b><small>{option.number}</small></span><MessageCircle/>
          </a>)}
        </div>
      </section>
    </div>}
  </>;
}
