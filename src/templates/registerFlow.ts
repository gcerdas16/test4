import { addKeyword, EVENTS } from "@builderbot/bot";
import sheetsService from "../services/sheetsService";

const registerFlow = addKeyword(EVENTS.ACTION)
  .addAnswer(
    `¡Hola! 🐾 Soy SARA, tu asistente virtual para todo lo relacionado con el cuidado de tus mascotas. Estoy aquí para ayudarte con consejos, información y respuestas sobre la salud, alimentación y bienestar de tus amigos peludos (y no tan peludos). 🐶🐱🐦
Cuéntame, ¿en qué puedo ayudarte hoy? 😊`,
    null,
    async (ctx, ctxFn) => {
      await sheetsService.createUser(ctx.from, ctx.name);
      //await ctxFn.flowDynamic(
      //  "Excelente! Tus datos ya fueron cargados, ya podes comenzar a utilizar el bot"
      //);
    }
  );

export { registerFlow };
