import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import { Button } from '../button';
import { Input } from '../input';

type LoginProps = {
    username: string;
};

const LoginForm = () => {
    const { register, control, handleSubmit } = useForm<LoginProps>();
    const onsubmit = (data: LoginProps) => console.log(data);

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
                <Button>Submit</Button>
            </form>
            <DevTool control={control} />
        </>
    );
};

export { LoginForm };
