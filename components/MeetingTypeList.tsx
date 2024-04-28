"use client";

import { useRouter } from "next/navigation";
import Card from "./Card";
import { useState } from "react";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);

  const createMeeting = () => {
    
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 text-white">
      <Card
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
        className="bg-orange-1"
      />
      <Card
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-purple-1"
      />
      <Card
        img="/icons/recordings.svg"
        title="New Recordings"
        description="Check out your recordings"
        handleClick={() => router.push("/recordings")}
        className="bg-yellow-1"
      />
      <Card
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Via invitation linkx"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-blue-1"
      />

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an instant meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};
export default MeetingTypeList;
