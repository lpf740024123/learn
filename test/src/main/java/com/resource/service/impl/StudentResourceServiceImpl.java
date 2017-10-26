package com.resource.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.resource.dao.StudentResourceMapper;
import com.resource.service.StudentResourceService;


@Service("studentResourceService")
public class StudentResourceServiceImpl implements StudentResourceService {
	@Resource
	private StudentResourceMapper studentResourceMapper;

}
