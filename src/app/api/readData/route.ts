import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { StoreData } from "@/app/fun/dndSheetCreator/models/StoredData.model";

const originPath = path.join(process.cwd(), "data");

export async function GET(request: NextRequest) {
  // console.clear();
  // console.log('READ DATA API');

  const schemma = request.nextUrl.searchParams.get("schemma");
  const filePath = path.join(originPath, `${schemma}.json`);

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
    const storedData: StoreData = JSON.parse(fs.readFileSync(filePath, "utf-8"));


    return NextResponse.json(storedData);
  } catch (error) {
    console.error("Erro no endpoint /api/readData:", error);
    return NextResponse.json(
      { message: "Falha ao ler dados", error: error },
      { status: 500 }
    );
  }
}