# Указываем язык програмирования
FROM "node:18.18"

# Указываем папку где открывать терминал
WORKDIR /pay_system

#Копируем все файлы в Докер
COPY . /pay_system

#Установка зависимостей
RUN npm install

#указываем порт для работы
EXPOSE 3000


CMD [ "npm", "start" ]


#docker run -p 3000:3000 pay_system