import Select from "react-select";

const EditUserModal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: any;
}) => {
  return (
    <div
      className={`${
        showModal ? "flex" : "hidden"
      } justify-center pt-48 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50`}
    >
      <div className={`relative my-6 mx-auto w-1/3`}>
        <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none opacity-100">
          <div className="flex flex-col items-start justify-between p-5 b rounded-t">
            <div className="flex w-full justify-end">
              <button
                className="text-primary"
                onClick={() => setShowModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full">
              <p className="text-center text-2xl font-semibold text-accent mb-3">
                Изменить данные пользователя
              </p>
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="font-semibold">Имя</p>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2 outline-none"
                    placeholder="Введите имя"
                  />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <input
                    type="email"
                    className="w-full border rounded-lg p-2 outline-none"
                    placeholder="Введите email"
                  />
                </div>
                <div>
                  <p className="font-semibold">Разрешения</p>
                  <Select options={options} />
                </div>
                <button className="w-full bg-accent text-white rounded-lg py-3 font-semibold">
                  Изменить данные пользователя
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const options = [
  { value: "Блог", label: "Блог" },
  { value: "Аналитика", label: "Аналитика" },
  { value: "Администратор", label: "Администратор" },
  { value: "Акции", label: "Акции" },
  { value: "Модерация объявлений", label: "Модерация объявлений" },
  { value: "Тех. поддержка", label: "Тех. поддержка" },
  { value: "Обращение клиентов", label: "Обращение клиентов" },
];

export default EditUserModal;
