import { Table } from "react-bootstrap";
// import formatDate from "../lib/formatDate";

export default function MyTable({ data }) {
  const tableData = data.results.colorCombos;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Foreground</th>
          <th>Background</th>
          <th>Sample</th>
          <th>AA</th>
          <th>AAA</th>
          <th>Ratio</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((e, i) => {
          return (
            <tr key={i}>
              <td>{e.colorOne}</td>
              <td>{e.colorTwo}</td>
              <td bgColor={e.colorTwo} style={{ color: e.colorOne }}>
                The quick brown fox jumps over the lazy dog
              </td>
              <td>{e.results.results.AA}</td>
              <td>{e.results.results.AAA}</td>
              <td>{e.results.results.ratio}</td>
            </tr>
            // <tr key={e.id}>
            //   <td>{e.id}</td>
            //   <td>{e.username}</td>
            // </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
