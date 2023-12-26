package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.main.entity.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback, Integer>{

}
