import { string } from "yup";

const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
  if (localStorage.getItem(key)) return string(localStorage.getItem(key));
  return false;
};

const getItemGeneric = (key) => {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  return false;
};

const setItemGeneric = (key, value) => {
  localStorage.setItem(key, value);
};

const removeItem = (key) => {
  if (getItem(key) === false) return false;
  localStorage.removeItem(key);
};

const clearstorage = () => {
  localStorage.clear();
};

export {
  setItem,
  getItem,
  getItemGeneric,
  setItemGeneric,
  removeItem,
  clearstorage,
};
