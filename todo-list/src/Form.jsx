import React, { useState, useEffect } from 'react'
import './Form.css';

const Form = ({ add, editTask }) => {

  const [task, setTask] = useState("")
  const [id, setId] = useState(null)

  useEffect(() => {
    if (editTask) {
      setTask(editTask.task)
      setId(editTask.id)
    }
  }, [editTask])

  const submit = (event) => {
    event.preventDefault()
    if (id) {
      let obj = {
        id, task
      }
      add(obj, true)
    } else {
      let obj = {
        id: Math.floor(Math.random()*1000), task
      }
      add(obj, false)
    }
    alert(id ? "Edited.....!" : "Added.....!")
    setTask("")
    setId(null)
  }

  return (
    <div align="center">
      <form onSubmit={submit}>
        <h1>Todo List App</h1>
        <input type="text" placeholder='Enter Your Name' value={task} onChange={(e) => setTask(e.target.value)} />
        <button>Add User</button>
      </form>
    </div>
  )
}

export default Form
