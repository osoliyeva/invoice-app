import Editor from "../components/Editor";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function RootLayouts() {
  return (
    <>
      <Navbar />
      <Editor />
      <main>
        <Outlet />
      </main>
      <Toaster expand={false} position="top-center" richColors />
    </>
  );
}
