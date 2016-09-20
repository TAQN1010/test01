package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.form.CardForm;
import com.example.service.CardService;

@Controller
public class CardController {
	@Autowired
	CardService cardService;
	
	@ModelAttribute
	CardForm setUpForm(){
		return new CardForm();
	}
	
	//DBから読み取る
	@RequestMapping(value="/", method= RequestMethod.GET)
	public String list(){
		return "cardManager";
	}
}
