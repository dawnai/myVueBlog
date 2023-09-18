// api.js

import axios from 'axios';

// 设置Replicate API的基本URL
const replicateApi = axios.create({
  baseURL: 'https://api.replicate.com/v1',
});

// 定义发送预测请求的API请求函数
export function sendPredictionRequest(apiToken, image) {
  const data = {
    version: 'ea3b2e163e2ad629fb23e81a1cc9e485c32aa4a53eba4fe08b7dbdd39e6e381e',
    input: {
      image: image,
    },
  };

  // 设置Authorization头
  const headers = {
    Authorization: `Token ${apiToken}`,
  };

  // 发送POST请求
  return replicateApi.post('/predictions', data, { headers });
}
