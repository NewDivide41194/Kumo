import React from 'react'
import './AddressCard.css'
const AddressCard = () => {
    return (
        <div className="container-fluid login-block">
            <div className="row">
                <div className=" col-sm-6 col-md-6 login-sec">
                    <h2 className="text-center" style={{ color: 'rgb(50, 108, 235)', fontFamily: 'Cambo' }}>Join us for Your Business</h2>
                    <form className="login-form" style={{ fontFamily: 'Cambo', color: 'rgb(50, 108, 235)', fontSize: 15 }}>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="text-uppercase">Title</label>
                            <input type="text" className="form-control" placeholder="Enter Title" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="text-uppercase">Name</label>
                            <input type="text" className="form-control" placeholder="Enter Your name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="text-uppercase">Email</label>
                            <input type="text" className="form-control" placeholder="Enter Your Email Address" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="text-uppercase">Content</label>
                            <input type="text" className="textarea" placeholder="Enter Content" />
                        </div>
                        <div className="form-check" >
                            <button type="submit" className="btn btn-login float-right">Send</button>
                        </div>
                    </form>
                    <div className="copy-text" style={{ fontFamily: 'Cambo', fontSize: 15 }}>Kumo Solution <i className="fa fa-heart" style={{ color: 'rgb(50, 108, 235)' }}></i> Group</div>
                </div>

                <div className=" col-sm-6 col-md-6 login-sec pt-5" style={{ alignItems: 'center' }}>
                    <img className="img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" />
                </div>
                {/* <div className="col-sm-6 col-md-6 pt-5">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators pb-2">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox" style={{ width: "95%" }}>
                            <div className="carousel-item active">
                                <img className="img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="banner-text">
                                        <h2>Join Us</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <div classsName="banner-text">
                                        <h2>Contract Us for your Business</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="banner-text">
                                        <h2>Contact Us</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default AddressCard


