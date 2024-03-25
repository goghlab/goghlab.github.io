import ThemeProvider from "./theme-provider";
import Navbar from "./navbar"
 
import { Typography, Input, Button } from "@material-tailwind/react";

export function SignUp() {
  return (
    <ThemeProvider>
      <Navbar />
      <section className="grid h-screen items-center p-8">
        <div className="text-center">
          <Typography variant="h3" color="blue-gray" className="mb-2">
            用戶登記
          </Typography>
          <Typography className="font-normal mb-12 text-blue-gray-800">
            輸入您的電子郵件和密碼以註冊。
          </Typography>
          <form action="#" className="mx-auto max-w-[24rem] text-left">
            <Input color="black" size="lg" label="Email" type="email" name="email" />
            <br></br>
            <Input color="black" size="lg" label="Password" type="Password" name="Password" />
            <Button color="blue" size="lg" className="mt-4" fullWidth>
              立即登記
            </Button>
            <div className="my-6 flex w-full items-center gap-2">
              <hr className="w-full bg-blue-gray-50" />
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium opacity-50"
              >
                OR
              </Typography>
              <hr className="w-full bg-blue-gray-50" />
            </div>
            <Typography
              color="gray"
              className="mt-6 text-center font-normal"
            >
               已有帳戶?{" "}
              <a
                 href="/login"
                className="font-medium text-dark transition-colors hover:text-blue-700"
              >
                立即登入
              </a>
            </Typography>
          </form>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default SignUp;

