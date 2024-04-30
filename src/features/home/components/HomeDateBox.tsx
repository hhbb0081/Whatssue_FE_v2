import { Text } from "@/components/atoms/text";
import { formatTime } from "@/utils/date";
import "./Home.css";

interface HomeDateBoxProps {
    time: Date;
    title: string;
    onClick?: any;
}

const HomeDateBox = ({time, title, onClick}: HomeDateBoxProps) => {
    return (
        <div className="homeDateBox" onClick={onClick}>
            <div className="homeDateBox__content">
                <span className="wd-30">
                    <Text
                        color="#d9d9d9"
                        fontSize="0.8125rem"
                    >{formatTime(time)}</Text>
                </span>
                <span className="wd-50">
                    <Text
                        color="#fff"
                        fontSize="0.9375rem"
                        fontWeight="700"
                    >{title}</Text>
                </span>
            </div>
            <span className="homeDateBox__attend wd-20">
                <Text
                    color="#d9d9d9"
                    fontSize="0.8125rem"
                >출석중</Text>
            </span>
        </div>
    )
};

export default HomeDateBox;