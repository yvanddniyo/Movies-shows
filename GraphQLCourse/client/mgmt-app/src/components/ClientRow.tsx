import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "./mutation/clientMutation";
import { GET_CLIENTS } from "./queries/ClientQueries";

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const ClientRow = ({ client }: { client: Client }) => {
  const [deleteClient, { loading, error }] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{query: GET_CLIENTS}], 
  });

  const handleDeleteClient = async () => {
    try {
      await deleteClient();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={handleDeleteClient}
          disabled={loading}
        >
          <FaTrash />
        </button>
        {error && <div style={{ color: "red" }}>{error.message}</div>}
      </td>
    </tr>
  );
};

export default ClientRow;