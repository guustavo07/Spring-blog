package com.crud.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crud.backend.exception.PostNotFoundException;
import com.crud.backend.model.Post;
import com.crud.backend.repository.PostRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class PostController {

  @Autowired
  private PostRepository postRepository;

  @PostMapping("/post")
  Post newPost(@RequestBody Post newPost) {
    return postRepository.save(newPost);
  }

  @GetMapping("/posts")
  List<Post> getAllPostagens() {
    return postRepository.findAll();
  }

  @GetMapping("/post/{id}")
  Post getPostById(@PathVariable Long id) {
    return postRepository.findById(id)
        .orElseThrow(() -> new PostNotFoundException(id));
  }

  @PutMapping("/post/{id}")
  Post updatePost(@RequestBody Post newPost, @PathVariable Long id) {
    return postRepository.findById(id)
        .map(post -> {
          post.setUsername(newPost.getUsername());
          post.setTitulo(newPost.getTitulo());
          post.setDescricao(newPost.getDescricao());
          return postRepository.save(post);
        }).orElseThrow(() -> new PostNotFoundException(id));
  }

  @DeleteMapping("/post/{id}")
  String deletePost(@PathVariable Long id) {
    if (!postRepository.existsById(id)) {
      throw new PostNotFoundException(id);
    }
    postRepository.deleteById(id);
    return "O Usuário com id " + id + " foi deletado com sucesso.";
  }
}