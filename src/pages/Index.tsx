import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  description: string;
  language: string;
  icon: string;
  level: 'Начинающий' | 'Средний' | 'Продвинутый';
  duration: string;
  lessonsCount: number;
  materials?: {
    title: string;
    type: 'video' | 'text' | 'practice';
    duration?: string;
  }[];
}

const courses: Course[] = [
  {
    id: 1,
    title: 'JavaScript для начинающих',
    description: 'Изучите основы JavaScript с нуля. Переменные, функции, объекты и многое другое.',
    language: 'JavaScript',
    icon: 'Code2',
    level: 'Начинающий',
    duration: '6 недель',
    lessonsCount: 24,
    materials: [
      { title: 'Введение в JavaScript', type: 'video', duration: '15 мин' },
      { title: 'Переменные и типы данных', type: 'video', duration: '22 мин' },
      { title: 'Практика: Создание калькулятора', type: 'practice', duration: '45 мин' },
    ]
  },
  {
    id: 2,
    title: 'React.js разработка',
    description: 'Современная библиотека для создания пользовательских интерфейсов.',
    language: 'React',
    icon: 'Component',
    level: 'Средний',
    duration: '8 недель',
    lessonsCount: 32,
    materials: [
      { title: 'Компоненты и JSX', type: 'video', duration: '28 мин' },
      { title: 'Хуки и состояние', type: 'video', duration: '35 мин' },
      { title: 'Создание Todo приложения', type: 'practice', duration: '60 мин' },
    ]
  },
  {
    id: 3,
    title: 'Python основы',
    description: 'Универсальный язык программирования для автоматизации и анализа данных.',
    language: 'Python',
    icon: 'FileCode',
    level: 'Начинающий',
    duration: '5 недель',
    lessonsCount: 20,
    materials: [
      { title: 'Синтаксис Python', type: 'video', duration: '20 мин' },
      { title: 'Работа с данными', type: 'text' },
      { title: 'Создание веб-скрапера', type: 'practice', duration: '50 мин' },
    ]
  },
  {
    id: 4,
    title: 'Node.js Backend',
    description: 'Серверная разработка на JavaScript. API, базы данных, аутентификация.',
    language: 'Node.js',
    icon: 'Server',
    level: 'Продвинутый',
    duration: '10 недель',
    lessonsCount: 40,
    materials: [
      { title: 'Express.js фреймворк', type: 'video', duration: '30 мин' },
      { title: 'Работа с MongoDB', type: 'video', duration: '40 мин' },
      { title: 'REST API проект', type: 'practice', duration: '90 мин' },
    ]
  }
];

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [filter, setFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [showContacts, setShowContacts] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const languages = ['Все', 'JavaScript', 'React', 'Python', 'Node.js'];
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(filter.toLowerCase()) ||
                         course.description.toLowerCase().includes(filter.toLowerCase());
    const matchesLanguage = !languageFilter || languageFilter === 'Все' || course.language === languageFilter;
    return matchesSearch && matchesLanguage;
  });

  if (showContacts) {
    return (
      <div className="min-h-screen bg-background dark">
        <nav className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <h1 className="text-xl font-semibold text-foreground">CodeLearn</h1>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowContacts(false)}
                  className="text-primary hover:text-primary/80"
                >
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Назад
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь со мной для вопросов и предложений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow h-fit">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Icon name="MessageCircle" size={24} className="mr-3 text-primary" />
                  Telegram
                </CardTitle>
                <CardDescription className="min-h-[40px]">
                  Быстрый способ связи для вопросов и обратной связи
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full h-10"
                  onClick={() => window.open('https://t.me/w0vz', '_blank')}
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  @w0vz
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-fit">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Icon name="Github" size={24} className="mr-3 text-primary" />
                  GitHub
                </CardTitle>
                <CardDescription className="min-h-[40px]">
                  Посмотрите мои проекты и исходный код
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full h-10"
                  onClick={() => window.open('https://github.com/w0vz', '_blank')}
                >
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  github.com/w0vz
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Есть вопросы?</CardTitle>
                <CardDescription>
                  Не стесняйтесь обращаться по любым вопросам о курсах, 
                  техническим проблемам или предложениям по улучшению платформы.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  <Button 
                    onClick={() => window.open('https://t.me/w0vz', '_blank')}
                    className="flex items-center"
                  >
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Написать в Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (showProfile) {
    return (
      <div className="min-h-screen bg-background dark">
        <nav className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <h1 className="text-xl font-semibold text-foreground">CodeLearn</h1>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowProfile(false)}
                  className="text-primary hover:text-primary/80"
                >
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Назад
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                      <Icon name="User" size={40} className="text-primary-foreground" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h1 className="text-2xl font-bold text-foreground mb-2">w0vz</h1>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                      <Badge variant="secondary" className="text-sm">
                        <Icon name="Code" size={14} className="mr-1" />
                        Разработчик
                      </Badge>
                      <span className="text-muted-foreground text-sm flex items-center">
                        <Icon name="Calendar" size={14} className="mr-1" />
                        В CodeLearn с декабря 2023
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      Увлеченный разработчик, создающий современные веб-приложения. 
                      Специализируюсь на React, TypeScript и Node.js.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <p className="text-muted-foreground">Пройдено курсов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">156</div>
                <p className="text-muted-foreground">Часов обучения</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">94%</div>
                <p className="text-muted-foreground">Средний прогресс</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Trophy" size={20} className="mr-2 text-primary" />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Icon name="Star" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Первый курс</h4>
                    <p className="text-sm text-muted-foreground">Завершили первый курс</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon name="Code2" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">JavaScript Master</h4>
                    <p className="text-sm text-muted-foreground">Завершили все курсы по JavaScript</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Быстрый ученик</h4>
                    <p className="text-sm text-muted-foreground">Завершили курс за рекордное время</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="BookOpen" size={20} className="mr-2 text-primary" />
                  Текущие курсы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">Node.js Backend</h4>
                    <Badge variant="outline" className="text-xs">В процессе</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>65% завершено</span>
                    <span>26/40 уроков</span>
                  </div>
                </div>
                
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">React.js разработка</h4>
                    <Badge variant="outline" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">Завершен</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>100% завершено</span>
                    <span>32/32 урока</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Settings" size={20} className="mr-2 text-primary" />
                  Настройки профиля
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Icon name="Edit" size={16} className="mr-2" />
                    Редактировать профиль
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto ml-0 sm:ml-4">
                    <Icon name="Bell" size={16} className="mr-2" />
                    Настройки уведомлений
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (selectedCourse) {
    return (
      <div className="min-h-screen bg-background dark">
        <nav className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <h1 className="text-xl font-semibold text-foreground">CodeLearn</h1>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedCourse(null)}
                  className="text-primary hover:text-primary/80"
                >
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Назад к курсам
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name={selectedCourse.icon} size={32} className="text-primary" />
              <div>
                <h1 className="text-3xl font-bold text-foreground">{selectedCourse.title}</h1>
                <p className="text-muted-foreground">{selectedCourse.language}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <Badge variant="secondary">{selectedCourse.level}</Badge>
              <span className="text-sm text-muted-foreground flex items-center">
                <Icon name="Clock" size={16} className="mr-1" />
                {selectedCourse.duration}
              </span>
              <span className="text-sm text-muted-foreground flex items-center">
                <Icon name="BookOpen" size={16} className="mr-1" />
                {selectedCourse.lessonsCount} уроков
              </span>
            </div>
            
            <p className="text-foreground text-lg leading-relaxed mb-8">{selectedCourse.description}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="PlayCircle" size={24} className="mr-2 text-primary" />
                Материалы курса
              </CardTitle>
              <CardDescription>
                Изучайте в удобном темпе с нашими интерактивными материалами
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedCourse.materials?.map((material, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={material.type === 'video' ? 'Play' : material.type === 'practice' ? 'Code' : 'FileText'} 
                      size={20} 
                      className="text-primary" 
                    />
                    <div>
                      <h4 className="font-medium text-foreground">{material.title}</h4>
                      <p className="text-sm text-muted-foreground capitalize">
                        {material.type === 'video' ? 'Видео' : material.type === 'practice' ? 'Практика' : 'Текст'}
                        {material.duration && ` • ${material.duration}`}
                      </p>
                    </div>
                  </div>
                  <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="mt-8">
            <Button size="lg" className="w-full sm:w-auto">
              <Icon name="Play" size={20} className="mr-2" />
              Начать курс
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background dark">
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold text-foreground">CodeLearn</h1>
              <div className="hidden md:flex space-x-6">
                <Button variant="ghost" className="text-primary">
                  Главная
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setShowContacts(true)}
                >
                  Контакты
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setShowProfile(true)}
                >
                  Профиль
                </Button>
              </div>
            </div>
            <Button className="hidden sm:flex">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Изучайте программирование
            <span className="text-primary block">с экспертами</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Практические курсы от ведущих разработчиков. Получите реальные навыки для карьеры в IT.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Поиск курсов..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {languages.map((lang) => (
                <Button
                  key={lang}
                  variant={languageFilter === lang || (lang === 'Все' && !languageFilter) ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguageFilter(lang === 'Все' ? '' : lang)}
                  className={languageFilter === lang || (lang === 'Все' && !languageFilter) 
                    ? "" 
                    : "border border-muted-foreground/20 hover:border-muted-foreground/40 text-muted-foreground hover:text-foreground"
                  }
                >
                  {lang}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border hover:border-primary/50 flex flex-col">
              <CardHeader className="pb-3 flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                  <Icon name={course.icon} size={28} className="text-primary" />
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex-grow flex flex-col justify-end">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="flex items-center">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Icon name="BookOpen" size={14} className="mr-1" />
                    {course.lessonsCount} уроков
                  </span>
                </div>
                <Button 
                  className="w-full h-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all mt-auto"
                  variant="outline"
                  onClick={() => setSelectedCourse(course)}
                >
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Курсы не найдены</h3>
            <p className="text-muted-foreground">Попробуйте изменить критерии поиска</p>
          </div>
        )}
      </div>

      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold text-foreground mb-4">CodeLearn</h3>
              <p className="text-muted-foreground mb-4">
                Платформа для изучения программирования с практическими проектами и поддержкой экспертов.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Icon name="Github" size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Mail" size={16} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Курсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Документация</li>
                <li>Сообщество</li>
                <li>Контакты</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 mt-8 text-center text-sm text-muted-foreground">
            © 2024 CodeLearn. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;