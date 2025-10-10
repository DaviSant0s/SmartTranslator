import { CiSearch } from "react-icons/ci";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  placeholder: string;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Input({value, onChange, id, placeholder, handleSubmit}: InputProps) {
  return (
    <div className="m-auto relative bg-white rounded-2xl shadow-md border-2 border-transparent transition-all duration-300 focus-within:border-primary focus-within:shadow-primary/10 focus-within:shadow-lg">
      <input
        type="text"
        className="w-full px-6 py-3 sm:py-4 pr-16 text-[16px] sm:text-[18px] font-normal border-none rounded-2xl outline-none bg-transparent text-slate-900 placeholder-slate-400"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
      />

      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-11 h-11 bg-gradient-to-br from-primary to-primary-light border-none rounded-xl text-white cursor-pointer flex items-center justify-center transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
        id="searchBtn"
        onClick={handleSubmit}
      >
        <CiSearch size={20} fontWeight={800} style={{ strokeWidth: 1 }} />
      </button>
    </div>
  );
}
