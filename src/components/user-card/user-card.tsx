import { useState, useRef, useEffect } from "react";

interface UserProps {
  name: string;
  email: string;
  permissions: string[];
  image: string;
  setShowEdit: () => void;
  setShowDelete: () => void;
}

const UserCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropDown(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [showDropDown]);

  return (
    <div className="p-5 flex flex-row justify-between w-full relative">
      <div className="flex flex-row space-x-5">
        <img
          className="rounded-full object-cover w-14 h-14"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center space-x-3">
            <p className="text-xl font-semibold">Артем Иванов</p>
            <p className="text-gray-500">example@email.com</p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <div className="border border-gray-300 text-gray-400 rounded-lg px-3 text-sm">
              Блог
            </div>
            <div className="border border-gray-300 text-gray-400 rounded-lg px-3 text-sm">
              Модерация обьявлении
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowDropDown(true)}
        className="text-gray-500 self-start content-end hover:text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </button>
      <div
        ref={dropdownRef}
        className={`flex flex-col overflow-hidden rounded-lg absolute right-3 top-10 shadow-xl ${
          showDropDown ? "block" : "hidden"
        }`}
      >
        <button className="py-2 px-3 hover:bg-slate-100 hover:text-accent">
          Редактировать
        </button>
        <button className="py-2 px-3 hover:bg-slate-100 hover:text-red-500">
          Удалить
        </button>
      </div>
    </div>
  );
};

export default UserCard;
