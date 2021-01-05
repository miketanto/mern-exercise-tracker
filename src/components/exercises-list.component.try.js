import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';


const Exercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td>
    </tr>
  )
 
function ExercisesList() {
    const[exercises,setExercises]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/exercises')
        .then(response=>{
            setExercises([{_id:"5ff1656ad5cf2a3c6ee75a5b",createdAt: "2021-01-03T06:34:18.295Z",
            date: "2021-01-03T06:31:38.729Z",
            description: "Run",
            duration: 10,
            updatedAt: "2021-01-03T06:34:18.295Z",
            username: "mike",
            __v: 0}]);
        })
        .catch(error=>{
            console.log(error);
        });
    },[]);

    function deleteExercise(id){
        axios.delete('http://localhost:5000/exercises'+id)
        .then(res=>console.log(res.data));
  
        setExercises(exercises.filter(el=>el._id!=id))
    };
  
    function exerciseList() {
        return exercises.map(currentexercise => {
          return <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id}/>;
        })
      };
 
    

    return (
        <div>
            <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {()=>exerciseList()}
          </tbody>
        </table>
        </div>
    )
}

export default ExercisesList
