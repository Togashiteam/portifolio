// src/app/api/checkUpdate/route.ts
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { DateUtils } from "@/utils/date/dateUtils";
import { StoreData } from "@/app/fun/dndSheetCreator/models/StoredData.model";

const originPath = path.join(process.cwd(), "data");

export async function GET(request: NextRequest) {
  // console.clear();
  // console.log('CHECK UPDATE API');

  const schemma = request.nextUrl.searchParams.get("schemma");
  const filePath = path.join(originPath, `${schemma}.json`);

  try {
    let updatedToday = true;

    // Verifica se o arquivo existe, caso não existir informa que não foi atualizado
    if (!fs.existsSync(filePath)) {
      console.error("Arquivo não encontrado:", filePath);
      updatedToday = false;
      return NextResponse.json({ updatedToday });
    }

    // Lê o arquivo JSON
    const storedData: StoreData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Verifica se já houve uma atualização hoje
    updatedToday = DateUtils.isToday(storedData.updated);

    return NextResponse.json({ updatedToday });
  } catch (error) {
    console.error("Erro no endpoint /api/checkUpdate:", error);
    return NextResponse.json(
      { message: "Falha ao verificar atualização", error: error },
      { status: 500 }
    );
  }
}