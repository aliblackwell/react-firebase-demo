import React, { useState, useEffect } from 'react'
import TaskCardClassFormat from '../components/task-cards/TaskCardClassFormat';
import TaskCardFunctionalFormat from '../components/task-cards/TaskCardFunctionalFormat';
const Home = (props) => {

    const [tasks, setTasks] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        window.db.collection("tasks").get().then((querySnapshot) => {
            let tasks = []
            querySnapshot.forEach((doc) => {
                tasks.push(doc.data())
                console.log(`${doc.id} => ${doc.data()}`);
            });
            setTasks(tasks)
            setLoaded(true)
        });
    }, [window.db])

    return (
        <div className="Home">
            {!loaded && (
                <span data-uk-spinner="ratio: 4.5"></span>
            )}
            {loaded && (
                <section>
                    <h1>Welcome to Task Tracker</h1>
                    {tasks && tasks.map((task) => (
                        <TaskCardFunctionalFormat taskName={task.name} taskDescription={task.description} />
                    ))}
                </section>
            )}

        </div>
    )
}

export default Home