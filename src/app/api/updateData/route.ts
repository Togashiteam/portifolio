import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "resources.json");
console.log("Caminho do arquivo:", filePath);

export async function POST(request: Request) {
  try {
    const { schemma, data } = await request.json();

    // Verifica se o esquema é "resources"
    if (schemma !== "resources") {
      throw new Error("Esquema inválido");
    }

    // Cria a pasta "data" se ela não existir
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    // Salva os dados no arquivo JSON
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ message: "Dados salvos com sucesso!" });
  } catch (error) {
    console.error("Erro no endpoint /api/updateData:", error);
    return NextResponse.json(
      { message: "Falha ao salvar dados", error: error.message },
      { status: 500 }
    );
  }
}