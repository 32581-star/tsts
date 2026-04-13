//Hook customizado para gerenciamento
//Gerencia estadi, requisições e api e operações CRUD

import {useState, useEffect} from "react";
import { API_URL, MESSAGES } from "../utils/constants";
import type { Task, TaskFormData } from "../types";

export function useTasks(): UseTaskReturn{
    //Estados do hook

    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState<boolean>(false);

    //Busca todas as tarefas da API
    async function fetchtasks(): Promise<void> {
        setLoading(true);//Inicia loading
        setError(null);//Limpa erros anteriores
        try{
            const response = await fetch(API_URL);
            if(!response.ok) throw new Error("Erro ao carregar tarefas")
            
            const data: Task[] = await response.json();
            setTasks(data);

        } catch (err) {
            setError(MESSAGES.ERROR_LOAD);
            console.log("erro", err);
        } finally {
            setLoading(false)
        }
    }
}