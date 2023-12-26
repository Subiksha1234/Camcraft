package com.example.main.entity;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "courses")
public class Courses {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int course_id;
	private String courseName;
	private String duration;
	
	@ManyToOne
	private Instructor instructor_id;
	
	public Courses() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Courses(int course_id, String courseName, String duration, Instructor instructor_id) {
		super();
		this.course_id = course_id;
		this.courseName = courseName;
		this.duration = duration;
		this.instructor_id = instructor_id;
	}
	public int getCourse_id() {
		return course_id;
	}
	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public Instructor getInstructor_id() {
		return instructor_id;
	}
	public void setInstructor_id(Instructor instructor_id) {
		this.instructor_id = instructor_id;
	}

}
