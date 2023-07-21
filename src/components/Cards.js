import React from 'react'
import Card from './Card';

const Cards = (props) => {
    
    let courses=props.courses;
     console.log(courses);
    function getCourses(){
        let allCourses=[];
    //     Object.values(courses).forEach(category=>{
    //         category.forEach(course=>{
    //             allCourses.push(course);
    //         })
    // })
    Object.values(courses).forEach(array => {
        array.forEach(courseData => {
            allCourses.push(courseData);
        })
    })
        console.log(allCourses);
        return allCourses;
    }
    
    // console.log(allCourses);
  return (
    <div>
    {
      getCourses().map((course)=>(
         <Card key={course.id}
        course={course}></Card>
      ))
    }
    </div>
  )
}

export default Cards;
