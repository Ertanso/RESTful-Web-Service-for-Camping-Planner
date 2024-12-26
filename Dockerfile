# Node.js imajını baz alıyoruz
FROM node:18

# Çalışma dizini belirliyoruz
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını kopyalıyoruz
COPY package*.json ./

# Gerekli bağımlılıkları yüklüyoruz
RUN npm install

# Proje dosyalarını konteynere kopyalıyoruz
COPY . .

# Uygulamanın çalışacağı portu açıyoruz (örn. 3000)
EXPOSE 3000

# Uygulamayı başlatıyoruz
CMD ["npm", "start"]
