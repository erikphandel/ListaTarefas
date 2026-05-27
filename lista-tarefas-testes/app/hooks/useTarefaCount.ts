import { useMemo } from "react";

export default function useTarefaCount(lista: string[]) {
    const totalTarefas = useMemo(() => lista.length, [lista]);
    return totalTarefas;
}