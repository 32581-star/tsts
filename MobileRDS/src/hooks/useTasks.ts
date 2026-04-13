//Hook customizado para gerenciamento
//Gerencia estadi, requisições e api e operações CRUD

import {useState, useEffect} from "react";
import { API_URL, MESSAGES } from "../utils/constants";
import type { Task, TaskFormData } from "../types";