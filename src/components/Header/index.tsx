import { RiTranslate2 } from "react-icons/ri";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 px-5 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between h-[70px]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-yellow-300 rounded-xl flex items-center justify-center text-xl font-bold text-white">
            <RiTranslate2 size={23}/>
          </div>
          <div className="text-2xl font-bold text-slate-900 tracking-tight">
            SmartTranslator
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-slate-500 font-medium px-4 py-2 rounded-lg transition-all hover:text-slate-900 hover:bg-slate-50"
          >
            Home
          </a>
          <a
            href="#"
            className="text-slate-500 font-medium px-4 py-2 rounded-lg transition-all hover:text-slate-900 hover:bg-slate-50"
          >
            Sobre
          </a>
        </nav>
      </div>
    </header>
  );
}
