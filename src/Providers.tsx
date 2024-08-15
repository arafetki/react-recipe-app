import React from "react";
import {NextUIProvider} from "@nextui-org/react";

export default function Providers({children}: {children: React.ReactNode}): JSX.Element {

    return (
        <NextUIProvider className="min-h-screen">
            {children}
        </NextUIProvider>
    )
}