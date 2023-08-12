import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Linkedin, DownloadCloud, Github } from "lucide-react";

export const Nav = () => {
  return (
    <NavigationMenu className="flex justify-between bg-transparent top-20 left-8">
      <div className="flex items-center">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="dark:text-slate-50">
              Harsh Dawar
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      href="https://www.linkedin.com/in/harsh-dawar/"
                      target="_blank"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-400 to-slate-700 dark:from-slate-500  dark:to-slate-900 p-6 no-underline outline-none focus:shadow-md"
                    >
                      <div>
                        <Linkedin />
                      </div>
                      <p>Hi There I am Harsh</p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-2 mx-auto my-auto flex flex-row flex-nowrap justify-evenly">
                  <NavigationMenuLink
                    href="https://github.com/HARSH16DAWAR"
                    target="_blank"
                    className="no-underline focus-shadow-md outline-none mx-2"
                  >
                    {" "}
                    GitHub
                  </NavigationMenuLink>
                  <a href="https://github.com/HARSH16DAWAR">
                    <Github />
                  </a>
                </li>
                <li className="row-span-1 mx-auto my-auto flex flex-row flex-nowrap justify-evenly">
                  <NavigationMenuLink
                    href="https://s3.amazonaws.com/harsh-resu.me/Resume.pdf"
                    target="_blank"
                    className="no-underline focus-shadow-md outline-none mx-2"
                  >
                    {" "}
                    resume
                  </NavigationMenuLink>
                  <a href="https://s3.amazonaws.com/harsh-resu.me/Resume.pdf">
                    <DownloadCloud />
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
};
