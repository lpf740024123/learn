package com.cms.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cms.dao.StudentCMSMapper;
import com.cms.service.StudentCmsService;


@Service("studentCmsService")
public class StudentCmsServiceImpl implements StudentCmsService {
	@Resource
	private StudentCMSMapper studentCMSMapper;

}
