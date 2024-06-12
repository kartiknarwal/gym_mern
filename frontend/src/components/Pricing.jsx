import React from 'react'
import {Check} from "lucide-react";
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricing =[
    {
      imageUrl: "/pricing.jpg",
      title: "QUATERLY",
      price:18000,
      length:3
    },
    {
      imageUrl: "/pricing.jpg",
      title: "HALF_YEARLY",
      price:32000,
      length:6
    },
    {
      imageUrl: "/pricing.jpg",
      title: "Yearly",
      price:67000,
      length:3
    }
  ]
  return (
    <section className='pricing'>
      <h1>NARWAL FITNESS PLANS</h1>
      <div className="wrapper">
        {
          pricing.map(element=>{
            return(
              <div className="card" key={element.title}>
                <img src={element.imageUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs {element.price}</h3>
                  <p>For {element.length} MONTHS</p>
                </div>
                <div className="description">
                  <p>
                    <Check/> Equipment
                  </p>
                  <p>
                    <Check/> ALL DAY FREE TRAINING
                  </p>
                  <p>
                    <Check/> FREE SPA & MASSAGE SESSIONS
                  </p>
                  <p>
                    <Check/> FREE YOGA & CARDIO SESSIONS
                  </p>
                  <p>
                    <Check/> 20 DAYS FREEZING OPTION AVAILABLE
                  </p>
                  <Link to ={"/"} >JOIN NOW</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Pricing