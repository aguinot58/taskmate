const TaskCard = ({task, onDelete, onEdit}) => {

    const formattedDate = new Date(task.date).toLocaleString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return (
        <li>
            <p>
                <span className="name">{task.name}</span>
                <span className="time">{formattedDate}</span>
            </p>
            <i className="bi bi-pencil-square" onClick={() => onEdit(task)}></i>
            <i className="bi bi-trash" onClick={ () => onDelete(task.id) }></i>
        </li>
    )
}

export default TaskCard