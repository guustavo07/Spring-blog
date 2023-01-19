import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import AddPost from '../../src/posts/AddPost.css'
export default function AddPosts() {
  let navigate = useNavigate()

  const [post, setPost] = useState({
    username: '',
    titulo: '',
    descricao: ''
  })

  const { username, titulo, descricao } = post

  const onInputChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const onSubmit = async e => {
    e.preventDefault()
    await axios.post('http://localhost:8080/post', post)
    navigate('/')
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Adicionar Post</h2>

          <form onSubmit={e => onSubmit(e)}>
            <div className="mb-3">
              <label htmlfor="Username" className="form-label">
                Username
              </label>
              <input
                type={'text'}
                className="form-control"
                name="username"
                placeholder="Insira seu Username"
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlfor="Titulo" className="form-label">
                Título
              </label>
              <input
                type={'text'}
                className="form-control"
                name="titulo"
                placeholder="Insira o título do seu post"
                value={titulo}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlfor="Descricao" className="form-label">
                Descrição
              </label>
              <input
                type={'text'}
                className="form-control"
                name="descricao"
                placeholder="Descreva seu post"
                value={descricao}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-success">
              Enviar
            </button>
            <Link type="submit" className="btn btn-outline-dark mx-2" to="/">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
