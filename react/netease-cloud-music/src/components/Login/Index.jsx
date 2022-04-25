import { useState, useImperativeHandle } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import loginFun from '../../api/methods/login'
import './style.less'


const Login = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const onFinish = (values) => {
    console.log('Success:', values);

    // loginFun.login('18170028530', '123456')
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useImperativeHandle(props.onRef, () => {
    return {
      isShow
    }
  })

  const isShow = (val) => {
    console.log(val);
    setShowLogin(val)
  }



  return (
    showLogin ? (
      <div className='login-wrap'>
        <div className="title">
          <span>登录</span>
          <span onClick={() => {isShow(false)}}>x</span>
        </div>
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="手机号"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your phone!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    ) : null
  );
};

export default Login