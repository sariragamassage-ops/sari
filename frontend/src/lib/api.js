import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const api = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  timeout: 20000,
});

export const getBootstrap = async () => {
  const { data } = await api.get("/bootstrap");
  return data;
};

export const getArticle = async (slug) => {
  const { data } = await api.get(`/articles/${slug}`);
  return data;
};
