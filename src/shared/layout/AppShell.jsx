import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppChooser } from "../ui/WhatsAppChooser";

export function AppShell({ children }) { return <div className="min-h-screen"><Header /><main>{children}</main><Footer /><WhatsAppChooser /></div>; }
