package com.example.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.main.constant.Api;
import com.example.main.entity.Courses;
import com.example.main.entity.Student;
import com.example.main.service.StudentService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(Api.USER)
public class StudentController {
	
	@Autowired
	StudentService service;
	
	@Operation(summary = "Enroll a new Course")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Enrolled successfully"),
			     @ApiResponse(responseCode = "400",description = "Course is Already Enrolled")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(produces = "application/json",consumes = "application/json",value = "/enrollCourse")
	public String enrollCourse(@RequestBody Student s) {
		
		return service.enrollCourse(s);
	}
	
	@Operation(summary = "Read all Enrolled Courses")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Courses Read successfully"),
			     @ApiResponse(responseCode = "400",description = "Course List is empty Or Invalid Request")})
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping(produces = "application/json",value = "/getEnrolled/{id}")
	public List<Courses> getEnrolled(@PathVariable("id") long id){
		
		return service.getEnrolled(id);
	}
	
	@GetMapping("/getEnrolled/count/{id}")
	public int countEnrolled(@PathVariable("id") long id) {
		
		return service.countEnrolled(id);
	}

}
