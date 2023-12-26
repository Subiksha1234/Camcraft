package com.example.main.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.main.entity.User;
import com.example.main.entity.enumerate.Role;

public interface UserRepository extends JpaRepository<User, Long>{
	
	Optional<User> findByEmail(String username);

    User findByUid(Long uid);

    void deleteByUid(Long uid);
    
    @Query("select count(*) from User u where u.role = ?1")
    public int countOfUsers(Role role);

}
