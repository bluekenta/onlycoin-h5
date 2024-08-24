import CModal from "@/components/cModal";
import { Button, Form, Input, message } from "antd";
import classnames from "classnames";

interface props {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const Business = (props: props) => {
  const disabled = false;
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onSet = () => {
    form.setFieldsValue({
      firstName: "first name",
    });
  };
  return (
    <CModal {...props} title={"Business"}>
      <div className="pt-[20px] px-[14px] pb-[25px] flex flex-col gap">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="location"
            label="Location of bank account"
            rules={[{ required: true }, { type: "string", min: 6 }]}
          >
            <Input placeholder="Location of bank account" />
          </Form.Item>

          <Form.Item
            name="companyName"
            label="Company Name"
            rules={[{ required: true }, { type: "string", min: 6 }]}
          >
            <Input placeholder="Enter Company Name" />
          </Form.Item>

          <Form.Item
            name="bankName"
            label="Bank Name"
            rules={[{ required: true }, { type: "string", min: 6 }]}
          >
            <Input placeholder="Enter Bank Name" />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              disabled={disabled}
              className={classnames("btn-primary mt-[25px]", {
                disabled: disabled,
                active: !disabled,
              })}
            >
              Pay New
            </Button>
          </Form.Item>
        </Form>
      </div>
    </CModal>
  );
};

export default Business;
