import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useShowToast from "./useShowToast";
import useGetDataFromDB from "./useGetDataFromDb";

const useGetUserProfile = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const { username } = useParams();
	const showToast = useShowToast();
    const getDataFromDb=useGetDataFromDB()
	const getUser = async () => {


		try {
			let data=await getDataFromDb(`user/profile/${username}`)
			if (!data.success) {
				showToast("Error", data.message, "error");
				return;
			}
			// if (data.isFrozen) {
			// 	setUser(null);
			// 	return;
			// }
			setUser(data);
		} catch (error) {
			showToast("Error", error.message, "error");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		console.log("kirtikumar")
		getUser();
	},[username]);

	return { loading, user };
};

export default useGetUserProfile;