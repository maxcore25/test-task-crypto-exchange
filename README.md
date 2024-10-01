# test-task-crypto-exchange

![](/docs/main.png)

## Инструкция

1. Скопируйте файл `.env.example` и переименуйте в `.env.local`
1. Перейдите по ссылке ТЗ: https://telegra.ph/TZ-Frontend-dev-react-12-14
1. Скопируйте API key
1. Вставьте скопированный API key в переменную `VITE_API_KEY` в файле `.env.local`
1. Запустите проект командой `pnpm dev`

## ТЗ

Ссылка: https://telegra.ph/TZ-Frontend-dev-react-12-14

Есть API: https://documenter.getpostman.com/view/8180765/SVfTPnM8?version=latest#intro

API key: в файле `.env.local`.

Из этого API использовать только методы:

- List of available currencies;
- Minimal exchange amount;
- Estimated exchange amount.

Нужно реализовать виджет для создания обмена (только фронт, реакт):

1. Из API берется список всех валют (не использовать метод API get_all_pairs, делать виджет для всех возможных пар);
2. В виджете можно выбрать левую и правую валюты;
3. При выборе валют, выставлять в левом инпуте минимальную сумму обмена;
4. В правый инпут считается и подставляется значение estimated для выбранных валют и суммы в левом инпуте;
5. Если сумма меньше, чем минимальная, то в правый инпут пишется прочерк и выводится ошибка;
6. Если для estimated или для min для выбранных валют API возвращает null, выводить ошибку this pair is disabled now.

Шрифт Arial

Макет: https://www.figma.com/file/fzcnpN2Pm9YY8CIpWbP3NE/Frontend-Test?node-id=0%3A1

Цвета:

- brand color #137E6E
- dark gray #282828
- light gray #A7A7A7
- background #F4F4F4

Состояния кнопок, адаптив, расстояния — на свое усмотрение.

Поддержка — последние версии основных браузеров.

Дополнительно (необязательно): реализация поиска.
