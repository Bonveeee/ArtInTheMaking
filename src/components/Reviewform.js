
import React ,{useState} from 'react'

function Reviewform() {
  const [text, setText] = useState(" ");

    function handleSubmit(event){
        event.preventDefault()
    }

    function handleChange(event){
                     setText(event.target.value)}
           // console.log(event.target.name)
    

  return (
    <div class="form-center"> 
         <form className="review-form" onSubmit={handleSubmit} >
             <h1>Reviews</h1>
              <textarea name="content"  onChange={handleChange} placeholder="Write your review here..." rows={10} />
             <input type="submit"  onSubmit={handleSubmit} value="Send your review" />
             <p>Sign up for the latest updates in contemporary Art & Design</p>
             <input type="email" name= "email" onChange={handleChange} placeholder="Email Us" />
            <input type="submit" onSubmit={handleSubmit} value="Sign Up" />
         </form>
  </div>
   
  )
}

export default Reviewform