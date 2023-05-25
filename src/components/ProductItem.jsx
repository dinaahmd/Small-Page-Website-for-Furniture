import React, { Component } from "react";
// import x from "../assets/pexels-atbo-245208.jpg";
// import y from "../assets/pexels-mark-mccammon-1080721.jpg";
// import z from "../assets/pexels-pixabay-265004.jpg";
// import q from "../assets/pexels-pixabay-509922.jpg";
import { Button, Card } from "react-bootstrap";

export class ProductItem extends Component {
    render() {
        // destructuring props is object
        let { product } = this.props;
        return (
            <div className="col-sm-6 col-md-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ height: '300px' }} variant="top" src={ product.src} />
                    <Card.Body>
                        <Card.Title>{product.productName}</Card.Title>
                        <Card.Text>
                            {product.describe}
                        </Card.Text>
                        <Card.Text>Price : {product.price}</Card.Text>
                        <Card.Text>quantity : {product.quantity}</Card.Text>
                        <Button variant="warning">Show More</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}