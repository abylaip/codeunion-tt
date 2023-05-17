import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import UserCard from "../user-card/user-card";
import CreateUserModal from "../create-user-modal/create-user-modal";
import { IUser } from "../../types";

export const UserList = () => {
  const [showCreate, setShowCreate] = useState(false);
  const users: IUser[] = useSelector((state: RootState) => state.users.users);

  return (
    <div className="bg-white rounded-2xl">
      <div className="flex flex-row justify-between items-center py-3 px-5">
        <p className="text-2xl font-semibold">Команда</p>
        <div className="flex flex-row space-x-3 items-center">
          <button>
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button
            onClick={() => setShowCreate(true)}
            className="bg-accent text-white py-2 px-4 rounded-2xl"
          >
            Добавить пользователя
          </button>
        </div>
      </div>
      <div className="h-[0.2px] bg-gray-300 w-full" />
      {users.map((item, key) => (
        <UserCard
          key={key}
          name={item.name}
          email={item.email}
          permissions={item.permissions}
          image={item.image}
        />
      ))}
      {showCreate && (
        <CreateUserModal setShowModal={setShowCreate} showModal={showCreate} />
      )}
    </div>
  );
};
