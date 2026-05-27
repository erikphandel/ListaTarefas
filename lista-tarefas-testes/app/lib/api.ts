import tarefasMock from "./tarefasMock";

export default async function getTarefas() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return tarefasMock;
}