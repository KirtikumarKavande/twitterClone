import { atom } from "recoil";

const user = atom({
	key: "userAtom",
	default: JSON.parse(localStorage.getItem("user")),
});

export default user;