import PostWrapper from "./PostWrapper";
import React from "react";

function Post1() {
  const title = "[React] 커뮤니티 웹사이트 개발일지 #1 (Login)";
  const time = "2020.06.15";
  const text = `
### 커뮤니티 웹사이트 프로젝트의 로그인 패턴은 다음과 같다.
  ![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FceLV2b%2FbtqESXpoa4r%2Fk1VUxkO5LN67buV5XGue2k%2Fimg.png)

#### 1.  프론트엔드 LoginPage에서 Email과 Password 값을 받아 api/login 을 콜한다.
#### 2.  백엔드 api/login에서 프론트엔드에서 전송한 email과 password 값을 전송받아 다음과 같은 methods를 실행한다.
#### 3.
##### A. FindOne

1. 해당 req.email값으로 User를 조회하고, 조회된 데이터를 user로 받는다.

2. user가 존재한다면 comparePassword를 실행한다.

##### B. ComparePassword

1. req.password값과 user.password를 비교한 뒤, 동일한지 확인한다.

2. 동일하다면 generateToken을 실행한다.

##### C. GenerateToken

1. user에서 .id 값을 16진수로 변환한 뒤, secret값과 함께 jwt를 통해 인코딩을 하고 user.token으로 반환한다.

2. 토큰 유효기간을 설정한뒤, user.tokenExp로 받아온다.

3. user에 user.token과 user.tokenExp값을 저장한다.

4. 해당 값을 쿠키에 저장한다.

#### 4. json형식으로 loginSuccess값과 user._id값을 userId에 넣어 response한다.
#### 5. 프론트엔드에서 dispatch를 통해 loginSuccess값을 스토어에 저장하고
#### 6. userId값은 LocalStorage에 저장한다.
  `;
  return <PostWrapper text={text} title={title} time={time} />;
}

export default Post1;
