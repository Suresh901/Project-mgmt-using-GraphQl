import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

const AddClientModal = ({ addClientModal, handleCloseModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone);
  };

  if (!addClientModal) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[999]">
      <div className="bg-white text-black h-auto w-[400px] p-4 rounded-lg flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-full mb-5">
          <h1 className=" text-2xl font-bold">Add Clients</h1>
          <button
            className="bg-red-500 rounded-md text-white text-2xl p-2"
            onClick={handleCloseModal}
          >
            <ImCancelCircle />
          </button>
        </div>
        <form className="w-full" onSubmit={onSubmit}>
          <div className="mb-3 flex flex-col ">
            <label>Name</label>
            <input
              type="text"
              className="border-2 outline-none p-2 rounded-lg"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3 flex flex-col ">
            <label>Email</label>
            <input
              type="text"
              className="border-2 outline-none p-2 rounded-lg"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 flex flex-col ">
            <label>Phone</label>
            <input
              type="text"
              className="border-2 outline-none p-2 rounded-lg"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="cursor-pointer text-white flex items-center justify-center">
            <button
              type="submit"
              // data-bs-dismiss="modal"
              className="bg-green-500 px-4 py-1 rounded-md "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClientModal;
