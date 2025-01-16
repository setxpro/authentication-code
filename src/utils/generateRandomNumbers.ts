export default function generateRandomNumber(length: number) {
   let result = "";
   let characters = "A1B2C3D4E5F6G7H8I9JKLMNOPQRSTUVZ";
   let charactersLength = characters.length;
   for (let i = 0; i < length; i++) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
 }