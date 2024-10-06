import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <div>
            <form>
                <label>ID:</label>
                <input type="text" name="id" /><br />
                <label>Password:</label>
                <input type="password" name="pwd" /><br />
                <button type="submit">Sign In</button>&nbsp;
                <button><Link to="/user/signup">Sign Up</Link></button>
        </form>
        </div>
    );
};

export default LoginForm;