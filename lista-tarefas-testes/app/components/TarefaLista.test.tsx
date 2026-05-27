import { render, screen, waitFor } from "@testing-library/react";
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

            expect(input).toBeInTheDocument();
            expect(button).toBeInTheDocument();
        });
    });
});
