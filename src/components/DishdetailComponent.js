import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dish from './MenuComponent';
// import reactstrap from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
        dish;
    }

    renderDish(dish) {
        if (dish != null) {
            var com = dish.comments.map((comment) => { 
                return (
                    <li>
                        <p>{comment.comment}</p>  
                        <p><strong>--{comment.author}, {comment.date}</strong></p>
                    </li>
                ); 
            });
            
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" object src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {com}
                        </ul>
                    </div>
                </div>
            )}
        else {
            return(
                <div></div>
            );}
    }

    render() {
        return (
            <div className="container">
                {this.renderDish(this.props.dish)}   
            </div>
        )
    }
}

export default DishDetail;