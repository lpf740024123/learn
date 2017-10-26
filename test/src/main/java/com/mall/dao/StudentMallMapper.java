package com.mall.dao;

import com.mall.entity.StudentMall;

public interface StudentMallMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StudentMall record);

    int insertSelective(StudentMall record);

    StudentMall selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StudentMall record);

    int updateByPrimaryKey(StudentMall record);
}