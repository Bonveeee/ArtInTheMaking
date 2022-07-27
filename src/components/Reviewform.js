import React from 'react'

function Reviewform() {

    function handleSubmit(event){
        event.preventDefault()
    }

    function handleChange(event){
        // console.log(event.target.name)
    }

  return (
    <div class="form-center"> 
         <form className="review-form" onSubmit={handleSubmit} >
             <h1>Reviews</h1>
              <textarea name="content" onChange={handleChange} placeholder="Write your review here..." rows={10} />
             <input type="submit" value="Send your review" />
             <p>Sign up for the latest updates in contemporary Art & Design</p>
             <input type="email" name= "email" onChange={handleChange} placeholder="Email Us" />
            <input type="submit" value="Sign Up" />
         </form>
  </div>
   
  )
}

export default Reviewform