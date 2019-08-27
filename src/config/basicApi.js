
// development production 本地和生产环境

export default {
  api: process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'http://www.aichihua.com',
}