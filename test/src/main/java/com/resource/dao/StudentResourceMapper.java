package com.resource.dao;

import com.resource.entity.StudentResource;

public interface StudentResourceMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StudentResource record);

    int insertSelective(StudentResource record);

    StudentResource selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StudentResource record);

    int updateByPrimaryKey(StudentResource record);
}