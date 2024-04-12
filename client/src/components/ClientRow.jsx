import { MdDelete } from "react-icons/md";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/ClientMutation";
import { GET_CLIENTS } from "../queries/ClientQueries";

const ClientRow = ({ client }) => {
  //delete client
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // refetchQueries: [{ query: GET_CLIENTS }],  //for deleting and refetching query again
    //or use appolo cache
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
  });

  return (
    <tr className="border-b">
      <td className="p-5">{client.name}</td>
      <td className="p-5">{client.email}</td>
      <td className="p-5">{client.phone}</td>
      <td className="p-5">
        <button
          className="bg-red-600 p-2 text-2xl rounded-md text-white"
          onClick={deleteClient}
        >
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
