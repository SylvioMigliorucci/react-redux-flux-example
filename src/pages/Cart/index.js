import React from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
      <Container>
          <ProductTable>
            <thead>
                <tr>
                    <th></th>
                    <th>nome</th>
                    <th>Preço</th>
                    <th>qtde</th>
                    <th>subtotal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <td>
                    <img src="https://images-americanas.b2w.io/produtos/01/00/image/57907/1/57907134_1GG.jpg" alt="tenis"/>

                </td>
                <td>
                    <strong>Microfone 11</strong>
                </td>
                <td>
                    R$132,31
                </td>
                <td>
                    <button type="button" size={20} color="7159c1">
                        <MdRemoveCircleOutline></MdRemoveCircleOutline>
                    </button>
                    <input type="number" readOnly value={1} width="10px"/>
                    <button type="button" size={20} color="7159c1">
                        <MdAddCircleOutline></MdAddCircleOutline>
                    </button>
                </td>
                <td>
                    R$246,42
                </td>
                <td>
                    <button type="button">
                        <MdDelete size={20} color="9204c1"></MdDelete>
                    </button>
                </td>
            </tbody>
          </ProductTable>
          <footer>
              <button type="button"> Fnalizar pedidos</button>

                <Total>
                    <span>Total</span>
                    <strong>R$1240,23</strong>
                </Total>
          </footer>

      </Container>
  );
}
