import { CURRENT_ATTENDANCE_TITLE } from "../constants/const";
import { currentAttendanceList } from "../constants/dummy";
import { Text } from "@/components/atoms/text";
import "./Attendance.css";
import AttendanceItem from "@/components/molecules/attendanceItem/AttendanceItem";

interface Attendance {
  id: number;
  status: string;
  title: string;
  date: string;
  time: string;
}

const CurrentAttendance: React.FC = () => {
  return (
    <div>
      <Text
        color="#FFF"
        fontSize="1.1875rem"
        fontWeight="600"
        className="current_attendance"
      >
        {CURRENT_ATTENDANCE_TITLE}
      </Text>
      {currentAttendanceList.map((attendance: Attendance) => (
        <AttendanceItem
          key={attendance.id}
          attendanceAddress="manager"
          id={attendance.id}
          status={attendance.status}
          title={attendance.title}
          date={attendance.date}
          time={attendance.time}
        />
      ))}
    </div>
  );
};

export default CurrentAttendance;
