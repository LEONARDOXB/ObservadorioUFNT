"use client";
import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";

export default function EditarNoticias() {
  const ejInstance = useRef<EditorJS | null>(null);
  const [editorData, setEditorData] = useState<any>(null);

  useEffect(() => {
    if (!ejInstance.current) {
      ejInstance.current = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
          paragraph: Paragraph,
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: "/api/upload", // API de upload local
                byUrl: "", // (opcional) para colar URL da imagem
              },
            },
          },
        },
        data: {
          time: Date.now(),
          blocks: [
            {
              type: "header",
              data: { text: "Editar Notícia", level: 2 },
            },
            {
              type: "paragraph",
              data: { text: "Você pode editar o texto e adicionar imagens abaixo." },
            },
          ],
        },
        autofocus: true,
        onReady: () => {
          console.log("Editor.js está pronto");
        },
      });
    }

    return () => {
      ejInstance.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  const handleSave = async () => {
    const savedData = await ejInstance.current?.save();
    setEditorData(savedData);
    console.log("Dados salvos:", savedData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Editor de Notícias</h1>
      <div id="editorjs" className="bg-white p-4 rounded shadow min-h-[300px]" />
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Salvar Notícia
      </button>
    </div>
  );
}
