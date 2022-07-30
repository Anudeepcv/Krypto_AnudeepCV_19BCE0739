import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./ProductDetailPage.css";
import {Link} from 'react-router-dom';

export default function ProductDetailPage(){
    return(
        <div>
        <head>
        <meta charSet='UTF-8'></meta>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        </head>
        <body>
        <div className='navbar bg-primary'>
            <div>
                <h2>ShopKart.</h2>
            </div>
            <div className='pl1'>
                <Link to='/products'><a className="pl2" href='#'>Products</a></Link>
                <Link to="/"><a className="pl3">Login</a></Link>
                <Link to='/cart'><i color='black' className='fa fa-shopping-cart'></i></Link>
            </div>
        </div>
        <div className='main row'>
            <div className='prodimg col'>
                <img className="prodimage" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/attachment_89435743.jpeg?auto=format&q=60&fit=max&w=930" />
            </div>
            <div className='prod1 col'>
                <div className='prod2 row'>
                    <div className='prod3 col'>
                        <h4>Formal T-shirt for Men</h4>
                    </div>
                    <div className='prod4 col'>
                        <i className='fa fa-heart'></i>
                    </div>
                </div>
                <div className="prod5 row">
                    A casual/ formal T-shirt which is specially designed for men who prefer to great dresses.Its a combo of 2 T-shirts of Black and White colours.
                </div>
                <div className='prod6 row'>
                    <h5>&#8377; 200</h5>
                </div>
                <div className='prod7 row col'>
                    <div className='prod8 col'>
                        <button className='btn1'>Buy Now</button>
                    </div>
                    <div className='prod9 col'>
                        <button className='btn2'>Add to Basket</button>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </div>
    );
}