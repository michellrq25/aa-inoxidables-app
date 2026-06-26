// src/app/admin/page.js
import { redirect } from "next/navigation";

export default function AdminPage() {
  // Redirect to the static Decap CMS page (preserves hash on client side)
  redirect("/admin/index.html");
  return null; // This line is never reached
}
