import React, { useState, useEffect } from 'react'

const Home = (props) => {

    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        window.db.collection("tasks").get().then((querySnapshot) => {
            let tasks = []
            querySnapshot.forEach((doc) => {
                tasks.push(doc.data())
                console.log(`${doc.id} => ${doc.data()}`);
            });
            setTasks(tasks)
        });
    }, [window.db])

    return (
        <div className="Home">
            <h1>Welcome to Task Tracker</h1>
            {tasks && tasks.map((task) => (
                <article>
                    <h2>{task.name}</h2>
                    <p>{task.description}</p>
                </article>
            ))}
        </div>
    )
}

export default Home