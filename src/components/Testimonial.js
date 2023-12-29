import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
    <h2>
        Testimonial
    </h2>
    <section>
       <TestimonialCard name={"Jitendra" } feedback={" Your tecnical skills so good"} /> 
    
       <TestimonialCard name={"Narendra Modi" } feedback={" You are future of our country"} /> 

       <TestimonialCard name={"Alone Musk" } feedback={"You shoud be in my company"} /> 
    </section>
    </div>
  )
}

const TestimonialCard= ({name, feedback})=>(
<article>
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"alt="user" />
    <h4>{name}</h4>
    <p> {feedback} </p>
</article>
)

export default Testimonial