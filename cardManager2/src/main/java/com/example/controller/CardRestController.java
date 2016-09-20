package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Card;
import com.example.service.CardService;

@RestController
@RequestMapping("api/cards")
public class CardRestController {
	@Autowired
	CardService cardService;
	
	//DBから読み取る                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	@RequestMapping(method=RequestMethod.GET)
	List<Card> getCards(){
		List<Card> cards = cardService.findAll();
		System.out.println(cards);	//コンソール上ですべて表示
		return cards;
	}
	
	//カードデータの更新
	@RequestMapping(value="{id}", method=RequestMethod.PUT)
	Card putCard(@PathVariable Integer id, @RequestBody Card card){
		card.setId(id);
		return cardService.update(card);
	}
	
	//カードデータの削除
	@RequestMapping(value="{id}", method=RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	void deleteCard(@PathVariable Integer id){
		cardService.delete(id);
	}
	
	//カードデータの新規作成
	@RequestMapping(method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	Card postCard(@RequestBody Card card){
		return cardService.create(card);
	}
}
