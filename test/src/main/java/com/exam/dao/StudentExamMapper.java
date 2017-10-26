package com.exam.dao;

import com.exam.entity.StudentExam;

public interface StudentExamMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StudentExam record);

    int insertSelective(StudentExam record);

    StudentExam selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StudentExam record);

    int updateByPrimaryKey(StudentExam record);
}