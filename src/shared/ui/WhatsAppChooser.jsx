import { MessageCircle } from "lucide-react";
import { projectWhatsappUrl } from "../../config/project.data";

export function WhatsAppChooser() {
  return <a className="floating-whatsapp" href={projectWhatsappUrl()} target="_blank" rel="noreferrer" aria-label="Falar com a equipe pelo WhatsApp no número 82 3316-0007">
    <MessageCircle/><span>Fale conosco</span>
  </a>;
}
