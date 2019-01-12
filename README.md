# Описание структуры проекта

Проект-заготовка для работы над front составляющей сайта. Используется минимальный набор компонетов для комфортной разработки. Структура SASS выстроена в соответствии с [паттерном 7-1](https://sass-guidelin.es/ru/)

## Используемые модули

- gulp
- gulp-sass
- gulp-watch
- gulp-file-include
- gulp-autoprefixer
- gulp-sourcemaps
- browser-sync

## Структура файлов

    .
    ├── css
    │   ├── abstracts                   # Папка abstracts/ собирает все инструменты и хелперы Sass в проекте. 
    │   │   ├── _variables.scss         # Sass переменные
    │   │   ├── _functions.scss         # Sass функции
    │   │   ├── _mixins.scss            # Sass миксины  
    │   │   └── ...                     # Прочее  
    │   ├── base                        # Папка base/ содержит то, что мы можем назвать общим шаблоном проекта.
    │   │   ├── _base.scss              # Основные стили
    │   │   ├── _fonts.scss             # Подключение шрифтов
    │   │   ├── _helpers.scss           # Вспомогательные стили, например clearfix
    │   │   ├── _typography.scss        # Определение текстовых особенностей
    │   │   └── ...                     # Прочее  
    │   ├── components                  # Папка components/ содержит стили для маленьких компнентов.
    │   │   ├── _button.scss            # Стили кнопок (например)
    │   │   └── ...                     # Прочее  
    │   ├── layout                      # Папка layout/ содержит стили для компонентов, определяющих общий каркас
    │   │   ├── _header.scss            # Стили header
    │   │   ├── _footer.scss            # Стили footer
    │   │   └── ...                     # Прочее  
    │   ├── pages                       # Папка pages/ содержит стили, зависящие от страницы
    │   │   ├── _home.scss              # Стили footer
    │   │   └── ...                     # Прочее  
    │   ├── themes                      # Папка default/ необходима в том случае если на сайте используется несколько различных тем
    │   │   ├── _default.scss           # Стили footer
    │   │   └── ...                     # Прочее 
    │   ├── vendor                      # Папка vendor/ содержит стили сторонних разработчиков
    │   │   ├── _normalize.scss         # Normalize/Reset
    │   │   └── ...                     # Прочее
    │   ├── main.scss                   # Основной файл внутри, которого происходит сборка
    ├── fonts                           
    │   ├── < font name >               # Наименование шрифта
    │   │   ├── < font files >          # Список файлов шрифтов
    ├── images                          
    │   ├── common                      # Обычные изображения jpg, png, ...
    │   │   ├── *.*
    │   ├── icons                       # Изображения иконок, преимущественно svg
    │   │   ├── *.svg
    │   ├── ...                         # Остальные варианты группировки изображений 
    ├── js                               
    │   ├── vendor
    │   │   ├── < vendor name >         # Наименование вендора
    │   │   │   ├── < vendor files >    # Файлы вендора
    │   ├── _button.js                  # Скрип, относящийся к компоненту `кнопка` (например)
    │   ├── main.js                     # Основной файл, который предстовляет собой список include всех скриптов
    ├── partial
    │   ├── *.html                      # Список html файлов (верстки комнонентов) с повторным использованием
    ├── *.html                          # Основные html файлы страниц
    ├── Gulpfile.js                     
    └── package.json
    
    