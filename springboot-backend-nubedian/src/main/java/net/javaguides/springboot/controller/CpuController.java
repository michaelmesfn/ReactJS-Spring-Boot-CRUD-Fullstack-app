package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Cpu;
import net.javaguides.springboot.repository.CpuRepository;

@CrossOrigin(origins = "http://localhost:3000")
//CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/")
public class CpuController {

	@Autowired
	private CpuRepository cpuRepository;

	// get all cpus
	@GetMapping("/cpus")
	public List<Cpu> getAllCpus() {
		return cpuRepository.findAll();
	}

	// get cpu by id

	@GetMapping("/cpus/{id}")
	public ResponseEntity<Cpu> getCpuById(@PathVariable Long id) {
		Cpu cpu = cpuRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("CPU doesn not exist with id :" + id));
		return ResponseEntity.ok(cpu);
	}

	// update employee rest api
	@PutMapping("/cpus/{id}")
	public ResponseEntity<Cpu> updateCpu(@PathVariable Long id, @RequestBody Cpu cpuDetails) {
		Cpu cpu = cpuRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("CPU does not exist: " + id));
		cpu.setBrand(cpuDetails.getBrand());
		cpu.setModel(cpuDetails.getModel());
		cpu.setSocket(cpuDetails.getSocket());
		cpu.setClockspeed(cpuDetails.getClockspeed());
		cpu.setNumberofcores(cpuDetails.getNumberofcores());
		cpu.setNumberofthreads(cpuDetails.getNumberofthreads());
		cpu.setTdp(cpuDetails.getTdp());
		cpu.setPrice(cpuDetails.getPrice());
		Cpu updatedCpu = cpuRepository.save(cpu);
		return ResponseEntity.ok(updatedCpu);
	}
}