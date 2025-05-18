import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 text-lg font-medium">Початок роботи</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Безкоштовні плани
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Для Бізнесу
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Для Блогера
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Для Медіа
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Отримати рекомендацію
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Запит на демонстрацію
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Звернутися до відділу продажів
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Рішення</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Прикладні послуги
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Мережеві служби
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Послуги розробника
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Розробка ПЗ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Кешбеки
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  CRM-системи
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Юридичні послуги
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Бухгалтерські послуги
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Спільнота</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Осередок спільноти
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Проект Nomo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Новий Біткоін
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  N-invest
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Підтримка</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Центр підтримки
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Довіра та безпека
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Компанія</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Про Компанію
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Наша команда
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Відносини з інвесторами
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Кар'єра
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Різноманітність, справедливість та залучення
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Карта мережі
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Стати партнером
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-800 pt-6 md:flex-row">
          <div className="mb-4 flex space-x-4 md:mb-0">
            <a href="#" className="rounded-full bg-gray-800 p-2">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13.5v7l5-3.5-5-3.5z"></path>
              </svg>
            </a>
            <a href="#" className="rounded-full bg-gray-800 p-2">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"></path>
              </svg>
            </a>
            <a href="#" className="rounded-full bg-gray-800 p-2">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
              </svg>
            </a>
            <a href="#" className="rounded-full bg-gray-800 p-2">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.39 4.482A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.061a4.922 4.922 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.917 4.917 0 004.598 3.415 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
              </svg>
            </a>
          </div>

          <div className="text-sm text-gray-400">
            <span>©2025BlockN, Inc.</span>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">
              Політика конфіденційності
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">
              Умови використання
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">
              <span className="flex items-center">
                <span className="mr-1">🍪</span>
                Налаштування файлів cookie
              </span>
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">
              Торгова марка
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
