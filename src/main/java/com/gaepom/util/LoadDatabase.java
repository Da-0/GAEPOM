package com.gaepom.util;



import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.gaepom.dao.GUserRepository;
import com.gaepom.domain.GUser;


@Aspect
@Configuration
public class LoadDatabase {

	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

	@Bean
	CommandLineRunner initDatabase(GUserRepository repository) {

		return args -> {
			log.info("Preloading " + repository.save(new GUser("user1", "11", "유재석", 30, "you@naver.com", "010-1111-2222", "서울시 서초구", "Java", "이미지경로", "개발자", null, null)));
			log.info("Preloading " + repository.save(new GUser("user2", "11", "강호동", 35, "kang@naver.com", "010-3333-4444", "서울시 강남구", "Python", "이미지경로", "개발자", null, null)));
			log.info("Preloading " + repository.save(new GUser("user3", "11", "신동엽", 40, "sin@naver.com", "010-5555-6666", "경기도 부천시", "PPT", "이미지경로", "기획자", null, null)));
		};
	}
}