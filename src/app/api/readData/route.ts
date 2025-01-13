// src/app/api/readData/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const originPath = path.join(process.cwd(), "data");
console.clear();


export async function GET(request: NextRequest) {
  const schemma = request.nextUrl.searchParams.get("schemma");
  const filePath = path.join(originPath, `${schemma}.json`);
  console.log("Caminho do arquivo:", filePath); // Log para depuração
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

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no endpoint /api/readData:", error);
    return NextResponse.json(
      { message: "Falha ao ler dados", error: error.message },
      { status: 500 }
    );
  }
}