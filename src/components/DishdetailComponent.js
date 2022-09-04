import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dish from './MenuComponent';
// import reactstrap from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
        dish;
    }

    renderComments(comms) {
        var com = comms.map((comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>  
                    <p><strong>--{comment.author}, {comment.date}</strong></p>
                </li>
            ); 
        });
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {com}
                </ul>
            </div>
        ) 
    };

    renderDish(dish) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}   
                </div>
            </div>
        )
    }
}

export default DishDetail;