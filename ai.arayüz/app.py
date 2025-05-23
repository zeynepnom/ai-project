from flask import Flask, render_template, request, jsonify
import json
from difflib import get_close_matches as yakin_sonuclari_getir
import os

app = Flask(__name__)

# Veritabanı dosya yolu
VERITABANI_DOSYA = os.path.join("veritabani", "veritabani.json")

# JSON veritabanı işlemleri
def veritabanini_yukle():
    with open(VERITABANI_DOSYA, 'r', encoding='utf-8') as dosya:
        return json.load(dosya)

def veritabanina_yaz(veriler):
    with open(VERITABANI_DOSYA, 'w', encoding='utf-8') as dosya:
        json.dump(veriler, dosya, indent=2, ensure_ascii=False)

def yakin_sonuc_bul(soru, sorular):
    eslesen = yakin_sonuclari_getir(soru, sorular, n=1, cutoff=0.6)
    return eslesen[0] if eslesen else None

def cevabini_bul(soru, veritabani):
    for s in veritabani["sorular"]:
        if s["soru"] == soru:
            return s["cevap"]
    return None

@app.route('/')
def index():
    return render_template('chat-test.html')  # templates klasörüne chat.html dosyasını koy

@app.route('/soru', methods=['POST'])
def soru():
    data = request.get_json()
    soru = data.get('soru')
    veritabani = veritabanini_yukle()
    gelen_sonuc = yakin_sonuc_bul(soru, [s["soru"] for s in veritabani["sorular"]])
    
    if gelen_sonuc:
        cevap = cevabini_bul(gelen_sonuc, veritabani)
        return jsonify({"cevap": cevap})
    else:
        return jsonify({"cevap": "Bu soruyu bilmiyorum. Lütfen bana öğret!"})

if __name__ == '__main__':
    app.run(debug=True)
