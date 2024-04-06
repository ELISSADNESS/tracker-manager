import React from 'react'

interface Task {
  id: number,
  title: string,
  description: string
}

const Cards = async () => {
  const data = await fetch('http://localhost:3000/api/tasks');
  const tasks: Task[] = await data.json();

  
  return (
    <>
      <div className="card w-96 bg-primary text-primary-content">
        {
          tasks.map((task) => {
            return (
              <div className="card-body" key={task.id}>
                <h2 className="card-title">{task.title}</h2>
                <p>{task.description}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Cards