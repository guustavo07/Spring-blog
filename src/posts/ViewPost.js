import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewPost() {
  const [post, setPost] = useState({
    username: '',
    titulo: '',
    descricao: ''
  })

  const { id } = useParams()

  useEffect(() => {
    loadPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadPost = async () => {
    const result = await axios.get(`http://localhost:8080/post/${id}`)
    setPost(result.data)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Detalhes do Post</h2>

          <div className="card">
            <div className="card-header">
              Detalhes do post id : {post.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>{post.username}</b>
                </li>
                <li className="list-group-item">
                  <b>{post.titulo}</b>
                </li>
                <li className="list-group-item">{post.descricao}</li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-outline-success my-2" to={'/'}>
            Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
