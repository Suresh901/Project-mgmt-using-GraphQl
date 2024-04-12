import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/ClientQueries";
import Spinner from "./Spinner";
import AddClientModal from "./AddClientModal";
import { useState } from "react";

const Clients = () => {
  const [addClientModal, setAddClientModal] = useState(false);
  const handleCloseModal = () => {
    setAddClientModal(false);
  };

  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <Spinner />;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <div className="flex justify-end mx-40">
        <button
          className="border p-2 rounded-md bg-green-500 text-white mt-10"
          onClick={() => setAddClientModal(true)}
        >
          Add Client
        </button>
      </div>
      <div className="flex justify-center p-5 w-full">
        {!loading && !error && (
          <table className=" mx-10 w-full">
            <thead>
              <tr className=" text-left text-xl ">
                <th className="p-5">Name</th>
                <th className="p-5">Email</th>
                <th className="p-5">Phone</th>
                <th className="p-5"></th>
              </tr>
            </thead>

            <tbody>
              {data.clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        )}
      </div>
      <AddClientModal
        handleCloseModal={handleCloseModal}
        addClientModal={addClientModal}
      />
    </>
  );
};

export default Clients;
