import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import { SWRConfig } from "swr";
import {fetcher} from '@/services/fetcher';

export default function Providers({children}: {children: React.ReactNode}): JSX.Element {
    return (
        <NextUIProvider className="min-h-screen">
            <SWRConfig value={{
                fetcher: fetcher,
                onError: (err) => {
                    console.error('SWR error: ',err.message)
                },
                shouldRetryOnError: false,
                revalidateOnFocus: false,
                revalidateIfStale: false,
                revalidateOnReconnect: false
            }}>
                {children}
            </SWRConfig>
        </NextUIProvider>
    )
}