export const WHATSAPP_CHOOSER_EVENT = "open-whatsapp-chooser";

export function openWhatsAppChooser() {
  window.dispatchEvent(new CustomEvent(WHATSAPP_CHOOSER_EVENT));
}
