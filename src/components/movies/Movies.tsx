import * as React from 'react';
import './movie.css'
import { Button, Form, Input } from 'antd';

function Movies() {

  const [loginForm] = Form.useForm();

  const onLogin = (values:any) => {
    console.log(values)
  }
  
  return (
    
    
    <div className="row">

    <div className="col-sm-1 firstSection" id="col">
      <div className="sectionOneContent" >
        <p>Designed by property managers,for property managers</p>
      </div>
  
    </div>
    <div className="col-sm-11 secondSection">
       <div className="Content">

                                <p className="signupheading">Sign up</p>
                                <div className="google"> <a className="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img className="imageicon" src="https://developers.google.com/identity/images/g-logo.png"/> <span style={{ color : 'grey'}}>Continue  with Google</span> </a> </div>
                                <div  style = {{
                                    marginBottom: '10%',
                                    backgroundColor: '#1877F2'
                                }}
                                > <a className="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"
                                style = {{
                                  backgroundColor: '#1877F2',
                                  fontWeight: 'bold'

                              }}
                                >
                                  <i className="fa fa-facebook"></i>
                                 <span style = {{ color : 'white' ,  marginLeft : '20px' }}>Continue  with Facebook</span></a> </div>
                                
                                <p className="logintext"><span>Login with email</span></p>

                                <Form
                                  form={loginForm}
                                  layout="vertical"
                                  onFinish={onLogin}
                                  requiredMark={false}
                                >

                                  <Form.Item
                                             name="username"
                                             className = "inputwrapper"
                                            label="Email"
                                            rules={[
                                              {
                                                required: true,
                                                type: 'email',
                                                message: 'Please enter a valid Email here.',
                                              },
                                            ]}>
                                            <Input
                                               className="inputBox"
                                        
                                              autoComplete="email"
                                              style={{ padding: '4px !important' }}
                                              placeholder={'i.e: rebecca@gmail.com'}
                                              name="username"
                                            />
                                  </Form.Item>

                                  <Form.Item
                                      name="password"
                                      label="Password"
                                      
                                        className="password"
                                      rules={[
                                        {
                                          required: true,
                                          message: 'Password is required!',
                                        },
                                      ]}
                                    >
                                      <Input
                                      className="inputBox"
                                       type="password"
                                        autoComplete="current-password" />
                                  </Form.Item>
                                  <p className="pol">By signing you are agreeing with term of service and  our privacy policy</p>
                                  <Button
                                      className = " btn "
                                      type="default"
                                      htmlType="submit"
                                      style={{
                                        
                                        width: '100%',
                                        backgroundColor: '#4A7856',
                                        
                                        color : '#fff',
                                        fontSize: '20px',
                                        fontWeight: 'bold'                                     
                                      }}
                                    >
                                      <span className="signuptext"> Sign up</span>
                                     
                                </Button>

                                <Button
                                className = "alLogin"
                                  style={{
                                    border: 'none',
                                    background: 'none',
                                    color: 'inherit',
                                    padding: '0',
                                    font:  'inherit',
                                    cursor: 'pointer',
                                    outline: 'inherit',
                                    marginTop : '5%',
                                    marginLeft : '20%',
                                    marginRight : '30%'
                                  }}
                                  type="link"
                                >
                                  Already have an account? <span className="loginText">Login</span>
                                </Button>


        </Form>
       
       </div>
    </div>
  </div>


  )
}


export default Movies;



/*
import * as React from 'react';
import './movie.css'
import { Button, Form, Input } from 'antd';

function Movies() {

  const [loginForm] = Form.useForm();

  const onLogin = (values:any) => {
    console.log(values)
  }
  
  return (
    
    
    <div className="row">

    <div className="col-sm-6 firstSection" id="col">
      <div className="sectionOneContent" >
        <p>Designed by property managers,for property managers</p>
      </div>
  
    </div>
    <div className="col-sm-6 secondSection">
       <div className="Content">

                                <p className="signupheading">Sign up</p>
                                <div className="google"> <a className="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img className="imageicon" src="https://developers.google.com/identity/images/g-logo.png"/> <span style={{ color : 'grey'}}>Continue  with Google</span> </a> </div>
                                <div  style = {{
                                    marginBottom: '10%',
                                    backgroundColor: '#1877F2'
                                }}
                                > <a className="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"
                                style = {{
                                  backgroundColor: '#1877F2',
                                  fontWeight: 'bold'

                              }}
                                >
                                  <i className="fa fa-facebook"></i>
                                 <span style = {{ color : 'white' ,  marginLeft : '20px' }}>Continue  with Facebook</span></a> </div>
                                
                                <p className="logintext"><span>Login with email</span></p>

                                <Form
                                  form={loginForm}
                                  layout="vertical"
                                  onFinish={onLogin}
                                  requiredMark={false}
                                >

                                  <Form.Item
                                             name="username"
                                             className = "inputwrapper"
                                            label="Email"
                                            rules={[
                                              {
                                                required: true,
                                                type: 'email',
                                                message: 'Please enter a valid Email here.',
                                              },
                                            ]}>
                                            <Input
                                               className="inputBox"
                                        
                                              autoComplete="email"
                                              style={{ padding: '4px !important' }}
                                              placeholder={'i.e: rebecca@gmail.com'}
                                              name="username"
                                            />
                                  </Form.Item>

                                  <Form.Item
                                      name="password"
                                      label="Password"
                                      
                                        className="password"
                                      rules={[
                                        {
                                          required: true,
                                          message: 'Password is required!',
                                        },
                                      ]}
                                    >
                                      <Input
                                      className="inputBox"
                                       type="password"
                                        autoComplete="current-password" />
                                  </Form.Item>
                                  <p className="pol">By signing you are agreeing with term of service and  our privacy policy</p>
                                  <Button
                                      className = " btn "
                                      type="default"
                                      htmlType="submit"
                                      style={{
                                        
                                        width: '100%',
                                        backgroundColor: '#4A7856',
                                        
                                        color : '#fff',
                                        fontSize: '20px',
                                        fontWeight: 'bold'                                     
                                      }}
                                    >
                                      <span className="signuptext"> Sign up</span>
                                     
                                </Button>

                                <Button
                                className = "alLogin"
                                  style={{
                                    border: 'none',
                                    background: 'none',
                                    color: 'inherit',
                                    padding: '0',
                                    font:  'inherit',
                                    cursor: 'pointer',
                                    outline: 'inherit',
                                    marginTop : '5%',
                                    marginLeft : '20%',
                                    marginRight : '30%'
                                  }}
                                  type="link"
                                >
                                  Already have an account? <span className="loginText">Login</span>
                                </Button>


        </Form>
       
       </div>
    </div>
  </div>


  )
}


export default Movies;
*/