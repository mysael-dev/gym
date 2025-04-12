import { Member } from "../types/member";
import { sendWhatsappMessage } from "@/services/whatsappService";
import { differenceInDays, parseISO } from "date-fns";

export const checkAndSendReminders = async (members: Member[]) => {
  const today = new Date();

  for (const member of members) {
    const daysLeft = differenceInDays(parseISO(member.nextPaymentDate), today);

    if (daysLeft === 5) {
      await sendWhatsappMessage(
        member.phone,
        `Olá, ${member.name}! Essa mensagem é só para lembrar que faltam 5 dias para o vencimento do seu pagamento.`
      );
    }
  }
};