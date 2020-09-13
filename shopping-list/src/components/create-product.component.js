import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CreateProduct extends Component{
    render(){
        return(<div class="form-wrapper">
        <Form>
            <Form.Group controlId="ProductName">
                <Form.Label>Name of the Product</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>

            <Form.Group controlId="Product Price">
                <Form.Label>Name of the Product</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>

            <Form.Group controlId="Product Quntity">
                <Form.Label>Name of the Product</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>

            <Button variant="danger" size="lg" block="block" type="submit">
                Add Product
            </Button>
        </Form>   
            </div>
        );
    }
        
    
} 