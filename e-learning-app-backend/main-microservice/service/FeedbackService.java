package com.example.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.main.entity.Feedback;
import com.example.main.repository.FeedbackRepo;

@Service
public class FeedbackService {
	
	@Autowired
	FeedbackRepo repo;
	
	public String postFeedback(Feedback f) {
		
		repo.save(f);
		return "Posted. . .";
	}
	
	public List<Feedback> getFeedbacks(){
		
		return repo.findAll();
	}
	

}
