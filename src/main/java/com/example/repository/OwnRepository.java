package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Own;

public interface OwnRepository extends JpaRepository<Own, Integer> {
	List<Own> findOwnAllByOrderByIdAsc();
}
