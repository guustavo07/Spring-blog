import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditPost() {
  let navigate = useNavigate()

  const { id } = useParams()

  const [post, setPost] = useState({
    username: '',
    titulo: '',
    descricao: ''
  })

  const { username, titulo, descricao } = post

  const onInputChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loadPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async e => {
    e.preventDefault()
    await axios.put(`http://localhost:8080/post/${id}`, post)
    navigate('/')
  }

  const loadPost = async () => {
    const result = await axios.get(`http://localhost:8080/post/${id}`)
    setPost(result.data)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Post</h2>

          <form onSubmit={e => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={'text'}
                className="form-control"
                placeholder="Informe seu Username"
                name="username"
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Titulo" className="form-label">
                Título
              </label>
              <input
                type={'text'}
                className="form-control"
                placeholder="Insira o título do seu post"
                name="titulo"
                value={titulo}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Descricao" className="form-label">
                Descrição
              </label>
              <input
                type={'text'}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="descricao"
                value={descricao}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-success">
              Salvar Alterações
            </button>
            <Link className="btn btn-outline-dark mx-2" to="/">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
