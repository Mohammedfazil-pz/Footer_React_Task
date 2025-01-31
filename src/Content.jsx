import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Content() {
    const [data,setData]=useState([])

    const fetchDetails=async()=>{
        const serverResponce=await fetch('https://dummyjson.com/products')
        const data=await serverResponce.json()  
        setData(data.products)
    }

 useEffect(()=>{
    fetchDetails()
 },[])


  return (
    <div className='d-flex justify-content-center mt-3 flex-wrap gap-2'>
       {data.map((a)=>(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={a.images} />
        <Card.Body>
          <Card.Title>{a.title}</Card.Title>
          <Card.Text>
           {a.description}
          </Card.Text>
          <Card.Text>
           {a.price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
       ))}
    </div>
  )
}

export default Content
