
export function getContactEmailHtml({
    nombre,
    email,
    telefono,
    mensaje,
    logoUrl,
}: {
    nombre: string
    email: string
    telefono: string
    mensaje: string
    logoUrl?: string
}) {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Mensaje de Contacto</title>
  <style>
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f5; color: #333333; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
    .header { background-color: #111111; padding: 24px; text-align: center; border-bottom: 4px solid #0066B1; }
    .header img { max-height: 60px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; }
    .content { padding: 32px 24px; }
    .h2 { color: #0066B1; font-size: 20px; margin-top: 0; margin-bottom: 24px; border-bottom: 1px solid #eeeeee; padding-bottom: 12px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 12px; text-transform: uppercase; color: #666666; font-weight: bold; margin-bottom: 4px; }
    .value { font-size: 16px; color: #111111; background-color: #f9f9f9; padding: 12px; border-radius: 4px; border: 1px solid #eeeeee; }
    .message-box { background-color: #f0f7ff; border: 1px solid #cce4f7; padding: 16px; border-radius: 4px; color: #1e3a8a; line-height: 1.6; }
    .footer { background-color: #f4f4f5; padding: 24px; text-align: center; font-size: 12px; color: #888888; border-top: 1px solid #eeeeee; }
    .button { display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: bold; margin-top: 16px; }
  </style>
</head>
<body>
  <div style="padding: 24px;">
    <div class="container">
      <div class="header">
        ${logoUrl ? `<img src="${logoUrl}" alt="Repuestos Germana" />` : '<h1>Repuestos Germana</h1>'}
      </div>
      <div class="content">
        <h2 class="h2">Nuevo Mensaje de Contacto</h2>
        
        <div class="field">
          <div class="label">Nombre</div>
          <div class="value">${nombre}</div>
        </div>

        <div class="field">
          <div class="label">Email</div>
          <div class="value">${email || '<span style="color:#999">No proporcionado</span>'}</div>
        </div>

        <div class="field">
          <div class="label">Teléfono</div>
          <div class="value">
            ${telefono} 
            <a href="https://wa.me/57${telefono.replace(/\D/g, '')}" class="button" style="font-size: 12px; padding: 4px 8px; margin-left: 8px;">WhatsApp</a>
          </div>
        </div>

        <div class="field">
          <div class="label">Mensaje</div>
          <div class="message-box">${mensaje}</div>
        </div>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} Repuestos Germana. Todos los derechos reservados.</p>
        <p>Este es un mensaje automático enviado desde el formulario de contacto del sitio web.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `
}
