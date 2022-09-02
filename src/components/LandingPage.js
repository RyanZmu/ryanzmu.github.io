import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap'
import marvel from '../images/marvel-pic.png'
import weather from '../images/weather-pic.png'
import jeoprady from '../images/jeoprady.png'
import ac from '../images/ac.png'
import social from '../images/social.png'


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
                    <a href='https://ryanzmu.github.io/social-media-app/'><Card.Img src={social} /></a>
                    <Card.Title>Social Media App - DevelopBook</Card.Title>
                    <Card.Subtitle>Stack: Javascript, HTML5, CSS3 
                     <br/>
                    Frameworks/Libraries: React.JS, React-Bootstrap, React-Router-Dom, Formik
                     <br/>
                    API: No API (Making own API with Node.JS+Express) </Card.Subtitle>
                    <Card.Body>After learning the ropes of Facebook's React library, I figured what better way to test my new skills than to design my own social media website! Currently you can login as any of the 4 users I have made. Go to sign-in and try them out! Lots to do here still, including sign-up forms so you can add your own users and of course making the design a lot more put together. Enjoy DevelopBook!</Card.Body>
                </Card>
                <Card>
                    <a href='https://ryanzmu.github.io/WeatherApp'><Card.Img src={weather} /></a>
                    <Card.Title>NWS Weather App</Card.Title>
                    <Card.Subtitle>Stack: Javascript, HTML5, CSS3 <br/> API: <a href='https://www.weather.gov/documentation/services-web-api'>NWS API</a> </Card.Subtitle>
                    <Card.Body>Weather app created using NWS API and gathering the users location by harnessing the browser builtin GeoLocation API. Users can see a detailed 7 day forcast (morning,evening,night).</Card.Body>
                </Card>
                <Card>
                    <a href='https://ryanzmu.github.io/Jeoprady-App/'><Card.Img src={jeoprady} /></a>
                    <Card.Title>Jeoprady Trivia Game</Card.Title>
                    <Card.Subtitle>Stack: Javascript, HTML5, CSS3 <br/> API: <a href='https://jeopardy-game-api.herokuapp.com/api-docs/'>Jeoprady-Game-API</a> </Card.Subtitle>
                    <Card.Body>Trivia game based on jeoprady. Players enter name then are given a board of random catergories each with a question for $100-$600. Users then have 30 seconds to answer the question. Reaching zero $0 means you're out. This is more of an endurance contest until I go back and add the option for a second player.</Card.Body>
                </Card>
                <Card>
                    <a href='https://ryanzmu.github.io/Animal-Crossing-Wiki/index.html'><Card.Img src={ac} /></a>
                    <Card.Title>Animal Crossing Wiki</Card.Title>
                    <Card.Subtitle>Stack: Javascript, HTML5, CSS3 <br/> API: <a href='http://acnhapi.com/'>acnhapi</a> </Card.Subtitle>
                    <Card.Body>Website for looking up information about items from the game Animal Crossing New Horizons. So far you can only look up fish and bugs. Very basic in its current state but will be updated to include all item catergories and villagers.</Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default LandingPage