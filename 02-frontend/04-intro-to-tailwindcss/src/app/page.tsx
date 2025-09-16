import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-[#ECF8FF] grid place-items-center">
      {/* card */}
      <div className="bg-white h-[228px] w-[601px] rounded-[10px] shadow-[0px_15px_60px_0px_rgba(29_161_242/0.15)] px-[31px] py-[35px]">
        {/* header */}
        <div className="flex justify-between items-center">
          <div className="flex gap-[22px]">
            <Image
              src="/images/photo-profile.jpg"
              alt="Photo profile"
              width={50}
              height={50}
            />

            <div>
              <p className="font-source-code-pro">John Doe</p>
              <p>@realjohndoe</p>
            </div>
          </div>

          <Image
            src="/icons/twitter-icon.jpg"
            alt="Twitter icon"
            height={22.43}
            width={27.5}
            className="h-[22.43px] w-[27.5px]"
          />
        </div>

        {/* content */}
        <div></div>

        {/* like & date */}
        <div></div>
      </div>
    </main>
  );
}
