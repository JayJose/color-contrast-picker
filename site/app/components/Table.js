import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const sample = "The quick brown fox jumps over the lazy dog";

export default function MyTable({ data }) {
  const tableData = data.results.colorCombos;
  return (
    <>
      <Table variant="simple" colorScheme="black" size={"sm"}>
        <colgroup>
          <col span="1" style={{ width: "25%" }} />
          <col span="1" style={{ width: "25%" }} />
          <col span="1" style={{ width: "50%" }} />
        </colgroup>
        <Thead bgColor="black">
          <Tr>
            <Th color={"white"}>Foreground</Th>
            <Th color={"white"}>Background</Th>
            <Th color={"white"}>Sample</Th>
            <Th color={"white"}>Ratio</Th>
            <Th color={"white"}>AA</Th>
            <Th color={"white"}>AAA</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((e, i) => (
            <Tr key={i}>
              <Td> {e.colorOne}</Td>
              <Td>{e.colorTwo}</Td>
              <Td bg={e.colorTwo} color={e.colorOne}>
                {sample}
              </Td>
              <Td>{e.results.results.ratio}</Td>
              <Td>{e.results.results.AA}</Td>
              <Td>{e.results.results.AAA}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
