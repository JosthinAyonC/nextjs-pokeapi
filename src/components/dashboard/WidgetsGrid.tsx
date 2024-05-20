'use client';

import { IoCalculator } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {

    const count = useAppSelector((state) => state.counter.count);

    return (
        <div className="flex flex-wrap p-2">
            <SimpleWidget
                contador={count}
                subtitle="Carrito de compras"
                label="Contador"
                icon={<IoCalculator size={50} className="text-blue-500" />}
                href="/dashboard/counter"
            />
        </div>
    )
}