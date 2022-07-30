import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import "./Cart.css";

export default function Cart(){
    return(
        <div className='man'>
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
                        <span className='cart-count badge badge-warning' >2</span>
                    </div>
                </div>
                <div className='row'>
                <div className='col'>
                    <div className='mc1 col'>
                        <div className='mc'>
                            <div>
                                <h4>My Cart</h4>
                            </div>
                            <div className='item row'>
                                <div className='itemimg col'>
                                    <img className='prodimg' src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/attachment_89435743.jpeg?auto=format&q=60&fit=max&w=930" />
                                </div>
                                <div className='col'>
                                    <div>Formal T-shirt for Men</div>
                                    <div className='row'>
                                        <div className='col'>&#8377; 350</div>
                                        <div className='col'>
                                            <a href='#'><i className='abcd fa fa-trash'></i></a>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='abc1 col'><a href='#'>+</a></div>
                                        <div className='abc2 col'>
                                            <form>
                                                <input type="number" value="1"></input>
                                            </form>
                                        </div>
                                        <div className='abc3 col'><a href="#">-</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className='item row'>
                                <div className='itemimg col'>
                                    <img className='prodimg' src="https://assets.ajio.com/medias/sys_master/root/20220121/ihND/61ea59caaeb2695cdd2444ac/-473Wx593H-461085141-blue-MODEL.jpg" />
                                </div>
                                <div className='col'>
                                    <div>Formal T-shirt for Men</div>
                                    <div className='row'>
                                        <div className='col'>&#8377; 350</div>
                                        <div className='col'>
                                            <a href='#'><i className='abcd fa fa-trash'></i></a>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='abc1 col'><a href='#'>+</a></div>
                                        <div className='abc2 col'>
                                            <form>
                                                <input type="number" value="1"></input>
                                            </form>
                                        </div>
                                        <div className='abc3 col'><a href="#">-</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className='btn1'>
                                <button className='btn btn-primary' href="#">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pd col'>
                    <div>
                        <h4 className='h41'>Price Details</h4>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='price1'>
                                Price
                            </div>
                            <div className='price2'>
                                Discount Price
                            </div>
                            <div className='price3'>
                                Delivery Charge
                            </div> 
                        </div>
                        <div className='col'>
                            <div className='num1'>
                                2150
                            </div>
                            <div className='num2'>
                                100
                            </div>
                            <div className='num3'>
                                50
                            </div> 
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='row'>
                        <div className=' price4 col'>
                            Total
                        </div>
                        <div className='num4 col'>
                            2100
                        </div>
                    </div>
                </div>
                </div>
            </body>
        </div>
    );
}
