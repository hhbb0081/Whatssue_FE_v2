"use client";
import Alarm from "@/assets/images/ic_alarm.png";
import { Text } from "@/components/atoms/text";
import { SelectClubBox } from "@/components/molecules/selectClubBox/SelectClubBox";
import { ICONS, IMAGES } from "@/constants/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./Header.css";

export function ClubHeader() {
  const router = useRouter();
  const [openFloating, setOpenFloating] = useState<boolean>(false);
  const handleAlarmModalOpen = () => {
    //알람 컴포넌트 연결
  };
  return (
    <header id="header">
      <div className="clubHeader">
        <div>
            <Image
                src={IMAGES.back}
                alt="back"
                placeholder="blur"
                onClick={() => router.back()}
            />
        </div>
        <div className="clubHeader__title" onClick={() => setOpenFloating((prev) => !prev)}>
            <Text color="#fff" fontSize="1.0625rem">배드민턴 모임</Text>
            <Image 
                src={ICONS.down}
                alt="down"
                className={openFloating ? "clubHeader__title__img active" : "clubHeader__title__img"}
            />
        </div>
        <div>
          <Image
            src={Alarm}
            alt="Alarm"
            placeholder="blur"
            onClick={handleAlarmModalOpen}
          />
        </div>

        {
          openFloating && (
            <SelectClubBox 
              // openFloating={openFloating}
              setOpenFloating={setOpenFloating}
            />
          )
        }
      </div>
    </header>
  );
}
