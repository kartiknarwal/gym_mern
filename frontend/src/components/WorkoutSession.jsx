import React from 'react'

const WorkoutSession = () => {
  return (
    <section className='workout_session'>
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>Join our top-rated workout sessions to achieve your fitness goals. Our expert trainers will guide you through a variety of exercises tailored to your needs, whether you're a beginner or an experienced athlete. Get ready to push your limits and see incredible results!</p>
        <img src="/img10.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Discover our featured bootcamps designed to challenge and motivate you. Each bootcamp offers a unique blend of strength training, cardio, and flexibility exercises to help you build muscle, burn fat, and improve overall fitness.
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Bootcamp</h4>
            <p>
              Our High-Intensity Interval Training (HIIT) bootcamp is perfect for those looking to maximize calorie burn in a short amount of time. Experience a mix of intense exercises followed by short recovery periods to keep your heart rate up and metabolism boosted.
            </p>
          </div>
          <div>
            <h4>Strength and Conditioning Bootcamp</h4>
            <p>
              Focus on building strength and improving endurance with our Strength and Conditioning Bootcamp. Utilizing a variety of equipment and bodyweight exercises, this bootcamp is designed to enhance your overall physical performance.
            </p>
          </div>
          <div>
            <h4>Yoga Bootcamp</h4>
            <p>
              Combine the benefits of traditional yoga with the intensity of a bootcamp in our Yoga Bootcamp. This session will help you increase flexibility, build core strength, and improve mental focus through a series of dynamic poses and flows.
            </p>
          </div>
          <div>
            <h4>Functional Fitness Bootcamp</h4>
            <p>
              Improve your everyday movements and prevent injuries with our Functional Fitness Bootcamp. This bootcamp focuses on exercises that mimic real-life activities, enhancing your mobility, stability, and strength for better daily function.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSession
