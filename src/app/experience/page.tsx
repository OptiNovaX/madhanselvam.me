import { permanentRedirect } from "next/navigation";

// Detailed experience now lives on /about; keep old links working.
export default function Experience() {
  permanentRedirect("/about");
}
