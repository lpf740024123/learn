package com.exam.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cms.dao.StudentCMSMapper;
import com.exam.service.StudentExamService;


@Service("studentExamService")
public class StudentExamServiceImpl implements StudentExamService {
	@Resource
	private StudentCMSMapper studentCMSMapper;

}
