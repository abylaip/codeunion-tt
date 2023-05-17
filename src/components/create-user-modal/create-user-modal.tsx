import { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/actions/user-actions";
import { IUser } from "../../types";
import { useFetch } from "../../hooks/useFetch";
import { RootState } from "../../store/store";

const CreateUserModal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: any;
}) => {
  const dispatch = useDispatch();
  const users: IUser[] = useSelector((state: RootState) => state.users.users);
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    permissions: [""],
    image: "",
  });
  const [validation, setValidation] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { data, error } = useFetch<any>(
    `https://api.unsplash.com/photos/random?count=1`,
    {
      headers: {
        Authorization:
          "Client-ID " + "xsZyshRcRf2p5e9aVDYjX51WBMIMda2HPwHOLh_EA0M",
      },
    }
  );
  let permissions: string[] = [];

  useEffect(() => {
    if (users.some((item) => item.email === user.email) === true) {
      setValidation(false);
      setErrorMessage("Такой email уже существует");
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email) === false
    ) {
      setValidation(false);
      setErrorMessage("Неправильный формат");
    } else {
      setValidation(true);
      setErrorMessage("");
    }
  }, [user]);

  const handleSelectChange = (selected: any) => {
    if (selected.length > 0) {
      permissions = selected.map((item: any) => item.value);
      setUser({ ...user, permissions: permissions });
    } else {
      setUser({ ...user, permissions: [] });
    }
  };

  const handleAddUser = () => {
    if (!error && data && validation) {
      const newUser = { ...user, image: data[0].urls.full };
      dispatch(addUser(newUser));
      setShowModal(false);
    }
  };

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
                Добавить пользователя
              </p>
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="font-semibold">Имя</p>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2 outline-none"
                    value={user.name}
                    placeholder="Введите имя"
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </div>
                <div>
                  <p className="font-semibold">
                    Email{" "}
                    <span className="text-red-500 text-sm font-normal">
                      {errorMessage}
                    </span>
                  </p>
                  <input
                    type="email"
                    className={`w-full border rounded-lg p-2 outline-none ${
                      !validation && "border-red-500"
                    }`}
                    placeholder="Введите email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <p className="font-semibold">Разрешения</p>
                  <Select
                    options={options}
                    isMulti
                    onChange={(e) => handleSelectChange(e)}
                  />
                </div>
                <button
                  onClick={handleAddUser}
                  className="w-full bg-accent text-white rounded-lg py-3 font-semibold"
                >
                  Добавить пользователя
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

export default CreateUserModal;

const asd = [
  {
    id: "TKj8nFF6_w0",
    slug: "TKj8nFF6_w0",
    created_at: "2022-10-21T09:12:32Z",
    updated_at: "2023-05-15T00:00:18Z",
    promoted_at: "2023-04-22T11:40:04Z",
    width: 4016,
    height: 6016,
    color: "#f3f3f3",
    blur_hash: "LMQJWSV?_N-=ozkCoKae_Nxu8_IU",
    description: null,
    alt_description: "a black umbrella with pink flowers on it",
    urls: {
      raw: "https://plus.unsplash.com/premium_photo-1666277012945-bb8a546b550e?ixid=M3wyNzcwMzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQzMjI0NDR8\u0026ixlib=rb-4.0.3",
      full: "https://plus.unsplash.com/premium_photo-1666277012945-bb8a546b550e?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3wyNzcwMzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQzMjI0NDR8\u0026ixlib=rb-4.0.3\u0026q=85",
      regular:
        "https://plus.unsplash.com/premium_photo-1666277012945-bb8a546b550e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNzcwMzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQzMjI0NDR8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
      small:
        "https://plus.unsplash.com/premium_photo-1666277012945-bb8a546b550e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNzcwMzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQzMjI0NDR8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
      thumb:
        "https://plus.unsplash.com/premium_photo-1666277012945-bb8a546b550e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wyNzcwMzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQzMjI0NDR8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/unsplash-premium-photos-production/premium_photo-1666277012945-bb8a546b550e",
    },
    links: {
      self: "https://api.unsplash.com/photos/TKj8nFF6_w0",
      html: "https://unsplash.com/photos/TKj8nFF6_w0",
      download:
        "https://unsplash.com/photos/TKj8nFF6_w0/download?ixid=M3wyNzcwMzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQzMjI0NDR8",
      download_location:
        "https://api.unsplash.com/photos/TKj8nFF6_w0/download?ixid=M3wyNzcwMzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQzMjI0NDR8",
    },
    likes: 20,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "zKou8F1Vm1o",
      updated_at: "2023-05-16T17:42:09Z",
      username: "evieshaffer",
      name: "Evie S.",
      first_name: "Evie",
      last_name: "S.",
      twitter_username: "evies",
      portfolio_url: "http://evies.com",
      bio: 'Lover of art and nature. All work done in-camera. \r\n"We see according to habits.  The role of art is to wrest us free of such habits." ',
      location: "U.S.A.",
      links: {
        self: "https://api.unsplash.com/users/evieshaffer",
        html: "https://unsplash.com/@evieshaffer",
        photos: "https://api.unsplash.com/users/evieshaffer/photos",
        likes: "https://api.unsplash.com/users/evieshaffer/likes",
        portfolio: "https://api.unsplash.com/users/evieshaffer/portfolio",
        following: "https://api.unsplash.com/users/evieshaffer/following",
        followers: "https://api.unsplash.com/users/evieshaffer/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-fb-1515003070-191da6a69ab7.jpg?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
        medium:
          "https://images.unsplash.com/profile-fb-1515003070-191da6a69ab7.jpg?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
        large:
          "https://images.unsplash.com/profile-fb-1515003070-191da6a69ab7.jpg?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128",
      },
      instagram_username: "evieshaffer",
      total_collections: 8,
      total_likes: 141,
      total_photos: 324,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: "evieshaffer",
        portfolio_url: "http://evies.com",
        twitter_username: "evies",
        paypal_email: null,
      },
    },
    exif: {
      make: null,
      model: null,
      name: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      name: null,
      city: null,
      country: null,
      position: { latitude: null, longitude: null },
    },
    views: 0,
    downloads: 0,
  },
];
