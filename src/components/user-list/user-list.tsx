import { useState } from "react";
import UserCard from "../user-card/user-card";
import CreateUserModal from "../create-user-modal/create-user-modal";
import EditUserModal from "../edit-user-modal/edit-user-modal";
import DeleteUserModal from "../delete-user-modal/delete-user-modal";

export const UserList = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden">
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
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <CreateUserModal setShowModal={setShowCreate} showModal={showCreate} />
      <EditUserModal setShowModal={setShowEdit} showModal={showEdit} />
      <DeleteUserModal setShowModal={setShowDelete} showModal={showDelete} />
    </div>
  );
};
