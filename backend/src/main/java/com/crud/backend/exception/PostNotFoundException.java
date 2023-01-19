package com.crud.backend.exception;

public class PostNotFoundException extends RuntimeException {
  public PostNotFoundException(Long id) {
    super("Não foi possível encontrar o usuário com o id" + id);
  }
}
