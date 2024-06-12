import React, { useState } from 'react'
import {toast} from "react-toastify";

const BMICalculator = () => {
  const[height,setHeight] =useState("");
  const[weight,setWeight] =useState("");
  const[gender,setGender] =useState("");
  const[bmi,setBmi] =useState("");
  const calculateBMI =(e)=>{
    e.preventDefault();

    if(!height || !weight || !gender){
      toast.error("Please enter valid height,weight and gender.");
      return;
    }
    const heightInMeters =height /100;
    const bmiValue = (weight /(heightInMeters *heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if(bmiValue <18.5){
      toast.warning("You are underweight Accha se Ghee Churma Khao");
    }
    else if(bmiValue >=18.5 && bmiValue <24.9){
      toast.success(
        "You have normal weight just do exercise if you want or else enjoy your life"
      );
    }
    else if(bmiValue >=25 && bmiValue <29.9){
      toast.warning(
        "You are overweight thoda khana kam khaiye aur salad jayada khaiye."
      );
    }
    else{
      toast.error(
        "You are in the obese range aap to baba ka nam lijiyee aur maa ka hath ka khana khao"
      );
    }
  }

  return (
    <section className='bmi'>
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height(cm)</label>
              <input 
              type="number" 
              value={height} 
              onChange={(e)=>setHeight(e.target.value)}  
              required
              />
            </div>
            <div>
              <label>weight (Kg)</label>
              <input 
              type="number" 
              value={weight} 
              onChange={(e)=>setWeight(e.target.value)}  
              required
              />
            </div>
            <div>
              <label>Gender</label>
              <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type='submit'>Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="BMI Image" />
        </div>
      </div>
    </section>
  )
}

export default BMICalculator