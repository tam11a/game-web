import { Outlet } from "react-router-dom";
import WebsiteHeader from "./Header";
import LeftNavigator from "./LeftNavigator";
import RightNavigator from "./RightNavigator";
import { Avatar, Grid, Hidden, Paper } from "@mui/material";

const WebsiteLayout = () => {
	return (
		<>
			<WebsiteHeader />
			<Grid
				container
				sx={{
					height: {
						xs: "calc(100vh - 76px)",
						sm: "calc(100vh - 84px)",
					},
				}}
				columnGap={1}
			>
				<Grid
					item
					xs={0}
					md={2}
					sx={{
						maxHeight: {
							xs: "calc(100vh - 76px)",
							sm: "calc(100vh - 84px)",
						},
						overflow: "hidden",
						overflowY: "auto",
					}}
				>
					<Hidden mdDown>
						<LeftNavigator />
					</Hidden>
				</Grid>
				<Grid
					item
					sx={{
						flex: 1,
						position: "relative",
						height: {
							xs: "calc(100vh - 76px)",
							sm: "calc(100vh - 84px)",
						},
						overflow: "hidden",
					}}
				>
					<Paper
						elevation={0}
						sx={{
							height: {
								xs: "calc(100vh - 76px)",
								sm: "calc(100vh - 84px)",
							},
							background: "transparent",
							backgroundImage:
								"linear-gradient(180deg, #161E27ee 0%, #16212Eaa 100%)",
							// backgroundSize: "cover",
							boxShadow:
								"inset 0px 3px 5px -1px rgba(0, 0, 0, 0.2), inset 0px 5px 8px rgba(0, 0, 0, 0.14), inset 0px 1px 14px rgba(0, 0, 0, 0.12)",
							overflow: "hidden",
							overflowY: "auto",
							p: 1,
							zIndex: 10,
							position: "relative",
							borderRadius: "4px 4px 0 0",
						}}
					>
						<Outlet />
					</Paper>
					<Avatar
						src="/favicon.svg"
						variant="square"
						sx={{
							position: "absolute",
							bottom: "-2rem",
							right: "-2rem",
							aspectRatio: "1/1",
							width: { xs: "100vw", md: "30vw" },
							height: { xs: "100vw", md: "30vw" },
							opacity: 0.12,
							zIndex: 8,
						}}
					/>
				</Grid>
				<Grid
					item
					xs={0}
					md={2}
					sx={{
						maxHeight: {
							xs: "calc(100vh - 76px)",
							sm: "calc(100vh - 84px)",
						},
						overflow: "hidden",
						overflowY: "auto",
					}}
				>
					<Hidden mdDown>
						<RightNavigator />
					</Hidden>
				</Grid>
			</Grid>
		</>
	);
};

export default WebsiteLayout;
