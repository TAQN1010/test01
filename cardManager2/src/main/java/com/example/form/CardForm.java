package com.example.form;

import javax.validation.constraints.NotNull;

import lombok.Data;

//テーブルcardsの列、自動採番なのでcardNumberは省略
@Data
public class CardForm {
	//ID、カード名、収録パック名、所持数
	@NotNull
	private String name;
	@NotNull
	private String pack;
	@NotNull
	private Integer own;
}
