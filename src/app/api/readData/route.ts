// src/app/api/readData/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "resources.json");
console.log("Caminho do arquivo:", filePath); // Log para depuração

export async function GET() {
  try {
    // Verifica se o arquivo existe
    if (!fs.existsSync(filePath)) {
      console.error("Arquivo não encontrado:", filePath);
      return NextResponse.json(
        { message: "Arquivo não encontrado" },
        { status: 404 }
      );
    }

    // Lê o arquivo JSON
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    const resposta  = Object.entries(data).map(([key, url]) => Object.assign({key, url}));

    return NextResponse.json(resposta);
  } catch (error) {
    console.error("Erro no endpoint /api/readData:", error);
    return NextResponse.json(
      { message: "Falha ao ler dados", error: error.message },
      { status: 500 }
    );
  }
}