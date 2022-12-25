import { Button } from "@mui/material";

const Home = () => {
	return (
		<div>
			<Button
				variant="contained"
				sx={{ m: 2 }}
				className={"bg-gradient-to-r from-cyan-500 to-blue-500"}
			>
				Hello from Website!!
			</Button>
		</div>
	);
};

export default Home;
