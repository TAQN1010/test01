package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.entity.Pack;
import com.example.repository.PackRepository;

public class PackService {
	@Autowired
	PackRepository repository;
	
	//テーブルpack_tableの全読み込み
	public List<Pack> findPacksAll() {
		return repository.findPacksAllByOrderByIdAsc();
	}
}
