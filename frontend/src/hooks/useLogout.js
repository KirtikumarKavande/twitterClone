import userAtom from "../atoms/user.atom";
import { useSetRecoilState } from "recoil";
import useShowToast from "./useShowToast";

const useLogout = () => {
	const setUser = useSetRecoilState(userAtom);
	const showToast = useShowToast();

	const logout = async () => {
		try {
			const res = await fetch("http://localhost:4000/api/v1/user/logout", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: 'include',

			});
			const data = await res.json();
			console.log(data)

			if (!data.success) {
				showToast("Error", data.message, "error");
				return;
			}

			localStorage.removeItem("user");
			setUser(null);
		} catch (error) {
			showToast("Error", error, "error");
		}
	};

	return logout;
};

export default useLogout;