import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { createBatch } from '../../../scripts/createBatch';
import { PaginationTable } from './PaginationTable';

export const CustomTable = ({data}) => {

  const rowsPerPage = 5;
  const [dataIndex, setDataIndex] = useState(0);
  const [dataTable] = useState(
    createBatch(data.length, data, [], rowsPerPage, 0)
  );

  return (
    <>
      <Table responsive={true}>
        <thead>
          <tr>
            <th>Nombre de la pizza</th>
            <th>Precio</th>
            <th>Nombre del comprador</th>
            <th>Teléfono del comprador</th>
            <th>Fecha de compra</th>
          </tr>
        </thead>
        <tbody>
          {
            dataTable[dataIndex].map((row, i) => 
              (
                <tr key={`key-Pizza-${i}`}>
                    <td>{row.pizzaName? row.pizzaName: '-'}</td>
                    <td>{row.pizzaPrice? row.pizzaPrice: '-'}</td>
                    <td>{row.nameBuyer? row.nameBuyer: '-'}</td>
                    <td>{row.phoneBuyer? row.phoneBuyer: '-'}</td>
                    <td>{new Date(row.date).toLocaleDateString("es-CO")}</td>
                </tr>
              )
            )   
          }
        </tbody>
      </Table>
      <div className="center-item">
        <PaginationTable 
          dataLength={data.length}
          setDataIndex={setDataIndex}
          dataIndex={dataIndex}
        />
      </div>
    </>
  );
}
