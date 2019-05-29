package com.infi.main;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.infi.main.api.service.MainService;

public class MainController extends MultiActionController {
	
	private static final Logger logger = LoggerFactory.getLogger(MainController.class);
	
	private MainService mainService;
	
	public void setMainService(MainService mainService) {
		this.mainService = mainService;
	}
	
	public ModelAndView goHome(HttpServletRequest request, HttpServletResponse response) {
		ModelAndView mv = new ModelAndView("main/index");
		logger.debug(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> goHome() start!");
		
		String message = "HOME";
		
		mv.addObject("message", message);

		return mv;
	}
}
