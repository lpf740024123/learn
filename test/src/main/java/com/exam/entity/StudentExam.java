package com.exam.entity;

import com.base.entity.Student;

public class StudentExam {
    private Integer id;

    private String name;

    private Integer sex;

    private Integer age;

    private String school;

    public StudentExam(Student stu) {
		// TODO Auto-generated constructor stub
    	this.id = stu.getId();
    	this.name = stu.getName();
    	this.sex = stu.getSex();
    	this.age = stu.getAge();
    	this.school = stu.getSchool();
    }

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school == null ? null : school.trim();
    }
}