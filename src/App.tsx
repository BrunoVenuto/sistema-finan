
import { useEffect, useState } from 'react'
import * as C from './App.styles';
import { Item } from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea'
import { InputArea } from './components/InputArea';

const App = () => {
   const [list, setList] = useState(items); //Lista geral de Itens
   const [filteredList, setFilteredList] = useState<Item[]>([]); //Lista filtrada
   const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); //2022-2
   const [income, setIncome] = useState(0); //renda
   const [expense, setExpense] = useState(0); //despesas

   // Atualiza a lista de acordo ao mês
   useEffect(() => {
      setFilteredList(filterListByMonth(list, currentMonth))
   }, [list, currentMonth]);

   //Soma das despesas e receitas para mostrar na área de informações
   useEffect(()=>{
      let incomeCount = 0;
      let expenseCount = 0;

      for(let i in filteredList){
         // Se a categoria for "expense"
         if(categories[filteredList[i].category].expense){
            expenseCount += filteredList[i].value;
         } else {
            incomeCount += filteredList[i].value;
         }
      }

      setIncome(incomeCount);
      setExpense(expenseCount);

   }, [filteredList])

   const handleMonthChange = (newMonth: string) => {
      setCurrentMonth(newMonth);
   }

   const handleAddItem = (item: Item) => {
      let newList = [...list];
      newList.push(item)
      setList(newList);
   }

   return (
      <C.Container>
         <C.Header>
            <C.HeaderText> Sistema Financeiro </C.HeaderText>
         </C.Header>
         <C.Body>
            {/* Área de Informações */}
            <InfoArea
               currentMonth={currentMonth}
               onMonthChange={handleMonthChange}
               income={income}
               expense={expense}
            />

            {/* Área de Inserção */}
            {/* Data, categoria, titulo, valor - botão adicionar */}
            <InputArea onAdd={handleAddItem}/>

            {/* Área de visualização */}
            <TableArea list={filteredList}/>
         </C.Body>
      </C.Container>
   );
}

export default App;
