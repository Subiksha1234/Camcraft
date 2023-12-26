package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.main.entity.Community;

public interface CommunityRepo extends JpaRepository<Community, Integer>{

}
