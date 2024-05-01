import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async() => {
  const session = await getServerSession(authOptions)
  console.log(session, "jahid");
  return (
    <div>
      {session?.user ?
        <>
        <h1 className="text-4xl text-center mt-10">Welcome {session?.user?.name}</h1>
        <h1 className="text-4xl text-center mt-10">Welcome {session?.user?.email}</h1>
        <Image
         src={session?.user?.image ||'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }
         width ={500}
         height={500}
         alt="user iamge"
         className="mx-auto"
        />
        </>:
        <h1 className="text-4xl text-center mt-10">Welcome To Dashboard Page</h1>
      }
    </div>
  );
};

export default DashboardPage;
