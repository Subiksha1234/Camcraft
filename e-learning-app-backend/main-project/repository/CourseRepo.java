package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.main.entity.Courses;

public interface CourseRepo extends JpaRepository<Courses, Integer>{

}
