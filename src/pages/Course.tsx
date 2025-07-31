import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Course = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все курсы', count: 24 },
    { id: 'javascript', name: 'JavaScript', count: 8 },
    { id: 'react', name: 'React', count: 6 },
    { id: 'python', name: 'Python', count: 5 },
    { id: 'nodejs', name: 'Node.js', count: 3 },
    { id: 'design', name: 'Дизайн', count: 2 },
  ];

  const courses = [
    {
      id: 1,
      title: 'JavaScript для начинающих',
      description: 'Изучите основы JavaScript с нуля до продвинутого уровня',
      category: 'javascript',
      level: 'Начинающий',
      duration: '40 часов',
      lessons: 32,
      students: 1250,
      rating: 4.8,
      price: 'Бесплатно',
      image: '🟨',
      progress: 0,
      tags: ['JavaScript', 'Основы', 'Веб-разработка']
    },
    {
      id: 2,
      title: 'React: Полное руководство',
      description: 'Создавайте современные веб-приложения с React и Redux',
      category: 'react',
      level: 'Средний',
      duration: '60 часов',
      lessons: 48,
      students: 980,
      rating: 4.9,
      price: '2990 ₽',
      image: '⚛️',
      progress: 25,
      tags: ['React', 'Redux', 'Hooks']
    },
    {
      id: 3,
      title: 'Python для анализа данных',
      description: 'Освойте Python для работы с данными и машинного обучения',
      category: 'python',
      level: 'Средний',
      duration: '50 часов',
      lessons: 40,
      students: 756,
      rating: 4.7,
      price: '3490 ₽',
      image: '🐍',
      progress: 0,
      tags: ['Python', 'Data Science', 'Pandas']
    },
    {
      id: 4,
      title: 'TypeScript с нуля',
      description: 'Изучите TypeScript для создания надежных приложений',
      category: 'javascript',
      level: 'Средний',
      duration: '35 часов',
      lessons: 28,
      students: 642,
      rating: 4.6,
      price: '2490 ₽',
      image: '🔷',
      progress: 75,
      tags: ['TypeScript', 'JavaScript', 'Типизация']
    },
    {
      id: 5,
      title: 'Node.js Backend разработка',
      description: 'Создавайте серверные приложения с Node.js и Express',
      category: 'nodejs',
      level: 'Продвинутый',
      duration: '45 часов',
      lessons: 36,
      students: 523,
      rating: 4.8,
      price: '3990 ₽',
      image: '🟢',
      progress: 0,
      tags: ['Node.js', 'Express', 'MongoDB']
    },
    {
      id: 6,
      title: 'UI/UX Дизайн основы',
      description: 'Изучите принципы создания удобных интерфейсов',
      category: 'design',
      level: 'Начинающий',
      duration: '30 часов',
      lessons: 24,
      students: 834,
      rating: 4.5,
      price: '1990 ₽',
      image: '🎨',
      progress: 0,
      tags: ['UI/UX', 'Figma', 'Дизайн']
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начинающий': return 'bg-green-100 text-green-800';
      case 'Средний': return 'bg-yellow-100 text-yellow-800';
      case 'Продвинутый': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">CodeLearn</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Главная
            </Link>
            <Link to="/course" className="text-foreground font-medium">
              Курсы
            </Link>
            <Link to="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/profile">
              <Button variant="outline">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Каталог курсов
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Выберите курс и начните изучение программирования уже сегодня
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск курсов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">Категории</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-foreground">Мои курсы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.filter(c => c.progress > 0).map((course) => (
                      <div key={course.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground truncate">
                            {course.title}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {course.progress}%
                          </span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>

            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="text-4xl mb-2">{course.image}</div>
                        <Badge className={getLevelColor(course.level)}>
                          {course.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-foreground line-clamp-2">
                        {course.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {course.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="BookOpen" size={14} />
                          <span>{course.lessons} уроков</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Users" size={14} />
                          <span>{course.students}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                      
                      {course.progress > 0 && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Прогресс</span>
                            <span className="text-foreground">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-xl font-bold text-foreground">
                          {course.price}
                        </div>
                        <Button className={course.progress > 0 ? "w-auto" : "w-auto"}>
                          {course.progress > 0 ? (
                            <>
                              <Icon name="Play" size={16} className="mr-2" />
                              Продолжить
                            </>
                          ) : (
                            <>
                              <Icon name="Plus" size={16} className="mr-2" />
                              Начать
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {filteredCourses.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Курсы не найдены
                  </h3>
                  <p className="text-muted-foreground">
                    Попробуйте изменить поисковый запрос или выбрать другую категорию
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Course;