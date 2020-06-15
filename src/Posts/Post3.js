import PostWrapper from "./PostWrapper";
import React from "react";

function Post3() {
  const title = "세번째 글";
  const time = "2020.06.15";
  const text = `
### 샘플
  `;
  return <PostWrapper text={text} title={title} time={time} />;
}

export default Post3;
