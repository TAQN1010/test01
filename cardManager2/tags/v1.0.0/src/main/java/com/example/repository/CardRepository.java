package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Card;

public interface CardRepository extends JpaRepository<Card, Integer>{
	//IDで昇順
	List<Card> findAllByOrderByIdAsc();
}
