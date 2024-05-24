import React from 'react'
import './Table.css'

const Table = ({ todo, deleteTodo, editTodo }) => {
  return (
    <div align="center">
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Your Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            todo.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.id}</td>
                  <td>{val.task}</td>
                  <td>
                    <button className="edit" onClick={() => editTodo(val)}><i className="fa-solid fa-pen-to-square" /></button>
                    <button className="delete" onClick={() => deleteTodo(val.id)}><i className="fa-solid fa-trash-can" /></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
