package project.practice.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.practice.demo.entity.FastTag;

@Repository
public interface FastTagRepository extends JpaRepository<FastTag,String>
{

}
