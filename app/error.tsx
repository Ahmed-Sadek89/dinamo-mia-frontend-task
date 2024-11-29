'use client';
import { useEffect } from 'react';
import { Button, Result } from 'antd';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Error:", error);
    }, [error]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Result
                status="error"
                title="Something Went Wrong"
                subTitle={error.message || "An unexpected error occurred. Please try again."}
                extra={
                    <Button type="primary" onClick={reset}>
                        Try Again
                    </Button>
                }
            />
        </div>
    );
}
