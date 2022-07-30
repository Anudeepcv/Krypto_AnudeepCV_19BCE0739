import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./HomePage.css";
import {Link} from 'react-router-dom';

export default function HomePage(){
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
                <div className='models'>
                    <Link to='/productdetails'><div className='model1'>
                        <div className='photo'>
                            <img className='tshirt' src='https://assets.ajio.com/medias/sys_master/root/20220121/ihND/61ea59caaeb2695cdd2444ac/-473Wx593H-461085141-blue-MODEL.jpg'/>  
                        </div>   
                        <div className='proddata'> 
                            <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/productdetails'><div className='model2'>
                        <div className='photo'>
                            <img className='tshirt' src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/attachment_89409340-e1511396917479.jpeg?auto=format&q=60&fit=max&w=930'/>  
                        </div>   
                        <div className='proddata'> 
                            <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/productdetails'><div className='model3'>
                        <div className='photo'>
                            <img className='tshirt' src='https://assets.ajio.com/medias/sys_master/root/20220121/ihND/61ea59caaeb2695cdd2444ac/-473Wx593H-461085141-blue-MODEL.jpg'/>  
                        </div>   
                        <div className='proddata'> 
                            <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/productdetails'><div className='model4'>
                        <div className='photo'>
                            <img className='tshirt' src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/attachment_89435743.jpeg?auto=format&q=60&fit=max&w=930'/>  
                        </div>   
                        <div className='proddata'> 
                            <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/productdetails'><div className='model5'>
                        <div className='photo'>
                            <img className='tshirt' src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/attachment_89409340-e1511396917479.jpeg?auto=format&q=60&fit=max&w=930'/>  
                        </div>   
                        <div className='proddata'> 
                        <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className='models'>
                <Link to='/productdetails'><div className='model1'>
                        <div className='photo'>
                            <img className='tshirt' src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/attachment_89435743.jpeg?auto=format&q=60&fit=max&w=930'/>  
                        </div>   
                        <div className='proddata'> 
                            <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/productdetails'><div className='model2'>
                        <div className='photo'>
                            <img className='tshirt' src='https://assets.ajio.com/medias/sys_master/root/20220121/ihND/61ea59caaeb2695cdd2444ac/-473Wx593H-461085141-blue-MODEL.jpg'/>  
                        </div>   
                        <div className='proddata'> 
                            <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/productdetails'><div className='model3'>
                        <div className='photo'>
                            <img className='tshirt' src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/attachment_89409340-e1511396917479.jpeg?auto=format&q=60&fit=max&w=930'/>  
                        </div>   
                        <div className='proddata'> 
                            <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/productdetails'><div className='model4'>
                        <div className='photo'>
                            <img className='tshirt' src='https://assets.ajio.com/medias/sys_master/root/20220121/ihND/61ea59caaeb2695cdd2444ac/-473Wx593H-461085141-blue-MODEL.jpg'/>  
                        </div>   
                        <div className='proddata'> 
                            <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/productdetails'><div className='model5'>
                        <div className='photo'>
                            <img className='tshirt' src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/attachment_89435743.jpeg?auto=format&q=60&fit=max&w=930'/>  
                        </div>   
                        <div className='proddata'> 
                        <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className='models'>
                <Link to='/productdetails'><div className='model1'>
                        <div className='photo'>
                            <img className='tshirt' src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/attachment_89409340-e1511396917479.jpeg?auto=format&q=60&fit=max&w=930'/>  
                        </div>   
                        <div className='proddata'> 
                            <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/productdetails'><div className='model2'>
                        <div className='photo'>
                            <img className='tshirt' src='https://assets.ajio.com/medias/sys_master/root/20220121/ihND/61ea59caaeb2695cdd2444ac/-473Wx593H-461085141-blue-MODEL.jpg'/>  
                        </div>   
                        <div className='proddata'> 
                            <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/productdetails'><div className='model3'>
                        <div className='photo'>
                            <img className='tshirt' src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/attachment_89435743.jpeg?auto=format&q=60&fit=max&w=930'/>  
                        </div>   
                        <div className='proddata'> 
                            <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/productdetails'><div className='model4'>
                        <div className='photo'>
                            <img className='tshirt' src='https://assets.ajio.com/medias/sys_master/root/20220121/ihND/61ea59caaeb2695cdd2444ac/-473Wx593H-461085141-blue-MODEL.jpg'/>  
                        </div>   
                        <div className='proddata'> 
                            <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/productdetails'><div className='model5'>
                        <div className='photo'>
                            <img className='tshirt' src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/attachment_89435743.jpeg?auto=format&q=60&fit=max&w=930'/>  
                        </div>   
                        <div className='proddata'> 
                        <div className='tdata'>Formal T-shirt for Men</div>
                            <div className='cost'>&#8377; 200</div>
                            <div className='rating'>4.0</div>
                            <div className='hrtsc'>
                                <i className='hrt fa fa-heart'></i>
                                <i className='sc fa fa-shopping-cart'></i>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </body>
        </div>
    );
}