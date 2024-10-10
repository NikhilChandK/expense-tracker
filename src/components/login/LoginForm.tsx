import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import { Button } from '../button';
import { Input } from '../input';
import { useLoginMutation } from '../../services/auth/auth';

type LoginProps = {
    username: string;
    password: string;
};

const LoginForm = () => {
    const { register, control, handleSubmit } = useForm<LoginProps>();
    const [login] = useLoginMutation();
    const onsubmit = async (data: LoginProps) => {
        try {
            await login(data).unwrap();
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onsubmit)} noValidate>
                <label htmlFor="username">
                    UserName:
                    <Input
                        type="text"
                        id="username"
                        {...register('username', {
                            required: {
                                value: true,
                                message: 'Please enter username',
                            },
                        })}
                        className="w-full h-8 mb-4"
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <Input
                        type="password"
                        id="password"
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Please enter password',
                            },
                        })}
                        className="w-full h-8 mb-4"
                    />
                </label>
                <Button>Submit</Button>
            </form>
            <DevTool control={control} />
        </>
    );
};

export { LoginForm };
