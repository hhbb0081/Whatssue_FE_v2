"use client";
import chiikyaw from "@/assets/images/chiikyaw.png";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { REGISTER_BTN, REGISTER_COMPLETE_ARR } from "../constants";
import "./ThirdClubRegister.css";

const ThirdClubRegister = () => {
    const router = useRouter();
    return(
        <div className="register">
            <div className="register3__content">
                <div className="register3__clubInfo">
                    <div className="register3_clubInfo__img">
                        <Image 
                            src={chiikyaw}
                            alt="clubImg"
                            className="register3__clubInfo__img"
                        />
                    </div>
                    <Text color="#51F8C4" fontSize="1.3125rem" fontWeight="700">치이카와</Text>
                </div>
                <div className="register3__text">
                    {
                        REGISTER_COMPLETE_ARR.map((text, index) => (
                            <div key={index} className="register3__text__item">
                                <Text
                                    color="#fff"
                                    fontSize="1.0625rem"
                                    fontWeight="700"
                                >{text}</Text>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="register3__rowBtn">
                <Button backgroundColor="#404040" color="#fff" width="31.5vw" onClick={() => router.push("/")}>{REGISTER_BTN.home}</Button>
                <Button width="54vw" onClick={() => router.push("/")}>{REGISTER_BTN.toClub}</Button>
            </div>
        </div>
    );
};

export default ThirdClubRegister;