package com.example.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Card;
import com.example.repository.CardRepository;

@Service
@Transactional
public class CardService {
	@Autowired
	CardRepository repository;
	
	//DBの全読み込み
	public List<Card> findAll(){
		//読み込んだDBをIDの昇順で返す。
		return repository.findAllByOrderByIdAsc();
	}
	
	//カードデータの更新
	public Card update(Card card){
		return repository.save(card);
	}
	
	//カードデータの削除
	public void delete(Integer id) {
		repository.delete(id);
	}
	
	//カードデータの新規作成
	public Card create(Card card) {
		return repository.save(card);
	}
}
