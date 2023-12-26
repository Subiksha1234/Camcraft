package com.example.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.main.entity.Instructor;
import com.example.main.repository.InstructorRepo;

@Service
public class InstructorService {
	
	@Autowired
	InstructorRepo repo;
	
	public String createInstructor(Instructor i) {
		
		repo.save(i);
		return "Posted . . .";
	}
	
	public List<Instructor> getInstructors(){
		
		return repo.findAll();
	}
	
	public Optional<Instructor> getInstructorById(int id) {
		
		return repo.findById(id);
	}
	
	public int countOfInstructor() {
		
		return repo.findAll().size();
	}

}
