import { Menu, X } from "lucide-react";
import { useState } from "react";
import headerLogo from "../../assets/logo-mendonca-header.png";
import { projectWhatsappUrl } from "../../config/project.data";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return <header className="site-header"><div className="container header-inner">
    <a href="#inicio" className="brand" aria-label="Mendonça Advogados"><img src={headerLogo} alt="Mendonça Advogados"/></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? "nav open" : "nav"}>
      <a href="#areas" onClick={close}>Serviços</a><a href="#rural" onClick={close}>Aposentadoria rural</a><a href="#beneficios" onClick={close}>Como funciona</a><a href="#sobre" onClick={close}>Quem somos</a>
      <a className="button gold-button nav-cta" href={projectWhatsappUrl()} target="_blank" rel="noreferrer" onClick={close}>Falar agora</a>
    </nav>
  </div></header>;
}
