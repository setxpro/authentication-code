export default function addTenMinutesToDate(date: Date) {
   // Crie uma cópia da data para evitar modificá-la diretamente
   var newDate = new Date(date);
 
   // Adicione 10 minutos à cópia da data
   newDate.setMinutes(newDate.getMinutes() + 10);
 
   // Retorna a nova data com mais 10 minutos
   return newDate;
 }