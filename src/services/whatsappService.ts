
export const sendWhatsappMessage = async (phone: string, message: string) => {
    const apiUrl = process.env.WHATSAPP_API_URL;
    const token = process.env.WHATSAPP_API_TOKEN;
  
    if (!apiUrl || !token) {
      console.error("WhatsApp API URL ou TOKEN não configurados.");
      return;
    }
  
    await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        phone,
        message
      })
    });
  };