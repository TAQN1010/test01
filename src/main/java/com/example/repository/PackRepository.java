package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Pack;

public interface PackRepository extends JpaRepository<Pack, Integer>{
	List<Pack> findPacksAllByOrderByIdAsc();
}
