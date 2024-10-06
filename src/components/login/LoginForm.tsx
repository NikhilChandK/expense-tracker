import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Button } from '../button';
import { SplashScreenContext } from '../splash-screen';
import { Input } from '../input';
type LoginProps = {
    username: string;
};
const LoginForm = () => {
    const { titleRef } = useContext(SplashScreenContext) || {
        titleRef: { current: null },
    };
    const [isTitleRendered, setIsTitleRendered] = useState(false);
    useEffect(() => {
        if (titleRef?.current) {
            setIsTitleRendered(true);
        }
    }, [titleRef]);
    const { buttonRef } = useContext(SplashScreenContext) || {
        buttonRef: { current: null },
    };
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
                        className="w-24"
                    />
                </label>
                <Button ref={buttonRef}>Submit</Button>
            </form>
            <DevTool control={control} />
            {isTitleRendered && <div>Test and trial</div>}
        </>
    );
};

export { LoginForm };
