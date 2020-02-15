import axios from '@/axios.js'
const api = {
  getHotPlaceList(params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params);
  },
  getSearchList(params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  getMenuList() {
    return axios.get('/api/meituan/index/nav.json')
  },
  getIStyleList() {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  // 热门城市列表
  getHotList() {
    return axios.get('/api/meituan/city/hot.json')
  },
  // 最近访问城市
  getRencentList() {
    return axios.get('/api/meituan/city/recents.json')
  },
  // 获取省份
  getProvinceList() {
    return axios.get('/api/meituan/city/province.json')
  },
  // 产品展示列表数据获取
  getProductsList() {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  login(params) {
    return axios.get('/api/meituan/login', {params})
  },
  register(params) {
    return axios.get('/api/meituan/register', {params})
  }
}

export default api;
