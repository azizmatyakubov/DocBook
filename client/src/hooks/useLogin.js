// login hook for doctor

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../redux/actions/authActions';

const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }, history));
    };

    return { email, setEmail, password, setPassword, handleSubmit };
}

export default useLogin;