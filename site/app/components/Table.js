import { Button, Table } from "react-bootstrap";
// import formatDate from "../lib/formatDate";
// import deleteData from "../lib/deleteData";
// import getData from "../lib/getData";

export default function MyTable({ data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Foreground</th>
          <th>Background</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.username}</td>
              <td>{String(e.disabled)}</td>
              <td>{formatDate(e.created_at)}</td>
              <td>
                <Button
                  type="button"
                  variant="danger"
                  size="sm"
                  className="button--danger"
                  onClick={() => onDelete(e.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
