import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/Login/LoginForm';
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    return (
        <main>
            <div className='sign-in'>
                <div className='logo-container'>
                    <h1>Ideate</h1><span className='logo'></span>
                </div>
                <div>Click 'Login' to enter with default user</div>
                <div className='default-credentials'>[Email: a@a&nbsp;&nbsp;&nbsp;Password: test]</div>
                <SignUpForm setUser={setUser} />
                <LoginForm setUser={setUser} />
            </div>
        </main>
    );
}