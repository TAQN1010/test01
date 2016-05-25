package com.example.form;

import javax.validation.constraints.NotNull;

import lombok.Data;

//テーブルown_tableの例、自動採番なのでidは省略
@Data
public class OwnForm {
	//カードID、パックID、所持枚数
	@NotNull
	private Integer card_id;
	@NotNull
	private Integer pack_id;
	@NotNull
	private Integer own;
}
