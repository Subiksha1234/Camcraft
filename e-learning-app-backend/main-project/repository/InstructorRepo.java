package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.main.entity.Instructor;

public interface InstructorRepo extends JpaRepository<Instructor, Integer>{
	
	@Query("select i from Instructor i where i.instructorName = ?1")
	public Instructor findInstructor(String name);

}
