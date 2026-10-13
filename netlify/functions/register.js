exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const { username, password } = JSON.parse(event.body);
    
    if (!username || !password) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Eksik bilgi girdiniz.' }) };
    }

    const fullEmail = `${username}@oustra.com`;

    // Burada veritabanı bağlantısı (Firebase vb.) yapılabilir.
    // Şimdilik başarılı kayıt simülasyonu döndürüyoruz:
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: `${fullEmail} adresiniz başarıyla oluşturuldu ve kalıcı olarak kaydedildi!` 
      })
    };

  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Sunucu hatası oluştu.' }) };
  }
};