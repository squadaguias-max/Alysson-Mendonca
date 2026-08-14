import { templateConfig as site } from "../../config/template.config";
import footerLogo from "../../assets/logo-mendonca-footer.png";

export function Footer() {
  return <footer><div className="container footer-grid">
    <div><img className="footer-logo-transparent" src={footerLogo} alt="Mendonça Advogados"/><p>Atendimento presencial em Maceió, mediante agendamento, e atendimento digital em todo o Brasil.</p><p>{site.location.address}.</p></div>
    <div><b>NAVEGAÇÃO</b><a href="#areas">Áreas de atuação</a><a href="#sobre">Quem somos</a><a href="#contato">Contato</a></div>
    <div><b>INSTITUCIONAL</b><span>{site.professional.legalName}</span><span>CNPJ {site.professional.cnpj}</span><span>{site.professional.oab}</span><a href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp: {site.phoneLabel}</a></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Mendonça Advogados.</span><span>Conteúdo meramente informativo, sem promessa de resultados.</span></div><a className="developed-by" href="https://somos4juris.com.br/" target="_blank" rel="noopener noreferrer">Desenvolvido por 4Juris</a></footer>;
}
