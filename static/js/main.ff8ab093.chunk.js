(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{134:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),i=t(38),o=t.n(i),c=(t(48),t(2)),l=t(9),u=t(4),m=t(3),p=t(39);function s(){var n=Object(c.a)(['\n  font-family: "Orbitron", sans-serif;\n  position: fixed;\n  display: flex;\n  top: 0;\n  z-index: 9999;\n  justify-content: center;\n  align-items: center;\n  height: 80px;\n  width: 100%;\n  border-bottom: 1px solid lightgray;\n  box-sizing: border-box;\n  background-color: white;\n']);return s=function(){return n},n}function d(){var n=Object(c.a)(["\n  font-size: 24px;\n  /* font-weight: bold; */\n  text-decoration: none;\n  color: black;\n"]);return d=function(){return n},n}function x(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 1200px;\n  height: 100%;\n  padding: 0px 20px;\n  box-sizing: border-box;\n"]);return x=function(){return n},n}function f(){var n=Object(c.a)(["\n  cursor: pointer;\n"]);return f=function(){return n},n}var g=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(E,null,a.a.createElement(h,null,a.a.createElement(v,{to:"/"},"Blog"),a.a.createElement(b,null,a.a.createElement(p.a,{size:36})))))},b=m.a.div(f()),h=m.a.div(x()),v=Object(m.a)(l.c)(d()),E=m.a.div(s());function w(){var n=Object(c.a)(["\n  padding: 100px 10px;\n  max-width: 1000px;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  @media (max-width: 768px) {\n    max-width: 100%;\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n"]);return w=function(){return n},n}function k(){var n=Object(c.a)(["\n  font-size: 14px;\n  color: gray;\n  margin-bottom: 10px;\n"]);return k=function(){return n},n}function y(){var n=Object(c.a)(["\n  font-size: 30px;\n  margin-bottom: 10px;\n"]);return y=function(){return n},n}function j(){var n=Object(c.a)(["\n  border-top: 1px solid lightgray;\n"]);return j=function(){return n},n}function O(){var n=Object(c.a)(["\n  border: 1px solid lightgray;\n  border-left: 0px;\n  border-right: 0px;\n  padding: 70px 0px;\n  overflow: scroll;\n"]);return O=function(){return n},n}function P(n){return a.a.createElement("img",Object.assign({},n,{style:{maxWidth:"100%"}}))}function z(n){return a.a.createElement("pre",{style:{background:"#000",color:"#fff",padding:10,borderRadius:10}},a.a.createElement("code",null,n.value))}var F=function(n){var e=n.text,i=n.title,o=n.time,c=t(54);return a.a.createElement(r.Fragment,null,a.a.createElement(B,null,a.a.createElement(W,null,i),a.a.createElement(A,null,o),a.a.createElement(T,null,a.a.createElement(c,{source:e,renderers:{image:P,code:z}}))))},T=m.a.div(O()),W=(m.a.div(j()),m.a.div(y())),A=m.a.div(k()),B=m.a.div(w());var M=function(){return a.a.createElement(F,{text:"\n### \ucee4\ubba4\ub2c8\ud2f0 \uc6f9\uc0ac\uc774\ud2b8 \ud504\ub85c\uc81d\ud2b8\uc758 \ub85c\uadf8\uc778 \ud328\ud134\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4.\n  ![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FceLV2b%2FbtqESXpoa4r%2Fk1VUxkO5LN67buV5XGue2k%2Fimg.png)\n\n#### 1.  \ud504\ub860\ud2b8\uc5d4\ub4dc LoginPage\uc5d0\uc11c Email\uacfc Password \uac12\uc744 \ubc1b\uc544 api/login \uc744 \ucf5c\ud55c\ub2e4.\n#### 2.  \ubc31\uc5d4\ub4dc api/login\uc5d0\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c \uc804\uc1a1\ud55c email\uacfc password \uac12\uc744 \uc804\uc1a1\ubc1b\uc544 \ub2e4\uc74c\uacfc \uac19\uc740 methods\ub97c \uc2e4\ud589\ud55c\ub2e4.\n#### 3.\n##### A. FindOne\n\n1. \ud574\ub2f9 req.email\uac12\uc73c\ub85c User\ub97c \uc870\ud68c\ud558\uace0, \uc870\ud68c\ub41c \ub370\uc774\ud130\ub97c user\ub85c \ubc1b\ub294\ub2e4.\n\n2. user\uac00 \uc874\uc7ac\ud55c\ub2e4\uba74 comparePassword\ub97c \uc2e4\ud589\ud55c\ub2e4.\n\n##### B. ComparePassword\n\n1. req.password\uac12\uacfc user.password\ub97c \ube44\uad50\ud55c \ub4a4, \ub3d9\uc77c\ud55c\uc9c0 \ud655\uc778\ud55c\ub2e4.\n\n2. \ub3d9\uc77c\ud558\ub2e4\uba74 generateToken\uc744 \uc2e4\ud589\ud55c\ub2e4.\n\n##### C. GenerateToken\n\n1. user\uc5d0\uc11c .id \uac12\uc744 16\uc9c4\uc218\ub85c \ubcc0\ud658\ud55c \ub4a4, secret\uac12\uacfc \ud568\uaed8 jwt\ub97c \ud1b5\ud574 \uc778\ucf54\ub529\uc744 \ud558\uace0 user.token\uc73c\ub85c \ubc18\ud658\ud55c\ub2e4.\n\n2. \ud1a0\ud070 \uc720\ud6a8\uae30\uac04\uc744 \uc124\uc815\ud55c\ub4a4, user.tokenExp\ub85c \ubc1b\uc544\uc628\ub2e4.\n\n3. user\uc5d0 user.token\uacfc user.tokenExp\uac12\uc744 \uc800\uc7a5\ud55c\ub2e4.\n\n4. \ud574\ub2f9 \uac12\uc744 \ucfe0\ud0a4\uc5d0 \uc800\uc7a5\ud55c\ub2e4.\n\n#### 4. json\ud615\uc2dd\uc73c\ub85c loginSuccess\uac12\uacfc user._id\uac12\uc744 userId\uc5d0 \ub123\uc5b4 response\ud55c\ub2e4.\n#### 5. \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c dispatch\ub97c \ud1b5\ud574 loginSuccess\uac12\uc744 \uc2a4\ud1a0\uc5b4\uc5d0 \uc800\uc7a5\ud558\uace0\n#### 6. userId\uac12\uc740 LocalStorage\uc5d0 \uc800\uc7a5\ud55c\ub2e4.\n  ",title:"[React] \ucee4\ubba4\ub2c8\ud2f0 \uc6f9\uc0ac\uc774\ud2b8 \uac1c\ubc1c\uc77c\uc9c0 #1 (Login)",time:"2020.06.15"})};var L=function(){return a.a.createElement(F,{text:"\n  \ub9c8\ud06c\ub2e4\uc6b4 markdown \uc791\uc131\ubc95\n\n  ======================\n  \n  # 1. \ub9c8\ud06c\ub2e4\uc6b4\uc5d0 \uad00\ud558\uc5ec\n  ## 1.1. \ub9c8\ud06c\ub2e4\uc6b4\uc774\ub780?\n  [**Markdown**](http://whatismarkdown.com/)\uc740 \ud14d\uc2a4\ud2b8 \uae30\ubc18\uc758 \ub9c8\ud06c\uc5c5\uc5b8\uc5b4\ub85c 2004\ub144 \uc874\uadf8\ub8e8\ubc84\uc5d0 \uc758\ud574 \ub9cc\ub4e4\uc5b4\uc84c\uc73c\uba70 \uc27d\uac8c \uc4f0\uace0 \uc77d\uc744 \uc218 \uc788\uc73c\uba70 HTML\ub85c \ubcc0\ud658\uc774 \uac00\ub2a5\ud558\ub2e4. \ud2b9\uc218\uae30\ud638\uc640 \ubb38\uc790\ub97c \uc774\uc6a9\ud55c \ub9e4\uc6b0 \uac04\ub2e8\ud55c \uad6c\uc870\uc758 \ubb38\ubc95\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc6f9\uc5d0\uc11c\ub3c4 \ubcf4\ub2e4 \ube60\ub974\uac8c \ucee8\ud150\uce20\ub97c \uc791\uc131\ud558\uace0 \ubcf4\ub2e4 \uc9c1\uad00\uc801\uc73c\ub85c \uc778\uc2dd\ud560 \uc218 \uc788\ub2e4.\n  \ub9c8\ud06c\ub2e4\uc6b4\uc774 \ucd5c\uadfc \uac01\uad11\ubc1b\uae30 \uc2dc\uc791\ud55c \uc774\uc720\ub294 \uae43\ud5d9([https://github.com](https://github.com)) \ub355\ubd84\uc774\ub2e4. \uae43\ud5d9\uc758 \uc800\uc7a5\uc18cRepository\uc5d0 \uad00\ud55c \uc815\ubcf4\ub97c \uae30\ub85d\ud558\ub294 README.md\ub294 \uae43\ud5d9\uc744 \uc0ac\uc6a9\ud558\ub294 \uc0ac\ub78c\uc774\ub77c\uba74 \ub204\uad6c\ub098 \uac00\uc7a5 \uba3c\uc800 \uc811\ud558\uac8c \ub418\ub294 \ub9c8\ud06c\ub2e4\uc6b4 \ubb38\uc11c\uc600\ub2e4. \ub9c8\ud06c\ub2e4\uc6b4\uc744 \ud1b5\ud574\uc11c \uc124\uce58\ubc29\ubc95, \uc18c\uc2a4\ucf54\ub4dc \uc124\uba85, \uc774\uc288 \ub4f1\uc744 \uac04\ub2e8\ud558\uac8c \uae30\ub85d\ud558\uace0 \uac00\ub3c5\uc131\uc744 \ub192\uc77c \uc218 \uc788\ub2e4\ub294 \uac15\uc810\uc774 \ubd80\uac01\ub418\uba74\uc11c \uc810\uc810 \uc5ec\ub7ec \uacf3\uc73c\ub85c \ud37c\uc838\uac00\uac8c \ub41c\ub2e4.\n  \n  ## 1.2. \ub9c8\ud06c\ub2e4\uc6b4\uc758 \uc7a5-\ub2e8\uc810\n  ### 1.2.1. \uc7a5\uc810\n    1. \uac04\uacb0\ud558\ub2e4.\n    2. \ubcc4\ub3c4\uc758 \ub3c4\uad6c\uc5c6\uc774 \uc791\uc131\uac00\ub2a5\ud558\ub2e4.\n    3. \ub2e4\uc591\ud55c \ud615\ud0dc\ub85c \ubcc0\ud658\uc774 \uac00\ub2a5\ud558\ub2e4.\n    3. \ud14d\uc2a4\ud2b8(Text)\ub85c \uc800\uc7a5\ub418\uae30 \ub54c\ubb38\uc5d0 \uc6a9\ub7c9\uc774 \uc801\uc5b4 \ubcf4\uad00\uc774 \uc6a9\uc774\ud558\ub2e4.\n    4. \ud14d\uc2a4\ud2b8\ud30c\uc77c\uc774\uae30 \ub54c\ubb38\uc5d0 \ubc84\uc804\uad00\ub9ac\uc2dc\uc2a4\ud15c\uc744 \uc774\uc6a9\ud558\uc5ec \ubcc0\uacbd\uc774\ub825\uc744 \uad00\ub9ac\ud560 \uc218 \uc788\ub2e4.\n    5. \uc9c0\uc6d0\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uacfc \ud50c\ub7ab\ud3fc\uc774 \ub2e4\uc591\ud558\ub2e4.\n  ### 1.2.2. \ub2e8\uc810\n    1. \ud45c\uc900\uc774 \uc5c6\ub2e4.\n    2. \ud45c\uc900\uc774 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \ub3c4\uad6c\uc5d0 \ub530\ub77c\uc11c \ubcc0\ud658\ubc29\uc2dd\uc774\ub098 \uc0dd\uc131\ubb3c\uc774 \ub2e4\ub974\ub2e4.\n    3. \ubaa8\ub4e0 HTML \ub9c8\ud06c\uc5c5\uc744 \ub300\uc2e0\ud558\uc9c0 \ubabb\ud55c\ub2e4.\n  \n  ****\n  ",title:"\ub450\ubc88\uc9f8 \uae00",time:"2020.06.15"})};var R=function(){return a.a.createElement(F,{text:'\n### Post \uad00\ub828\n1. PostWrapper\nPostWrapper\uc5d0 React-MarkDown \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ucd94\uac00\ud558\uace0, styled-components\ub97c \ud1b5\ud574 \ub514\uc790\uc778\uc744 \ubbf8\ub9ac \uc124\uc815\ud574\ub17c\ub2e4.\n\n2. \uac19\uc740 \ud3f4\ub354\uc5d0 Post# \ud30c\uc77c\uc744 \ub9cc\ub4e0\ub4a4, title,time\uacfc \ub9c8\ud06c\ub2e4\uc6b4\ud615\uc2dd\uc73c\ub85c \uc4f4 text\ub97c \uc791\uc131\ud55c \ub4a4, PostWrapper\ub97c import \ud558\uace0 PostWrapper\uc5d0 \uc704 title,time\uacfc text\ub97c props\ub85c \uc124\uc815\ud55c \ub4a4, \uc774 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9ac\ud134\ud55c\ub2e4.\n```js\nfunction Image(props) {\n  return <img {...props} style={{ maxWidth: "100%" }} />;\n}\nfunction CodeBlock(props) {\n  return (\n    <pre style={{ background: "#000", color: "#fff", padding: 10 }}>\n      <code>{props.value}</code>\n    </pre>\n  );\n}\nfunction PostWrapper({ text, title, time }) {\n  const Md = require("react-markdown");\n\n  return (\n    <Fragment>\n      <BodyContainer>\n        <Title>{title}</Title>\n        <Time>{time}</Time>\n        <Article>\n          <Md source={text} renderers={{ image: Image, code: CodeBlock }} />\n        </Article>\n      </BodyContainer>\n    </Fragment>\n  );\n}\n\nexport default PostWrapper;\n```\n',title:"\uc138\ubc88\uc9f8 \uae00",time:"2020.06.15"})};var C=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(u.a,{exact:!0,path:"/Post1",component:M}),a.a.createElement(u.a,{exact:!0,path:"/Post2",component:L}),a.a.createElement(u.a,{exact:!0,path:"/Post3",component:R}))},S=t(19);function q(){var n=Object(c.a)(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 80px;\n  width: 100%;\n  height: 500px;\n  background-image: url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80");\n  background-repeat: no-repeat;\n  background-size: 100% 500px;\n  @media (max-width: 768px) {\n    height: 300px;\n    background-size: 100% 300px;\n  }\n']);return q=function(){return n},n}function I(){var n=Object(c.a)(["\n  cursor: pointer;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  height: 70px;\n  background-color: white;\n  opacity: 0.8;\n  border: 1px solid white;\n  border-radius: 10px;\n  transition: opacity 0.6s ease;\n  margin: 0px 10px;\n  &:hover {\n    opacity: 1;\n  }\n  @media (max-width: 768px) {\n    width: 130px;\n    height: 50px;\n  }\n"]);return I=function(){return n},n}function D(){var n=Object(c.a)(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  height: 70px;\n  background-color: white;\n  opacity: 0.8;\n  border: 1px solid white;\n  border-radius: 10px;\n  transition: opacity 0.6s ease;\n  margin: 0px 10px;\n  &:hover {\n    opacity: 1;\n  }\n  @media (max-width: 768px) {\n    width: 130px;\n    height: 50px;\n  }\n"]);return D=function(){return n},n}function H(){var n=Object(c.a)(['\n  font-family: "Orbitron", sans-serif;\n  font-size: 20px;\n  color: black;\n  text-decoration: none;\n  @media (max-width: 768px) {\n    font-size: 16px;\n  }\n']);return H=function(){return n},n}function J(){var n=Object(c.a)(["\n  cursor: pointer;\n  &:link {\n    color: black;\n  }\n  &:visited {\n    color: black;\n  }\n"]);return J=function(){return n},n}var V=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(N,null,a.a.createElement(U,{href:"https://github.com/kimuhjin"},a.a.createElement(_,{href:"https://github.com/kimuhjin"},a.a.createElement(S.a,{size:40}))),a.a.createElement(X,{to:"/Portfolios"},a.a.createElement(G,null,"Portfolios")),a.a.createElement(U,{href:"https://github.com/kimuhjin"},a.a.createElement(_,{href:"https://www.instagram.com/kimuhjin__/"},a.a.createElement(S.b,{size:40})))))},_=m.a.a(J()),G=m.a.div(H()),U=m.a.a(D()),X=Object(m.a)(l.c)(I()),N=m.a.div(q());function Q(){var n=Object(c.a)(["\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  @media (max-width: 768px) {\n    max-width: 100%;\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n"]);return Q=function(){return n},n}function Y(){var n=Object(c.a)(["\n  padding: 20px;\n"]);return Y=function(){return n},n}function $(){var n=Object(c.a)(["\n  display: block;\n  text-decoration: none;\n  cursor: pointer;\n  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.18);\n  padding: 30px;\n  border-radius: 20px;\n  margin-bottom: 30px;\n"]);return $=function(){return n},n}function K(){var n=Object(c.a)(["\n  font-size: 12px;\n  margin: 10px;\n  color: black;\n"]);return K=function(){return n},n}function Z(){var n=Object(c.a)(["\n  font-size: 16px;\n  margin: 10px;\n  color: black;\n"]);return Z=function(){return n},n}function nn(){var n=Object(c.a)(["\n  font-size: 24px;\n  font-weight: bold;\n  margin: 10px;\n  color: black;\n  &:hover {\n    color: gray;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 50px;\n\n  height: 100px;\n  font-size: 28px;\n  color: gray;\n  box-sizing: border-box;\n"]);return en=function(){return n},n}var tn=function(){var n=[{Title:"[React] \ucee4\ubba4\ub2c8\ud2f0 \uc6f9\uc0ac\uc774\ud2b8 \uac1c\ubc1c\uc77c\uc9c0 #1 (Login)",Article:"\ucee4\ubba4\ub2c8\ud2f0 \uc6f9\uc0ac\uc774\ud2b8 \uac1c\ubc1c\uc77c\uc9c0 #1",Time:"6\uc6d4 15\uc77c",Post:"Post1"},{Title:"\ub450\ubc88\uc9f8 \uae00",Article:"\ub450\ubc88\uc9f8 \uae00\uc785\ub2c8\ub2e4.",Time:"6\uc6d4 15\uc77c",Post:"Post2"},{Title:"\uc138\ubc88\uc9f8 \uae00",Article:"\uc138\ubc88\uc9f8 \uae00\uc785\ub2c8\ub2e4.",Time:"6\uc6d4 15\uc77c",Post:"Post3"}],e=n.map((function(n){return a.a.createElement(ln,{to:n.Post},a.a.createElement(an,null,n.Title),a.a.createElement(on,null,n.Article),a.a.createElement(cn,null,n.Time))}));return a.a.createElement(r.Fragment,null,a.a.createElement(V,null),a.a.createElement(mn,null,a.a.createElement(un,null,a.a.createElement(rn,null,"\uc804\uccb4 \uac8c\uc2dc\ubb3c (",n.length,")"),e)))},rn=m.a.div(en()),an=m.a.div(nn()),on=m.a.div(Z()),cn=m.a.div(K()),ln=Object(m.a)(l.c)($()),un=m.a.div(Y()),mn=m.a.div(Q());var pn=function(){return a.a.createElement("div",null)};function sn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 10px;\n  max-width: 1200px;\n  min-height: 1000px;\n  border: 4px solid red;\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  @media (max-width: 768px) {\n    max-width: 100%;\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n"]);return sn=function(){return n},n}function dn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 1000px;\n  padding: 50px 50px;\n  border: 3px solid blue;\n  box-sizing: border-box;\n  @media (max-width: 764px) {\n    padding: 50px 0px;\n  }\n"]);return dn=function(){return n},n}function xn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return xn=function(){return n},n}function fn(){var n=Object(c.a)(['\n  font-size: 28px;\n  font-family: "Orbitron", sans-serif;\n  margin-bottom: 30px;\n']);return fn=function(){return n},n}function gn(){var n=Object(c.a)(["\n  display: flex;\n  /* align-items: flex-start; */\n  flex-wrap: wrap;\n  border: 2px solid green;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n"]);return gn=function(){return n},n}function bn(){var n=Object(c.a)(["\n  cursor: pointer;\n  margin: 30px 30px;\n  width: 200px;\n  height: 200px;\n  /* border: 1px solid black; */\n  box-shadow: 1px 1px 10px 1px lightgray;\n  border-radius: 10px;\n  box-sizing: border-box;\n  /* background-color: yellowgreen; */\n  margin-bottom: 50px;\n  transition: transform 0.5s;\n  -webkit-transform: translate3d(0, 0, 0);\n  /* -webkit-backface-visibility: hidden; */\n  &:hover {\n    transform: perspective(600px) rotateY(30deg);\n  }\n"]);return bn=function(){return n},n}var hn=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(jn,null,a.a.createElement(yn,null,a.a.createElement(kn,null,a.a.createElement(wn,null,"Only-FrontEnd"),a.a.createElement(En,null,a.a.createElement(vn,null),a.a.createElement(vn,null),a.a.createElement(vn,null))),a.a.createElement(kn,null,a.a.createElement(wn,null,"Full-Stack"),a.a.createElement(En,null,a.a.createElement(vn,null),a.a.createElement(vn,null),a.a.createElement(vn,null))))))},vn=m.a.div(bn()),En=m.a.div(gn()),wn=m.a.div(fn()),kn=m.a.div(xn()),yn=m.a.div(dn()),jn=m.a.div(sn());function On(){var n=Object(c.a)(["\n  margin-top: 80px;\n"]);return On=function(){return n},n}var Pn=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(l.b,null,a.a.createElement(g,null),a.a.createElement(zn,null,a.a.createElement(u.a,{exact:!0,path:"/",component:tn}),a.a.createElement(u.a,{exact:!0,path:"/Portfolios",component:hn})),a.a.createElement(C,null)),a.a.createElement(pn,null))},zn=m.a.div(On());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,null,a.a.createElement(Pn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},43:function(n,e,t){n.exports=t(134)},48:function(n,e,t){}},[[43,1,2]]]);
//# sourceMappingURL=main.ff8ab093.chunk.js.map