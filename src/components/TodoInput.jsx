import React, { useState } from 'react';
import '../App.css';
import {RiDeleteBin6Line} from 'react-icons/ri'
const TodoList = () => {
  // State to store the input value for the new task
  const [activity, setActivity] = useState('');

  // State to store the list of tasks
  const [listData, setListData] = useState([]);

  // Function to add a new task to the list
  const addActivity = () => {
    // Check if the input is not empty or only whitespace
    if (activity.trim() !== '') {
      setListData((listData) => {
        // Create a new list with the current tasks and the new task
        const updatedList = [...listData, activity];

        // Clear the input field after adding the task
        setActivity('');

        // Return the updated list to update the state
        return updatedList;
      });
    }
  };

  // Function to remove a task from the list based on its index
  const removeActivity = (i) => {
    // Filter out the task with the given index to create an updated list
    const updatedListData = listData.filter((element, id) => {
      return i !== id;
    });

    // Set the state with the updated list, removing the specified task
    setListData(updatedListData);
  };
  // function to remove all
 const removeALL =()=>{
  setListData([]);
 }
  return (
    <>
      <div className='container'>
        <div className='header'>ToDo List</div>

        {/* Input field to enter a new task */}
        <input
          type='text'
          placeholder='Enter Your Task'
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        {/* Button to add a new task */}
        <button onClick={addActivity} className='btn-1'>
          Add Task
        </button>

        {/* Heading to display the task list */}
        <h3 className='list-heading'>Your Tasks are here</h3>

        {/* Rendering the list of tasks */}
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <div className='list-cont' key={i}>
                {/* Display each task */}
                <div className='list-data'>{data}</div>

                {/* Button to remove the task */}
                <button className='btn-2' onClick={() => removeActivity(i)}>
                <RiDeleteBin6Line/>
                </button>

              </div>
            );
          })}
          {/* button to remove all */}
          {listData.length>=2 && <button onClick={removeALL} className='btn-3'>Delete All</button>}
      </div>
    </>
  );
};

export default TodoList;
