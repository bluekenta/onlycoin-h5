import CModal from "@/components/cModal";
import { Button, Form, Input, message } from "antd";
import classnames from "classnames";

interface props {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const AddPaymentMethod = (props: props) => {
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
    <CModal {...props} title={"Buy Crypto"}>
      <div className="pt-[20px] px-[14px] pb-[25px] flex flex-col gap-20">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="grid grid-cols-2 gap-[12px]">
            <Form.Item
              name="firstName"
              label="First name"
              rules={[{ required: true }, { type: "string", min: 6 }]}
            >
              <Input placeholder="Enter First Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true }, { type: "string", min: 6 }]}
            >
              <Input placeholder="Enter Last Name" />
            </Form.Item>
          </div>
          <Form.Item
            name="cardNumber"
            label="Card number"
            rules={[{ required: true }, { type: "string", min: 6 }]}
          >
            <Input placeholder="Enter Card Number" />
          </Form.Item>
          <div className="grid grid-cols-2 gap-[12px]">
            <Form.Item
              name="expirayDate"
              label="Expiracy Date"
              rules={[{ required: true }, { type: "string", min: 6 }]}
            >
              <Input placeholder="MM/YY" />
            </Form.Item>
            <Form.Item
              name="cvc"
              label="CVC"
              rules={[{ required: true }, { type: "string", min: 6 }]}
            >
              <Input placeholder="Enter CVC" />
            </Form.Item>
          </div>
          <Form.Item
            name="country"
            label="Country / Region"
            rules={[{ required: true }, { type: "string", min: 6 }]}
          >
            <Input placeholder="Country / Region" />
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

export default AddPaymentMethod;
