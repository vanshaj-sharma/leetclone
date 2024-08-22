import Topbar from "@/app/components/Topbar/Topbar";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div>
      <Topbar problemPage={true} />
    </div>
  );
};
export default page;
