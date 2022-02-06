package project.practice.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.practice.demo.Repository.FastTagRepository;
import project.practice.demo.entity.FastTag;

@Service
public class FastTagServices {
	@Autowired
	FastTagRepository fastrepo;
	 
	/*public FastTag interact(FastTag object)
	{
		return fastrepo.save(object);
	}*/
	
	public List<FastTag> readEverything()
	{
		return fastrepo.findAll();
	}
	public FastTag readOne(String id) 
	{
		return fastrepo.findById(id).orElse(new FastTag());
	}

}


