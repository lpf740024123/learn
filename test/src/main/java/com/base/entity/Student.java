package com.base.entity;

public class Student {
    private Integer id;

    private String name;

    private Integer sex;

    private Integer age;

    private String school;
    
    public Student() {
		super();
	}

	public Student(Integer id, String name, Integer sex, Integer age,
			String school) {
		super();
		this.id = id;
		this.name = name;
		this.sex = sex;
		this.age = age;
		this.school = school;
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