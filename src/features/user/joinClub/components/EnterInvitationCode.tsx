import { CodeInput } from "@/components/atoms/input/CodeInput";
import { Text } from "@/components/atoms/text";
import "./EnterInvitationCode.css";
import { Button } from "@/components/atoms/button";
import { HistoryHeader } from "@/components/organisms/Header";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import {
  ENTER_INVITATION_CODE,
  JOIN_BTN,
  RECEIVE_INVITATION_CODE,
} from "../constants/const";

const EnterInvitationCode = () => {
  return (
    // <Wrapper isHeader={true}>
    <div className="invitation_code">
      <HistoryHeader />
      <Image
        src={IMAGES.lockWhite}
        alt="lock"
        className="invitation_code_icon"
      />

      <div className="invitation_code__title">
        <Text color="#FFF" fontSize="1.3125rem" fontWeight="600">
          {ENTER_INVITATION_CODE}
        </Text>
        <Text color="#D9D9D9" fontSize="0.9375rem" fontWeight="500">
          {RECEIVE_INVITATION_CODE}
        </Text>
      </div>

      <div className="invitation_code__input">
        {[...Array(6)].map((_, index) => (
          <CodeInput key={index} name={`invitationCode${index + 1}`} />
        ))}
      </div>

      <div className="invitation_code__enter">
        <Button>{JOIN_BTN}</Button>
      </div>
    </div>
    // </Wrapper>
  );
};

export default EnterInvitationCode;
