import {
	AppBar,
	Avatar,
	Box,
	Container,
	Grid,
	Hidden,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";

import { Icon } from "@iconify/react";
import Search from "./Search";
const WebsiteHeader = () => {
	return (
		<>
			<AppBar
				sx={{
					bgcolor: "background.default",
					boxShadow: 0,
					mt: 2,
				}}
			>
				<Toolbar>
					<Grid
						container
						sx={{
							justifyContent: "space-between",
						}}
					>
						<Hidden mdDown>
							<Grid
								item
								xs={0}
								md={2}
							>
								<Avatar
									src={"/favicon.svg"}
									variant={"square"}
									sx={{
										height: "35px",
										width: "35px",
									}}
								/>
							</Grid>
						</Hidden>
						<Grid
							item
							xs={10.4}
							md={8}
						>
							<Search />
						</Grid>
						<Grid
							item
							xs={1}
							md={2}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-end",
							}}
						>
							<Hidden mdDown>
								<IconButton
									color={"warning"}
									size={"large"}
								>
									<Icon icon="game-icons:two-coins" />
								</IconButton>
								<Typography sx={{ mr: 1, color: "text.primary" }}>
									1055
								</Typography>
							</Hidden>
							<IconButton
								className="gradient-dp"
								sx={{
									// borderRadius: "10000px",
									// borderWidth: "2px",
									// borderStyle: "solid",
									// borderImageSource:
									// 	"linear-gradient(180deg, #0074FD 0%, #00D1FF 100%)",
									// borderImageSlice: 1,
									position: "relative",
									// "&:before": {
									// content: "",
									// 	position: "absolute",
									// 	top: "-5px",
									// 	left: "-5px",
									// 	right: "-5px",
									// 	bottom: "-5px",
									// 	width: "calc(100% + 10px)",
									// 	height: "calc(100% + 10px)",
									// 	zIndex: "-1",
									// 	borderRadius: "500px",
									// 	background:
									// 		"linear-gradient(180deg, #0074FD 0%, #00D1FF 100%)",
									// },
								}}
							>
								<Avatar
									src={
										"https://s.gravatar.com/avatar/503426b0f95d0adda0d395878c12586e"
									}
								/>
							</IconButton>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<Box
				sx={{
					mt: { xs: "76px", sm: "84px" },
				}}
			/>
		</>
	);
};

export default WebsiteHeader;
