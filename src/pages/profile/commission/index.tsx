import Empty from "@/pages/components/empty";
import CommonSwitch from "@/pages/components/switch";
import React, { useState } from "react";

const Commission = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="mt-[20px]">
      <CommonSwitch
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={[
          "Current Order",
          <>
            Historical
            <br />
            Commission
          </>,
        ]}
      />
      <div className="mt-[50px] flex justify-center">
        <Empty />
      </div>
    </div>
  );
};

export default React.memo(Commission);
