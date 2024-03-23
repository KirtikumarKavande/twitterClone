import { atom } from "recoil";
const auth = atom({
  key: "auth",
  default: "login",
});

export default auth;
