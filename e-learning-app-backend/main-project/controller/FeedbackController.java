package com.example.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.main.request.FeedbackRequest;
import com.example.main.response.FeedbackResponse;
import com.example.main.service.FeedbackService;

@RequestMapping("/api/v1/feedback")
@RestController
public class FeedbackController {
	
	@Autowired
	FeedbackService service;
	
	  @PostMapping("/create")
	  public ResponseEntity<String> saveFeedback(@RequestBody FeedbackRequest request) {
		  
	        ResponseEntity<String> respEntity = service.saveFeedback(request);
	        return respEntity;
	  }
	  
	  @GetMapping("/getfeed")
	  public ResponseEntity<List<FeedbackResponse>> getFeedback(){
		  
	        List<FeedbackResponse> feedbackList =service.getAllFeedbacks();
	        return ResponseEntity.ok(feedbackList);
	    }

}
