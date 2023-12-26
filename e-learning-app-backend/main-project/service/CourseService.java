package com.example.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.main.entity.Courses;
import com.example.main.entity.Instructor;
import com.example.main.repository.CourseRepo;
import com.example.main.repository.InstructorRepo;
import com.example.main.request.CourseRequest;
import com.example.main.response.CourseResponse;

@Service
public class CourseService {
	
	@Autowired
	CourseRepo course;
	
	@Autowired
	InstructorRepo instructor;
	
	public String createCourse(CourseRequest c) {
		
		Instructor i = instructor.findInstructor(c.instructorName);
		Courses C = new Courses();
		C.setCourseName(c.courseName);
		C.setDuration(c.duration);
		C.setInstructor_id(i);
		
		course.save(C);
		return "Posted. . .";
	}
	
	public List<Courses> getAll(){
		
		return course.findAll();
	}
	
	public Optional<Courses> getById(int id) {
		
		return course.findById(id);
	}
	
    public CourseResponse getCourseById(int id) {
		
		Optional<Courses> C = course.findById(id);
		CourseResponse c = new CourseResponse();
		c.setCourseName(C.get().getCourseName());
		c.setDuration(C.get().getDuration());
		c.setInstructorName(C.get().getInstructor_id().getInstructorName());
		return c;
	}
	
	public String updateCourse(int id, CourseRequest c) {
		
		Optional<Courses> C = course.findById(id);
		C.get().setCourseName(c.getCourseName());
		C.get().setDuration(c.getDuration());
		Instructor i = instructor.findInstructor(c.getInstructorName());
		C.get().setInstructor_id(i);
		
		course.save(C.get());
		
		return "Updated. . .";
	}
	
	public String deleteCourse(int id) {
		
		course.deleteById(id);
		return "Courses Deleted. . .";
	}
	
    public int countOfCourse() {
		
		return course.findAll().size();
	}

}
