import { MdClose } from "react-icons/md";
import { primaryGradient } from "@styles/theme2";
import {
	Button,
	IconButton,
	// ButtonProps
} from "@mui/material";

// type Override<T, R> = Omit<T, keyof R> & R;
// type CustomButtonProps = Override<
// 	ButtonProps,
// 	{
// 		color?: "primary" | "gradientPrimary";
// 	}
// >;
// const CustomButton = ({ color = "primary", ...props }: CustomButtonProps) => {
// 	console.log(color);
// 	return (
// 		<Button
// 			{...props}
// 			sx={{
// 				...props.sx,
// 				background: (theme) => theme.vars.customPalette.variant[color].main,
// 				"&:hover": {
// 					background: (theme) => theme.vars.customPalette.variant[color].dark,
// 				},
// 			}}
// 		>
// 			test
// 		</Button>
// 	);
// };

const Home = () => {
	console.log(primaryGradient);
	return (
		<div>
			{/* <CustomButton
				variant={"outlined"}
				color={"gradientPrimary"}
				sx={{
					m: 2,
				}}
			>
				Home!!
			</CustomButton> */}
			<Button
				variant="contained"
				size={"small"}
			>
				Hello!!
			</Button>
			<MdClose
				style={{
					fontSize: "2rem",
					background: primaryGradient,
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
				}}
			/>{" "}
		</div>
	);
};

export default Home;
