
package com.example.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.main.entity.Courses;
import com.example.main.entity.Student;
import com.example.main.repository.StudentRepo;

@Service
public class StudentService {
	
	@Autowired
	StudentRepo repo;
	
	public String enrollCourse(Student s) {
		
		List<Integer> count = repo.studentExist(s.getStudent_id());		
		if(count.get(0) == 0) {
			
			repo.save(s);
			return "Enrolled. . .";
		}
		else {
			
		    repo.addCourses(s.getStudent_id(),s.getEnrolledCourses().get(0).getCourse_id());
			return "Enrolled. . .";
		}
	}
	
	public List<Courses> getEnrolled(long id){
		
		return repo.findById(id).get().getEnrolledCourses();
	}
	
	public int countEnrolled(long id) {
		
		 List<Courses> list = repo.findById(id).get().getEnrolledCourses(); 
		 return list.size();
	}

}
