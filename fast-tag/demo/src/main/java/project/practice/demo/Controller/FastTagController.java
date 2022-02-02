package project.practice.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.practice.demo.entity.FastTag;
import project.practice.demo.services.FastTagServices;

@RestController
@RequestMapping("/fast")
@CrossOrigin(origins = "http://localhost:3000")

public class FastTagController {
	@Autowired
	FastTagServices services;
	
	@PostMapping("/{tag}")
	public String happy(@RequestBody FastTag corp)
	{
		return services.interact(corp).getVehicleNumber()+" has successfully inserted";
	}
	
	@GetMapping("/")
	public List<FastTag> bheem()
	{
		return services.readEverything();
	}
	
	@GetMapping("/{comp}")
	public FastTag doora(@PathVariable("comp") String comp)
	{
		return services.readOne(comp);
	}
}
