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

//テーブルcardsの列
@Entity
@Table(name="cards")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Card {
	//カードナンバー、カード名、収録パック名、所持数
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)	//主キーの自動採番を指定
	private Integer id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	private Integer pack;
}
