import { ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import { Icon } from '@iconify/react';
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";

type INavData = {
	icon: React.ReactNode,
	name: string,
	to: string,
}
const navData:INavData[] = [
	{
		icon: <Icon icon="bx:joystick" />,
		name: "Play",
		to: "/",
	},
	{
		icon: <Icon icon="fe:trophy" />,
		name: "Compete",
		to: "/",
	},
	{
		icon: <Icon icon="iconoir:leaderboard-star" />,
		name: "Leaderboard",
		to: "/",
	},
	{
		icon: <Icon icon="bx:news" />,
		name: "Newsfeed",
		to: "/",
	},
]

const LeftNavigator : React.FC = () => {
	return <div>
		<Box sx={{
			mt: "10px"
		}}>
			{
				navData.map((item, index) => (
					<ListItemButton component={Link} to={item.to} key={index}>
						<ListItemIcon sx={
							{
								color: "primary.main",
								fontSize: "24px",
							}
						}>{item.icon}</ListItemIcon>
						<ListItemText primary={item.name} />
					</ListItemButton>
				))
			}
		</Box>

	</div>;
};

export default LeftNavigator;
