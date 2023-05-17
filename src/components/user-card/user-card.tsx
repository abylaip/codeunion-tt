import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/actions/user-actions";
import DeleteUserModal from "../delete-user-modal/delete-user-modal";

interface UserProps {
  name: string;
  email: string;
  permissions: string[];
  image: string;
  setShowEdit: any;
  setUser: any;
}

const UserCard = (props: UserProps) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDelete, setShowDelete] = useState(false);
  const dispatch = useDispatch();

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

  const handleDeleteUser = () => {
    dispatch(deleteUser(props.email));
  };

  return (
    <div className="p-5 flex flex-row justify-between w-full relative">
      <div className="flex flex-row space-x-5">
        <img
          className="rounded-full object-cover w-14 h-14"
          src={props.image}
          alt=""
        />
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center space-x-3">
            <p className="text-xl font-semibold">{props.name}</p>
            <p className="text-gray-500">{props.email}</p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            {props.permissions.map((item, key) => (
              <div
                key={key}
                className="border border-gray-300 text-gray-400 rounded-lg px-3 text-sm hover:border-purple-500 hover:text-purple-500 cursor-pointer"
              >
                {item}
              </div>
            ))}
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
        className={`flex flex-col overflow-hidden rounded-lg absolute right-3 bg-white top-10 shadow-xl ${
          showDropDown ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            props.setUser(props);
            props.setShowEdit(true);
          }}
          className="py-2 px-3 hover:bg-slate-100 hover:text-accent"
        >
          Редактировать
        </button>
        <button
          onClick={() => {
            handleDeleteUser();
            setShowDelete(true);
          }}
          className="py-2 px-3 hover:bg-slate-100 hover:text-red-500"
        >
          Удалить
        </button>
      </div>
      <DeleteUserModal setShowModal={setShowDelete} showModal={showDelete} />
    </div>
  );
};

export default UserCard;
