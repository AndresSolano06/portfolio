import Navbar from "../components/Navbar";
import MainPage from "../components/MainPage";

export default function Home() {
  return (
    <div>
      <Navbar /> {/* ✅ Agregamos el navbar aquí */}
      <MainPage /> {/* ✅ Toda la estructura está en MainPage */}
    </div>
  );
}
