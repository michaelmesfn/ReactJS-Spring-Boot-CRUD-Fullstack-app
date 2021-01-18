package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cpus")
public class Cpu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "brand")
	private String brand;
	@Column(name = "model")
	private String model;
	@Column(name = "socket")
	private String socket;
	@Column(name = "clockspeed")
	private String clockspeed;
	@Column(name = "numberofcores")
	private String numberofcores;
	@Column(name = "numberofthreads")
	private String numberofthreads;
	@Column(name = "tdp")
	private String tdp;
	@Column(name = "price")
	private String price;
	
	public Cpu() {
		
	}
	public Cpu(String brand, String model, String socket, String clockspeed, String numberofcores,
			String numberofthreads, String tdp, String price) {
		super();
		this.brand = brand;
		this.model = model;
		this.socket = socket;
		this.clockspeed = clockspeed;
		this.numberofcores = numberofcores;
		this.numberofthreads = numberofthreads;
		this.tdp = tdp;
		this.price = price;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getSocket() {
		return socket;
	}
	public void setSocket(String socket) {
		this.socket = socket;
	}
	public String getClockspeed() {
		return clockspeed;
	}
	public void setClockspeed(String clockspeed) {
		this.clockspeed = clockspeed;
	}
	public String getNumberofcores() {
		return numberofcores;
	}
	public void setNumberofcores(String numberofcores) {
		this.numberofcores = numberofcores;
	}
	public String getNumberofthreads() {
		return numberofthreads;
	}
	public void setNumberofthreads(String numberofthreads) {
		this.numberofthreads = numberofthreads;
	}
	public String getTdp() {
		return tdp;
	}
	public void setTdp(String tdp) {
		this.tdp = tdp;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}

}
