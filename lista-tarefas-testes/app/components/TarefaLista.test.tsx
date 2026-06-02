import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import TarefaLista from "./TarefaLista";

jest.mock("../lib/api", () => {
    return jest.fn().mockResolvedValue([
        "Tarefa 1",
        "Tarefa 2",
        "Tarefa 3",
    ]);
});

describe("TarefaLista", () => {
    it("deve renderizar o input e o botão", async () => {
        render(<TarefaLista />);

        await waitFor(() => {
            const input = screen.getByPlaceholderText("Digite uma nova tarefa...");
            const button = screen.getByRole("button", { name: "Adicionar" });
            const contador = screen.getByText("Total de Tarefas: 3");

            expect(input).toBeInTheDocument();
            expect(button).toBeInTheDocument();
            expect(contador).toBeInTheDocument();
        });
    });

    it("deve atualizar o contador quando uma nova tarefa for adicionada", async () => {
        const user = userEvent.setup();
        render(<TarefaLista />);
        await waitFor(() => {
            expect(screen.getByRole("heading", { name: "Total de Tarefas: 3" })).toBeInTheDocument();
        });

        const input = screen.getByPlaceholderText("Digite uma nova tarefa...");
        const button = screen.getByRole("button", { name: "Adicionar" });

        await user.type(input, "Tarefa 4");
        await user.click(button);

        expect(screen.getByRole("heading", { name: "Total de Tarefas: 4" })).toBeInTheDocument();
        expect(screen.getByText("Tarefa 4")).toBeInTheDocument();
    })
});
