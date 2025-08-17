import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import Laptop_chat from './img/Laptop_chat.jpg'
import Laptop_chat_2 from './img/laptop_chat_2.jpg'
import Mobile_chat from './img/Mobile_chat.jpg'

export function FeatureSection() {
  return (
    <section className="lg:py-28 py-10 px-8">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase"
        >
          Features
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
        Your College. Your Questions. Instant Answers.        
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-lg !text-gray-500"
        >
          From exam prep to campus life — Techno Buddy delivers reliable, instant, and relevant answers right where you need them.      
        </Typography>
      </div>
      <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card
          className="col-span-1 bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
            Ask Anything, Anytime
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              From placement stats to “what to do if you get ragged” — your questions get clear, accurate answers in seconds.
              No more guessing. Just instant clarity. 
            </Typography>
            <img
              src={Mobile_chat}
              alt="iphone"
              className="w-full xl:h-[370px] lg:h-[360px] lg:translate-y-8 translate-y-7 object-contain object-center"
            />
          </CardBody>
        </Card>
        <Card
          className="col-span-2 bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Instant Study Resources
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              Access previous year papers, notes, and curated materials without hunting through endless links.
              Study smarter, not harder.
            </Typography>
            <img
              src={Laptop_chat_2}
              alt="laptop"
              className="w-full lg:h-[380px] md:h-[300px] h-[220px] lg:translate-y-16 translate-y-10 object-cover object-top"
            />
          </CardBody>
        </Card>
        
      </div>
      <div className="container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card
          className="col-span-2 bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Complete Campus Knowledge
            </Typography>
            <Typography className="text-center max-w-sm mx-auto text-base font-normal leading-7 !text-gray-500">
              Know about rules, facilities, contacts, and every important corner of your college life.
              Your guide to navigating campus life.
            </Typography>
            <img
              src={Laptop_chat}
              alt="laptop"
              className="w-full xl:h-[355px] lg:h-[380px] md:h-[300px] h-[180px] lg:translate-y-6 translate-y-10 object-cover object-top"
            />
          </CardBody>
        </Card>
        <Card className="col-span-1 bg-gray-100/50" shadow={false}>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              ⚡ Always Available on Telegram
            </Typography>
            <Typography className="text-center max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              Fast, lightweight, and right inside the app you already use every day.
              No installs. No hassle. Just answers.
            </Typography>
            <div className="flex items-center -space-x-4 justify-center mt-24">
              <Avatar
                size="xl"
                variant="circular"
                alt="user 1"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <Avatar
                size="xl"
                variant="circular"
                alt="user 2"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              />
              <Avatar
                size="xl"
                variant="circular"
                alt="user 3"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
              />
              <Avatar
                size="xl"
                variant="circular"
                alt="user 4"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
              />
            </div>
            <div className="flex justify-between items-end mt-[144px]">
              <div className="flex gap-2">
                <img
                  src="https://www.material-tailwind.com/image/mt-logo.svg"
                  alt="logo"
                />
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="mr-4 text-xs font-bold cursor-pointer"
                >
                  Techno <br /> Buddy
                </Typography>
              </div>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="text-xs font-bold cursor-pointer"
              >
                Made with ❤️ by Team Hack Warriors
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
export default FeatureSection;
