'use client';
import { Spinner } from "@nextui-org/react";
const loading = () => {
    return (
        <div className="flex gap-4">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
        </div>
    )
}

export default loading