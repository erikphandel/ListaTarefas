import { renderHook } from "@testing-library/react";
import useTarefaCount from "./useTarefaCount";

describe("useTarefaCount", () => {
    it("deve retornar o total de tarefas da lista", () => {
        const { result } = renderHook(() => useTarefaCount(["Tarefa 1", "Tarefa 2", "Tarefa 3"]));
        expect(result.current).toBe(3);
    })

    it("deve retornar zero quando a lista estiver vazia", () => {
        const { result } = renderHook(() => useTarefaCount([]));
        expect(result.current).toBe(0);
    })
    
    it("deve atualizar o total de tarefas quando a lista mudar", () => {
        const { result, rerender } = renderHook(({ lista }) => useTarefaCount(lista), {
            initialProps: { lista: ["Tarefa 1", "Tarefa 2"] }
        });
        expect(result.current).toBe(2);
        rerender({ lista: ["Tarefa 1", "Tarefa 2", "Tarefa 3"] });
        expect(result.current).toBe(3);
    });
});