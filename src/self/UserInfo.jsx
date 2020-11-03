import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import {useHistory} from 'react-router-dom'
const UserInfo = (props) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            }
        : null;

    const buttonItemLayout =
        formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
            }
        : null;
    const history=useHistory()
    const handleGotoAddress=(list)=>{
            return ()=>{
                history.push('/address',{list})
            }
        }
    console.log(props);
  return (
    <>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="手机号">
            <Input placeholder={props.userInfo.userTelephone} />
        </Form.Item>
        <Form.Item label="性别">
            <Input placeholder={props.userInfo.userGender} />
        </Form.Item>
        <Form.Item label="邮箱">
            <Input placeholder={props.userInfo.email} />
        </Form.Item>
        <Form.Item label="QQ">
            <Input placeholder={props.userInfo.userQq} />
        </Form.Item>
        <Form.Item label="收货地址">
            <Input placeholder={props.userInfo.addr} disabled />
            <Button type="primary" onClick={handleGotoAddress(props.addressList)}>确认修改</Button>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">确认修改</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UserInfo