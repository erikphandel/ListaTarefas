import useTarefaCount from "../hooks/useTarefaCount";

interface Props {
    lista: string[];
}

export default function ContadorTarefa({ lista }: Props) {
    const totalTarefas = useTarefaCount(lista);

    return (
        <div>
            <h2>Total de Tarefas: {totalTarefas}</h2>
        </div>
    )
}