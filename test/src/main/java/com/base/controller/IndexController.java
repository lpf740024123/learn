package com.base.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.base.datasource.DataSourceContextHolder;
import com.base.datasource.DataSourceType;
import com.base.entity.Student;
import com.base.service.StudentService;
import com.resource.entity.StudentResource;

@Controller
@RequestMapping("/index")
public class IndexController {
	@Autowired
	public StudentService studentService;
	
	@RequestMapping("/start")
	public String toIndex(HttpServletRequest request,Model model,Integer id){
		DataSourceContextHolder.setDbType(DataSourceType.RESOURCE);
//		Student stu = new Student(1, "张三", 1, 15, "清华");
//		studentService.insert(stu);
		StudentResource sr = studentService.selectByPrimaryKey(id);
		model.addAttribute("lz", "测试完美");
		return "test";
	}
	
	
}
