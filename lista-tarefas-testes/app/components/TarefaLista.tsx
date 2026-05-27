import { useState, useEffect } from "react";
import getTarefas from "../lib/api";
import ContadorTarefa from "./ContadorTarefa";

export default function TarefaLista() {
    const [tarefa, setTarefa] = useState("");
    const [lista, setLista] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const carregarTarefas = async () => {
            try {
                const tarefasIniciais = await getTarefas();
                setLista(tarefasIniciais);
            } catch (error) {
                console.error("Erro ao carregar tarefas:", error);
            } finally {
                setLoading(false);
            }
        };
        carregarTarefas();
    }, []);

    const handleAddTarefa = () => {
        if (tarefa.trim() !== "") {
            setLista([...lista, tarefa]);
            setTarefa("");
        }
    }
    
    if (loading) return <p>Carregando tarefas...</p>;

    return (
        <div>
            <input
                placeholder="Digite uma nova tarefa..."
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
            ></input>
            <button
                onClick={handleAddTarefa}
            >Adicionar</button>
            <ContadorTarefa lista={lista} />
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}