// src/components/layout/Nav.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-slate-800 flex gap-4">
      {/* O Link substitui o <a href="..."> para evitar o refresh da página */}
      <Link hide-focus="true" to="/" className="text-sky-400 hover:underline">
        Login
      </Link>
      <Link to="/home" className="text-sky-400 hover:underline">
        Home
      </Link>
      <Link to="/sobre" className="text-sky-400 hover:underline">
        Sobre
      </Link>
    </nav>
  );
}
