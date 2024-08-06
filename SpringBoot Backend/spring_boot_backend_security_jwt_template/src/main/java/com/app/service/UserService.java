package com.app.service;

import com.app.dto.ApiResponse;
import com.app.dto.SigninRequest;
import com.app.dto.SigninResponse;
import com.app.dto.Signup;

public interface UserService {
	//add signup method
	
	ApiResponse userRegistration(Signup signup);
}
