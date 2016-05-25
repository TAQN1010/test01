package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.entity.Own;
import com.example.repository.OwnRepository;

public class OwnService  {
	@Autowired
	OwnRepository repository;

	//テーブルown_tableの全読み込み
	public List<Own> findOwnAll() {
		return repository.findOwnAllByOrderByIdAsc();
	}
}

