import React from 'react'
import './AddressCard.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Label } from 'semantic-ui-react'

const AddressCard = () => {
    return (
        <div className="container-fluid login-block">
            <div className="row">
                <div className=" col-sm-6 col-md-6 login-sec " >
                    <img  style={{ padding:'15px' }}className="img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" />
                </div>
                <div className=" col-sm-6 col-md-6 login-sec">
                    <h2 className="text-center" >Join us for Your Business</h2>
                    <form style={{ fontSize: '18px', fontFamily: 'Cambo', padding:'15px'}}>
                        <div class="form-group">
                            <label for="tId">Title</label>
                            <input style={{ fontSize: '18px' }} type="text" class="form-control" id="tId" placeholder="Enter Title" />
                        </div>
                        <div class="row form-group">
                            <div class="col">
                                <label for="nId">Name</label>
                                <input style={{ fontSize: '18px' }} type="text" class="form-control" id="nId" placeholder="Enter name" />
                            </div>
                            <div class="col">
                                <label for="eId">Email</label>
                                <input style={{ fontSize: '18px' }} type="email" class="form-control" id="eId" placeholder="Enter Email" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="areaId">Content</label>
                            <textarea style={{ fontSize: '18px' }} placeholder="Enter Content" class="form-control" id="areaId" rows="3"></textarea>
                        </div>
                        <div class="form-group pt-4" style={{ float: 'right' }}>
                            <Button as='div' labelPosition='right' 
                            style={{ fontFamily: 'Cambo', fontSize: '18px' }}>     
                               <Label as='a' basic pointing='right'>
                                Cancel
                             </Label>
                                <Button icon>
                                    <Icon name='cancel' />
                                </Button>
                            </Button>
                            <Button as='div' labelPosition='right' 
                           style={{ fontFamily: 'Cambo', fontSize: '18px' }}>

                                <Label as='a' basic pointing='right'>
                                    Send
                             </Label>
                                <Button icon>
                                    <Icon name='mail' />
                                </Button>
                            </Button>
                        </div>
                    </form>
                </div>

            </div>
            <div class="row" className="copy-text">
                <h3>Kumo Solutions<i className="fa fa-heart" style={{ color: 'rgb(50, 108, 235)' }}></i> Group</h3>
            </div>
        </div>


    )
}
export default AddressCard