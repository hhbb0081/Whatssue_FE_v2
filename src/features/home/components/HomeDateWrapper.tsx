import { Text } from "@/components/atoms/text";
import { ScheduleBox } from "@/components/molecules/scheduleBox";
import { RouterBtn } from "@/components/organisms/RouterBtn/RouterBtn";
import { formatDateKor } from "@/utils/date";
import { useRouter } from "next/navigation";
import React from "react";
import "./Home.css";

const HomeDateWrapper = () => {
    const router = useRouter();
    const dateList = [
        {
            id: 1,
            time: new Date(),
            title: "UI 회의"
        },
        {
            id: 2,
            time: new Date(),
            title: "와이어 프레임 작성 회의"
        },
        {
            id: 3,
            time: new Date(),
            title: "백엔드 회의"
        },
    ];

    return (
        <div className="homeDateWrapper">
            <div className="homeDateWrapper__header">
                <Text
                    color="#fff"
                    fontSize="1.0625rem"
                    fontWeight="700"
                >{formatDateKor(new Date())}</Text>
                <RouterBtn
                    path="/1/calendar"
                >
                    <Text
                        color="#fff"
                        fontSize="0.6875rem"
                    >더보기</Text>
                </RouterBtn>
            </div>
            {dateList?.map((date) => (
                <React.Fragment key={date.id}>
                    <RouterBtn
                        path={`/1/calendar/${date.id}`}
                    >
                        <ScheduleBox
                            time={date.time}
                            title={date.title}
                        />
                    </RouterBtn>
                </React.Fragment>
            ))}
        </div>
    )
};

export default HomeDateWrapper;