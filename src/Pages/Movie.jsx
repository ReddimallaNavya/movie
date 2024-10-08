import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Button from 'react-bootstrap/Button';
import '../index.css'

import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

 


const Movie=()=>{
  let [api,setApi]=useState([]);
  let navigate = useNavigate()
  let[search,setSearch]=useState("")
  
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=6f695dd3151a1b9752e3c201e9de6651&language=en-US")
    .then(res=>res.json())
    .then(res=>setApi(res.results)).catch(()=>console.log("home page api failed"))
},[])
   
   let searching=()=>{
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=1fe4ba70475442225a237aefdf241318`)
    .then(res=>res.json()).then(res=>setApi(res.results)).catch(()=>console.log("search page failed"));
    
   }
    return(
        <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <Button onClick={searching}variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    <Carousel>
      {api.map((x,y)=>{
        return(
          <div key={y.id}>
            <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} alt=""/>
              
              <div className="legend">
                <p>{x.title}</p>
              <p>{x.overview}</p>
          </div>
          </div>
        )
      },[])}

    </Carousel>
                   {/* cards */}
        
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
      {api.map((x,y)=>{
        return(
          <div key={y.id}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`}  alt=""/>
          <Card.Body>
            <Card.Title>{x.title}</Card.Title>
            <Card.Text>{x.overview}</Card.Text>
            <Button  onClick={()=>navigate("/subcards",{state:{x}})}variant="primary">more details</Button>
          </Card.Body>
        </Card>
        </div>

        )
      })}
        </div>
        </div>
    )
        
  }

export default Movie






 




