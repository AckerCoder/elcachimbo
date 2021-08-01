import React from 'react';

import {Card, CardContent, Typography, CardActionArea} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./product.styles.scss"

const Product = ({title, description, icon}) => {
    return <div className="product">
        <Card className="card">
            <CardActionArea className="clickable">
                <CardContent>
                    <FontAwesomeIcon icon={icon} size="3x"/>
                    <Typography className="title" variant="h6">{title}</Typography>
                    <Typography className="description">{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
}

export default Product;