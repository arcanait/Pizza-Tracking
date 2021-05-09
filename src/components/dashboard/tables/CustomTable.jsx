import React from 'react';
import { Table } from 'reactstrap';

export const CustomTable = ({data}) => {
  return (
    <Table responsive={true} dark>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nombre de la pizza</th>
          <th>Precio</th>
          <th>Nombre del comprador</th>
          <th>Teléfono del comprador</th>
          <th>Fecha de compra</th>
        </tr>
      </thead>
      <tbody>
        {
        data.map((row, i) => {
            return (
                <tr key={row.pizzaName? row.pizzaName : `key-Pizza-${i}`}>
                    <th scope="row">{i +1}</th>
                    <td>{row.pizzaName? row.pizzaName: '-'}</td>
                    <td>{row.pizzaPrice? row.pizzaPrice: '-'}</td>
                    <td>{row.nameBuyer? row.nameBuyer: '-'}</td>
                    <td>{row.phoneBuyer? row.phoneBuyer: '-'}</td>
                    <td>{new Date(row.date).toLocaleDateString("es-CO")}</td>
                </tr>
            )
        })
        }
      </tbody>
    </Table>
  );
}
