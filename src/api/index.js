// api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dawnai.cloud', // 替换成你的 API 地址
  timeout: 500000 // 设置请求超时时间
});

export default {
  // 发送sdxl算法请求
  getSdxltData(data) {
    return apiClient.post('/make-prediction', data)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }
};