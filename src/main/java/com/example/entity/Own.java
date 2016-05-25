package com.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//テーブルown_tableの例
@Entity
@Table(name="own_table")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Own {
	//カードID、パックId、所持枚数
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)	//主キーの自動採番を指定
	private Integer id;
	
	@Column(nullable = false)
	private Integer card_id;
	
	@Column(nullable = false)
	private Integer pack_id;
	
	@Column(nullable = false)
	private Integer own;
}
