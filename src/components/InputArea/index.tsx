"use client";

import { useState } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';

import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import CurrencyInput from 'react-currency-input-field';

type Props = {
  onAdd: (item: Item) => void;
};

type DateValue = Date | null | [Date | null, Date | null];

export const InputArea = ({ onAdd }: Props) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState<number>(0);

  const handleDateChange = (value: DateValue) => {
    if (value instanceof Date || value === null) {
      setDate(value);
    }
  };

  const handleAddEvent = () => {
    if (!date) {
      alert('Digite uma data válida');
      return;
    }

    if (!category) {
      alert('Digite a categoria');
      return;
    }

    if (!title) {
      alert('Digite um título');
      return;
    }

    if (value <= 0) {
      alert('Digite um valor válido');
      return;
    }

    const newItem: Item = {
      date: date!, // garante Date
      category,
      title,
      value,
    };

    onAdd(newItem);
  };

  return (
    <C.Container>
      <form>
        <label>
          <C.Title>Data:</C.Title>
          <DatePicker
            format="dd-MM-y"
            value={date}
            onChange={handleDateChange}
          />
        </label>

        <label>
          <C.Title>Categoria:</C.Title>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""></option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="salary">Salary</option>
          </select>
        </label>

        <label>
          <C.Title>Título:</C.Title>
          <C.InputTitle>
            <input
              type="text"
              placeholder="Digite o título..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </C.InputTitle>
        </label>

        <label>
          <C.Title>Valor:</C.Title>
          <CurrencyInput
            prefix="R$ "
            value={value}
            decimalsLimit={2}
            decimalSeparator=","
            groupSeparator="."
            placeholder="Digite um valor..."
            onValueChange={(val) => setValue(Number(val) || 0)}
          />
        </label>
      </form>

      <C.ButtonInput>
        <button type="button" onClick={handleAddEvent}>
          Adicionar
        </button>
      </C.ButtonInput>
    </C.Container>
  );
};
