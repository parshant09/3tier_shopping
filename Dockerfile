from node:20-alpine
workdir /app
copy package.json .
run npm install
copy . .
#copy . .
CMD ["npm","start"]
