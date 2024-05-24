import { useState } from 'react'
import Form from './Form'
import Table from './Table'

function App() {

  const [record, setRecord] = useState([])
  const [editTask, setEditTask] = useState(null)

  const addTodo = (data, isEdit) => {
    if (isEdit) {
      setRecord(record.map(task => task.id === data.id ? data : task))
    } else {
      let old = [...record, data]
      setRecord(old)
    }
  }

  const deleteTodo = (id) => {
    setRecord(record.filter(task => task.id !== id))
  }

  const editTodo = (task) => {
    setEditTask(task)
  }

  return (
    <>
      <Form
        add={addTodo}
        editTask={editTask}
      />
      <Table
        todo={record}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  )
}

export default App
