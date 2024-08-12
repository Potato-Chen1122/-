import './Login.css'

export default function Login() {
    return (<>
        <div className='bg'>
        
        <form method="post" action="http://localhost:8080/login" className='login_box'>
            <h3>登陆敏捷看板</h3>
            <input type="text" required="required" id="use_name" placeholder="请输入用户名" name="user_name" className='box'></input>
            <input type="password" required="required" id="pwd" placeholder="请输入密码" name="user_pwd" className='box'></input>
            <button type="submit" className='box'>登陆</button>
            输入新用户名将自动注册
        </form>
        </div>
    </>)
}
