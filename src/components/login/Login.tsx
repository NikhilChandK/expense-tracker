import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../card';
import { LoginForm } from './LoginForm';

const Login = () => {
    return (
        <div className="flex items-center h-[92dvh]">
            <Card className="w-[350px] mx-auto my-0">
                <CardHeader>
                    <CardTitle>Welcome back!</CardTitle>
                    <CardDescription>
                        Please enter login details.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    );
};

export { Login };
