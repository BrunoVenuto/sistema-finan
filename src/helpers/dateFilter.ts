// Tudo relacionado à manipulação de datas

import { Item } from "../types/Item";

//Retorna o Ano e Mês Atual (EX: 2022-2)
export const getCurrentMonth = () => {
   let now = new Date;
   return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const filterListByMonth = (list: Item[], date: string) => {
   let newList: Item[] = [];
   let [year, month] = date.split('-');

   for(let i in list){
      //Se o mês e o ano correspondente ao item da lista
      //for igual ao mês e o ano atual
      if(
         list[i].date.getFullYear() === parseInt(year) &&
         (list[i].date.getMonth() + 1) === parseInt(month)
      ){
         newList.push(list[i])
      }
   }
   return newList;
}

//Formatar uma data
export const formatDate = (date: Date): string => {
   let year = date.getFullYear();
   let month = date.getMonth()+1;
   let day = date.getDate();

   return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

const addZeroToDate = (n: number): string => {
   if(n < 10){
      return `0${n}`
   }else{
      return `${n}`
   }
}


export const formatCurrentMonth = (currentMonth: string): string => {
   let [year, month] = currentMonth.split('-');

   let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

   return `${months[parseInt(month)-1]}/${year}`
}