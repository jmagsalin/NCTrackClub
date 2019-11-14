import React, { Component} from 'react'
import { Carousel } from 'react-bootstrap'

class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        width={900} height={670} alt="900x500"
                        src="https://cdn.pixabay.com/photo/2015/06/08/15/13/race-801940_1280.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        width={900} height={670} alt="900x500"
                        src="https://cdn.pixabay.com/photo/2016/11/18/13/23/action-1834465_1280.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        width={900} height={670} alt="900x500"
                        src="https://cdn.pixabay.com/photo/2015/03/04/21/25/sport-659547_1280.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </React.Fragment>
        )
    }
}
export default Homepage;