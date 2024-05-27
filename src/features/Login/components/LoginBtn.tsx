"use client";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import "./Login.css";

export default function LoginBtn() {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_KAKAO_URL}`;
  }
  return (
    <Image src={IMAGES.loginKakao} alt="kakao login" className="login_kakao" onClick={handleLogin}/>
  );
}
