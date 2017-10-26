package com.cms.dao;

import com.cms.entity.StudentCMS;

public interface StudentCMSMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StudentCMS record);

    int insertSelective(StudentCMS record);

    StudentCMS selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StudentCMS record);

    int updateByPrimaryKey(StudentCMS record);
}