import { useState, useEffect } from 'react'

const AddTask = ({tasks, setTasks, setCount, taskToEdit, setTaskToEdit}) => {

    const [taskValue, setTaskValue] = useState('');

    useEffect(() => {
        if (taskToEdit) {
          setTaskValue(taskToEdit.name);
        } else {
          setTaskValue('');
        }
      }, [taskToEdit]);

    const onChange = (e) => {
        setTaskValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (taskToEdit) {
            // Mise à jour de la tâche existante
            const updatedTasks = tasks.map((task) =>
              task.id === taskToEdit.id ? { ...task, name: taskValue, date: Date() } : task
            );
            setTasks(updatedTasks);
            setTaskToEdit(null); // Réinitialise la tâche à éditer
        } else {
            const task = {
                id: Math.floor(Math.random() * 10000),
                name: taskValue,
                date: Date()
            };
            setTasks([...tasks, task]);
            setCount(tasks.length+1);
        }
        setTaskValue('');
    }

    return (
        <section className="addTask">
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Add task"
                    onChange={onChange} 
                    autoComplete="off" 
                    name="task"
                    value={taskValue}
                />
                <button type="submit">{taskToEdit ? 'Update' : 'Add'}</button>
            </form>
        </section>
    )
}

export default AddTask
