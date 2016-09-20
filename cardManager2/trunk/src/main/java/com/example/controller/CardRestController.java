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
@RequestMapping("api/cards")	//URL設定
public class CardRestController {
	@Autowired
	CardService cardService;
	
	//DBから読み取る                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	@RequestMapping(method=RequestMethod.GET)	// api/cardsでアクセスできるメソッド
	List<Card> getCards(){
		List<Card> cards = cardService.findAll();	//cardsにDBの中身を代入
		System.out.println(cards);	//コンソール上ですべて表示
		return cards;	//cardsを返す
	}
	
	//カードデータの更新
	@RequestMapping(value="{id}", method=RequestMethod.PUT)	// api/cards+card.idでアクセスできるメソッド
	Card putCard(@PathVariable Integer id, @RequestBody Card card){
		card.setId(id);						//idを設定
		return cardService.update(card);	//オブジェクトcardの内容で指定idのデータを更新
	}
	
	//カードデータの削除
	@RequestMapping(value="{id}", method=RequestMethod.DELETE)	// api/cards+idでアクセスできるメソッド
	@ResponseStatus(HttpStatus.NO_CONTENT)
	void deleteCard(@PathVariable Integer id){
		cardService.delete(id);	//指定されたidのデータを削除
	}
	
	//カードデータの新規作成
	@RequestMapping(method=RequestMethod.POST)	// api/cardsでアクセスできるメソッド
	@ResponseStatus(HttpStatus.CREATED)
	Card postCard(@RequestBody Card card){	//受け取ったオブジェクトcardを
		return cardService.create(card);	//DBに追加
	}
}
