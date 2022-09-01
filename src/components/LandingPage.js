import React from 'react'
import ReactDOM from 'react-dom'
import { Card, CardGroup, Container } from 'react-bootstrap'
import marvel from '../images/marvel-pic.png'
import weather from '../images/weather-pic.png'


const LandingPage = (props) => {
    return (
        <div class='landing-page'>
            <Container>
                <section>
                    <p>Hey Welcome! Take a look through some of my projects. Each project is still a WIP however, they have achieved the set MVP I had for each. Check back often for updates! Feel free to reach out and ask me questions about my projects, also feel free to draw inspiration for your own works!</p>
                </section>
            </Container>

            <CardGroup>
                <Card>
                   <a href='https://ryanzmu.github.io/Marvel-Comic-Lookup/'><Card.Img src={marvel} /></a>
                    <Card.Title>Marvel Comic Lookup</Card.Title>
                    <Card.Subtitle>Stack: Javascript, HTML5, CSS3 <br/> API: <a href='https://developer.marvel.com/'>Marvel Comics API</a></Card.Subtitle>
                    <Card.Body>Built to allow the user to search a Marvel Character to then find their comics, get a brief description, offical comic pictures, and also they can see important events and series the character was/is involved in.</Card.Body>
                </Card>
                <Card>
                    <a href='https://ryanzmu.github.io/WeatherApp'><Card.Img src={weather} /></a>
                    <Card.Title>NWS Weather App</Card.Title>
                    <Card.Subtitle>Stack: Javascript, HTML5, CSS3 <br/> API: <a href='https://www.weather.gov/documentation/services-web-api'>NWS API</a> </Card.Subtitle>
                    <Card.Body>Weather app created using NWS API and gathering the users geolocation of a user by harnessing the browser builtin GeoLocation API. Users can see a detailed 7 day forcast (morning,evening,night).</Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default LandingPage