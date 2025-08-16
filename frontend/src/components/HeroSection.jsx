import {
  Button,
  Typography,
} from "@material-tailwind/react";
import Video from "./ProductVideo";


function HeroSection() {

  return (
    <>
      <header className="bg-white p-8">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Exciting News! Introducing our latest innovation
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              What if{" "}
              <span className="text-green-500 leading-snug ">
                your campus
              </span>{" "}
              and{" "}
              <span className="leading-snug text-green-500">
                had a search bar ?
              </span>
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
            Beacause finding answers should be as easy as asking the right question.            
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <a href="https://t.me/testo_ai_bot">
                <Button
                  color="gray"
                  className="w-full px-4 md:w-[12rem]"
                >
                  
                    Ask Query
                </Button>
                </a>
              </div>
            </div>
            <Video/>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroSection;