import { useState } from "react";
import people from "./data";
//importing the icons from the react-icons library
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function nextPerson(){
    if(index === people.length-1){
        setIndex(0);
    }
    else{
        setIndex(index+1);
    }
  }

  function prevPerson(){
    if(index === 0){
        setIndex(people.length-1);
    }
    else{
        setIndex(index-1);
    }
  }

  function randomPerson(){
    let randomIndex = Math.floor(Math.random()*people.length);
    console.log(randomIndex);
    if(randomIndex === index){
        randomIndex = index+1;
        setIndex(randomIndex);
    }
    if (randomIndex > people.length-1){
        randomIndex = index-1;
        setIndex(randomIndex);
    }
    else{
        setIndex(randomIndex);
    }
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button type="button" className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button type="button" className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button type="button" className="random-btn" onClick={randomPerson}>
        Surprise Me
      </button>
    </article>
  );
}

export default Review;
