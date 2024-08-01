import TaskCard from './TaskCard'

export default function  ShowTask ({tasks, setTasks, count, setCount, setTaskToEdit}) {

    const onDeleteAll = () => {
        setTasks([]);
        setCount(0);
    }

    function onDelete(id) {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
        setCount(newTasks.length)
    }

    const onEdit = (task) => {
        setTaskToEdit(task);
    };

    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{count}</span>
                </div>
                <button className="clearAll" onClick={onDeleteAll}>Clear All</button>
            </div>
            <ul>
                {   
                    tasks.map(task => (
                        <TaskCard key={task.id} task={task} onDelete={onDelete} onEdit={onEdit}/>
                    ))
                }
            </ul>
        </section>
    )
}
