import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact | QHM Law Firm",
  description: "Contact QHM Law Firm for corporate legal counsel in Saudi Arabia.",
};

export default function Contact() {
  return <ContactPage />;
}
