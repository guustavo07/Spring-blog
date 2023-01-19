import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    const result = await axios.get('http://localhost:8080/posts')
    setPosts(result.data)
  }

  const deletePost = async id => {
    await axios.delete(`http://localhost:8080/post/${id}`)
    loadPosts()
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Titulo</th>
              <th scope="col">Descrição</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{post.username}</td>
                <td>{post.titulo}</td>
                <td>{post.descricao}</td>
                <td>
                  <Link
                    className="btn btn-outline-success mx-2"
                    to={`/viewpost/${post.id}`}
                  >
                    Ver
                  </Link>
                  <Link
                    className="btn btn-success mx-2"
                    to={`/editpost/${post.id}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-outline-dark mx-2"
                    onClick={() => deletePost(post.id)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
