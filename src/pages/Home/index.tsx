import {Button, ButtonProps} from '@mui/material'


type Override<T, R> = Omit<T, keyof R> & R;
type CustomButtonProps = Override<
  ButtonProps,
  {
    color?: "primary" | "gradientPrimary";
  }
>;
const CustomButton = ({ color = "primary" }: CustomButtonProps) => {
  return (
    <Button
      sx={{
        background: (theme) => theme.vars.customPalette.variant[color].main,
        "&:hover": {
          background: (theme) => theme.vars.customPalette.variant[color].dark
        }
      }}
      variant="contained"
    >
      test
    </Button>
  );
};


const Home = () => {
  return (
    <div>
      <CustomButton variant={'contained'} color={'gradientPrimary'}>Home!!</CustomButton>
    </div>
  )
}

export default Home