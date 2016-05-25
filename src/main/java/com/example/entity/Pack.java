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

//テーブルpack_tableの例
@Entity
@Table(name="pack_table")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pack {
	//パック名
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)	//主キーの自動採番を指定
	private Integer id;
	
	@Column(nullable = false)
	private String name;
}
