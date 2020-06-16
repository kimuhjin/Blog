import PostWrapper from "./PostWrapper";
import React from "react";

function Post3() {
  const title = "세번째 글";
  const time = "2020.06.15";
  const text = `
### Post 관련
1. PostWrapper
PostWrapper에 React-MarkDown 라이브러리를 추가하고, styled-components를 통해 디자인을 미리 설정해논다.

2. 같은 폴더에 Post# 파일을 만든뒤, title,time과 마크다운형식으로 쓴 text를 작성한 뒤, PostWrapper를 import 하고 PostWrapper에 위 title,time과 text를 props로 설정한 뒤, 이 컴포넌트를 리턴한다.
\`\`\`js
function Image(props) {
  return <img {...props} style={{ maxWidth: "100%" }} />;
}
function CodeBlock(props) {
  return (
    <pre style={{ background: "#000", color: "#fff", padding: 10 }}>
      <code>{props.value}</code>
    </pre>
  );
}
function PostWrapper({ text, title, time }) {
  const Md = require("react-markdown");

  return (
    <Fragment>
      <BodyContainer>
        <Title>{title}</Title>
        <Time>{time}</Time>
        <Article>
          <Md source={text} renderers={{ image: Image, code: CodeBlock }} />
        </Article>
      </BodyContainer>
    </Fragment>
  );
}

export default PostWrapper;
\`\`\`
`;
  return <PostWrapper text={text} title={title} time={time} />;
}

export default Post3;
