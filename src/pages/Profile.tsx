import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const completedCourses = [
    { name: 'JavaScript Основы', progress: 100, badge: 'Завершен', date: '15 янв 2025' },
    { name: 'React для начинающих', progress: 100, badge: 'Завершен', date: '28 дек 2024' },
    { name: 'TypeScript Введение', progress: 75, badge: 'В процессе', date: 'Сейчас' },
  ];

  const achievements = [
    { name: 'Первый курс', description: 'Завершили первый курс', icon: 'Trophy', earned: true },
    { name: 'Быстрый старт', description: 'Завершили курс за неделю', icon: 'Zap', earned: true },
    { name: 'Знаток React', description: 'Завершили 3 курса по React', icon: 'Code', earned: false },
    { name: 'Марафонец', description: 'Учились 30 дней подряд', icon: 'Target', earned: false },
  ];

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
            <Link to="/course" className="text-muted-foreground hover:text-foreground transition-colors">
              Курсы
            </Link>
            <Link to="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-foreground">Алексей Петров</CardTitle>
                  <CardDescription>Frontend Developer</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Mail" size={16} />
                    <span>alexey@example.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>Зарегистрирован: декабрь 2024</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    <span>Москва, Россия</span>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-foreground">12</div>
                        <div className="text-xs text-muted-foreground">Курсов</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">150</div>
                        <div className="text-xs text-muted-foreground">Часов</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4">
                    <Icon name="Edit" size={16} className="mr-2" />
                    Редактировать профиль
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="md:w-2/3">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Обзор</TabsTrigger>
                  <TabsTrigger value="courses">Курсы</TabsTrigger>
                  <TabsTrigger value="achievements">Достижения</TabsTrigger>
                  <TabsTrigger value="settings">Настройки</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-foreground">Активность за неделю</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Пн</span>
                          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-primary rounded-full"></div>
                          </div>
                          <span className="text-sm text-foreground">2ч</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Вт</span>
                          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="w-1/2 h-full bg-primary rounded-full"></div>
                          </div>
                          <span className="text-sm text-foreground">1ч</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Ср</span>
                          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="w-full h-full bg-primary rounded-full"></div>
                          </div>
                          <span className="text-sm text-foreground">3ч</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-foreground">Последние достижения</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {achievements.filter(a => a.earned).map((achievement, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon name={achievement.icon as any} size={20} className="text-primary" />
                            </div>
                            <div>
                              <div className="font-medium text-foreground">{achievement.name}</div>
                              <div className="text-sm text-muted-foreground">{achievement.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="courses" className="mt-6 space-y-4">
                  {completedCourses.map((course, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-foreground">{course.name}</h3>
                            <p className="text-sm text-muted-foreground">Обновлено: {course.date}</p>
                          </div>
                          <Badge variant={course.progress === 100 ? "default" : "secondary"}>
                            {course.badge}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Прогресс</span>
                            <span className="text-foreground">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="w-full" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="achievements" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <Card key={index} className={`${achievement.earned ? 'border-primary/50' : 'opacity-50'}`}>
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              achievement.earned ? 'bg-primary/10' : 'bg-muted'
                            }`}>
                              <Icon 
                                name={achievement.icon as any} 
                                size={24} 
                                className={achievement.earned ? 'text-primary' : 'text-muted-foreground'} 
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{achievement.name}</h3>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                              {achievement.earned && (
                                <Badge className="mt-2">Получено</Badge>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="settings" className="mt-6 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-foreground">Личная информация</CardTitle>
                      <CardDescription>Обновите свою личную информацию</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-foreground">Имя</Label>
                          <Input id="firstName" defaultValue="Алексей" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-foreground">Фамилия</Label>
                          <Input id="lastName" defaultValue="Петров" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">Email</Label>
                        <Input id="email" type="email" defaultValue="alexey@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-foreground">Местоположение</Label>
                        <Input id="location" defaultValue="Москва, Россия" />
                      </div>
                      <Button>
                        <Icon name="Save" size={16} className="mr-2" />
                        Сохранить изменения
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-foreground">Уведомления</CardTitle>
                      <CardDescription>Настройте ваши предпочтения уведомлений</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-foreground font-medium">Email уведомления</div>
                          <div className="text-sm text-muted-foreground">Получать уведомления о новых курсах</div>
                        </div>
                        <Button variant="outline" size="sm">Включено</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-foreground font-medium">Напоминания</div>
                          <div className="text-sm text-muted-foreground">Напоминания о незавершенных уроках</div>
                        </div>
                        <Button variant="outline" size="sm">Включено</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;