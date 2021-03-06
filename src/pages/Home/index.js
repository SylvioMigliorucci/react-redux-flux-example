import React, {Component} from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api'
import { ProductList } from './styles';
import {formatPrice} from '../../util/format'
export default class Home extends Component{

    state = {
        products: []
    }

    async componentDidMount() {
        const response = await api.get('http://www.mocky.io/v2/5d27671a320000ff2a71bb23');
        console.log(response);
        const data = response.data.products.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }))


        this.setState({products: data});
    }


    render() {
        const { products } = this.state;

        return (
            <ProductList>
                { products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <strong> {product.title} </strong>
                        <span> {product.priceFormatted} </span>

                        <button type="button">
                            <div>
                                <MdAddShoppingCart size={16} color="#FFF" />
                            </div>
                            <span> ADICIONAR AO CARRINHO</span>
                        </button>
                    </li>
                ))}
            </ProductList>
    );
    }
}
