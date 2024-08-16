import Empty from "@/pages/components/empty";
import CommonSwitch from "@/pages/components/switch";
import { useState } from "react";

const MessageNotification = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="mt-[20px]">
      <CommonSwitch
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={["Announcement", "Message"]}
      />
      <div className="mt-[50px] flex justify-center">
        <Empty />
      </div>
    </div>
  );
};

export default MessageNotification;
