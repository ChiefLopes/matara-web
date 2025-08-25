// app/page.js
import { redirect } from "next/navigation";

function RootPage() {
  redirect("/"); // or '/dashboard' or whatever page you have
}

export default RootPage;
