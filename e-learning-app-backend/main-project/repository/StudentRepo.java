package com.example.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.main.entity.Student;

import jakarta.transaction.Transactional;

public interface StudentRepo extends JpaRepository<Student, Long>{
	
	@Query("select count(*) from Student s where s.student_id = ?1")
	public List<Integer> studentExist(long Id);
	
	@Transactional
	@Modifying
	@Query(value="insert into student_enrolled_courses values(?1 , ?2)",nativeQuery = true)
	public void addCourses(long Uid,int Cid);

}
