import React from 'react'

const Card = (props) => {
    let course=props.course;
    //  console.log(props.course);
  return (
    <div>
        <div>
            {course.id}
            {/* <img src={course.image.url}></img> */}
        </div>
    </div>
  )
}

export default Card;