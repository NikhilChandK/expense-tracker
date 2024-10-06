import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../card';
import { Button } from '../button';

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
                <CardContent>Hello</CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Sign in</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export { Login };
