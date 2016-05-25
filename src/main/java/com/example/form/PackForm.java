package com.example.form;

import javax.validation.constraints.NotNull;

import lombok.Data;

//テーブルpack_tableの例、自動採番なのでidは省略
@Data
public class PackForm {
	//パック名
	@NotNull
	private String name;
}
