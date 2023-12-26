package com.example.main.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "student")
public class Student {
	
	@Id
	private long student_id;
	private String name;
	@ManyToMany
	private List<Courses> enrolledCourses;
	
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student(long student_id, String name, List<Courses> enrolledCourses) {
		super();
		this.student_id = student_id;
		this.name = name;
		this.enrolledCourses = enrolledCourses;
	}
	public long getStudent_id() {
		return student_id;
	}
	public void setStudent_id(long student_id) {
		this.student_id = student_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Courses> getEnrolledCourses() {
		return enrolledCourses;
	}
	public void setEnrolledCourses(List<Courses> enrolledCourses) {
		this.enrolledCourses = enrolledCourses;
	}

}
