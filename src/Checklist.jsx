import React, {useState} from "react";

function Checklist(){

    const [tasks, setTasks] = useState(["Fill up vault slots", "Collect transmog", "Do dailies"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){
        
    }

    return(
        <div className="checklist">
            <h1>Checklist</h1>

            <div>
                <input 
                type="text"
                placeholder="Enter a check..."
                value={newTask}
                onChange={handleInputChange}/>

                <button 
                className="add-button"
                onClick={addTask}>
                ADD
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li className="checkLI" key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>

        </div>
    )
}

export default Checklist;