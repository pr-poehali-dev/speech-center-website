import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="MessageSquare" className="text-primary" size={28} />
            <span className="font-heading text-xl font-bold text-foreground">ЛогоЦентр</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-primary transition-colors">Кейсы</button>
            <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('specialists')} className="text-sm font-medium hover:text-primary transition-colors">Специалисты</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('articles')} className="text-sm font-medium hover:text-primary transition-colors">Статьи</button>
            <Button onClick={() => scrollToSection('contact')} className="ml-4">Записаться</Button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden border-t py-4 animate-fade-in">
            <div className="container flex flex-col gap-3">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors text-left py-2">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors text-left py-2">Услуги</button>
              <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-primary transition-colors text-left py-2">Кейсы</button>
              <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-primary transition-colors text-left py-2">Цены</button>
              <button onClick={() => scrollToSection('specialists')} className="text-sm font-medium hover:text-primary transition-colors text-left py-2">Специалисты</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors text-left py-2">Отзывы</button>
              <button onClick={() => scrollToSection('articles')} className="text-sm font-medium hover:text-primary transition-colors text-left py-2">Статьи</button>
              <Button onClick={() => scrollToSection('contact')} className="w-full mt-2">Записаться</Button>
            </div>
          </nav>
        )}
      </header>

      <section id="hero" className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4" variant="secondary">Профессиональная логопедия</Badge>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Помогаем детям и взрослым говорить уверенно
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Комплексная диагностика и лечение речевых нарушений. 15+ лет опыта, современные методики, 
                гарантированный результат.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')}>
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('cases')}>
                  Наши результаты
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">1500+</div>
                  <div className="text-sm text-muted-foreground">Пациентов</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Результат</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/dc12b86e-8ef9-4fdb-8bc6-20ab6372f2e9/files/ead4ac44-2c50-475c-924a-fd27f3cc397e.jpg" 
                alt="Логопед с пациентом" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Наши услуги</Badge>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Комплексный подход к лечению</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современные методики для решения любых речевых проблем
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Baby',
                title: 'Детская логопедия',
                description: 'Коррекция звукопроизношения, развитие речи, устранение заикания у детей от 2 лет'
              },
              {
                icon: 'Users',
                title: 'Взрослая логопедия',
                description: 'Восстановление речи после инсульта, коррекция дефектов речи, работа с афазией'
              },
              {
                icon: 'Brain',
                title: 'Нейрологопедия',
                description: 'Комплексная работа с нарушениями ЦНС, аутизм, ДЦП, ЗРР, алалия'
              },
              {
                icon: 'FileText',
                title: 'Диагностика',
                description: 'Полная логопедическая диагностика, нейропсихологическое обследование'
              },
              {
                icon: 'School',
                title: 'Подготовка к школе',
                description: 'Развитие фонематического слуха, обучение грамоте, постановка звуков'
              },
              {
                icon: 'Mic',
                title: 'Логомассаж',
                description: 'Артикуляционный массаж для улучшения речевой моторики'
              }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Истории успеха</Badge>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Кейсы: До и После</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших пациентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/dc12b86e-8ef9-4fdb-8bc6-20ab6372f2e9/files/825a0e8b-693b-4dbb-abee-6940200faeb6.jpg" 
                alt="График прогресса" 
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="font-heading">Максим, 5 лет</CardTitle>
                <CardDescription>Задержка речевого развития</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">До лечения:</span>
                    <span className="text-sm font-medium">Словарный запас 20 слов</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">После 6 месяцев:</span>
                    <span className="text-sm font-medium text-secondary">500+ слов, фразовая речь</span>
                  </div>
                  <div className="pt-3 border-t">
                    <Badge className="bg-secondary text-secondary-foreground">Срок: 6 месяцев</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Анна, 32 года</CardTitle>
                <CardDescription>Восстановление после инсульта</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="XCircle" size={16} className="text-destructive" />
                      До лечения:
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                      <li>• Афазия средней степени</li>
                      <li>• Сложности с построением фраз</li>
                      <li>• Ограниченная коммуникация</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="CheckCircle" size={16} className="text-secondary" />
                      После 8 месяцев:
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                      <li>• Восстановление речевой функции на 85%</li>
                      <li>• Свободное общение</li>
                      <li>• Возврат к работе</li>
                    </ul>
                  </div>
                  <div className="pt-3 border-t">
                    <Badge className="bg-secondary text-secondary-foreground">Срок: 8 месяцев</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Дмитрий, 7 лет</CardTitle>
                <CardDescription>Заикание и нарушение звукопроизношения</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">До лечения:</span>
                    <span className="text-sm font-medium">Заикание 40%, дефекты 8 звуков</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">После 4 месяцев:</span>
                    <span className="text-sm font-medium text-secondary">Чистая речь, все звуки</span>
                  </div>
                  <div className="pt-3 border-t">
                    <Badge className="bg-secondary text-secondary-foreground">Срок: 4 месяца</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">София, 4 года</CardTitle>
                <CardDescription>Моторная алалия</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Прогресс:</h4>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Понимание речи</span>
                          <span className="text-secondary font-medium">95%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Активная речь</span>
                          <span className="text-secondary font-medium">80%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{width: '80%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Социализация</span>
                          <span className="text-secondary font-medium">90%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{width: '90%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <Badge className="bg-secondary text-secondary-foreground">Срок: 10 месяцев</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Стоимость</Badge>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Без скрытых платежей, первая консультация со скидкой 50%
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="font-heading">Консультация</CardTitle>
                <CardDescription>Первичный прием</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-heading font-bold text-foreground">1500₽</div>
                  <div className="text-sm text-muted-foreground line-through">3000₽</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span className="text-sm">Полная диагностика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span className="text-sm">План лечения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span className="text-sm">Рекомендации</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" onClick={() => scrollToSection('contact')}>
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary shadow-lg scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Популярное</Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Индивидуальное занятие</CardTitle>
                <CardDescription>45 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-heading font-bold text-foreground">2500₽</div>
                  <div className="text-sm text-muted-foreground">за занятие</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span className="text-sm">Персональный подход</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span className="text-sm">Современные методики</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span className="text-sm">Домашние задания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span className="text-sm">Связь с родителями</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection('contact')}>
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="font-heading">Абонемент</CardTitle>
                <CardDescription>8 занятий</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-heading font-bold text-foreground">18000₽</div>
                  <div className="text-sm text-secondary font-medium">Экономия 2000₽</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span className="text-sm">Все из тарифа "Занятие"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span className="text-sm">Фиксация цены</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span className="text-sm">Приоритетная запись</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span className="text-sm">Бесплатный перенос</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" onClick={() => scrollToSection('contact')}>
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="specialists" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Команда</Badge>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Наши специалисты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Дипломированные логопеды с многолетним опытом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Елена Иванова',
                role: 'Главный логопед-дефектолог',
                experience: '15 лет опыта',
                education: 'МГПУ, логопедия',
                specialization: 'Детская и взрослая логопедия, нейрологопедия'
              },
              {
                name: 'Мария Петрова',
                role: 'Логопед-нейропсихолог',
                experience: '10 лет опыта',
                education: 'МГУ, клиническая психология',
                specialization: 'Алалия, афазия, ДЦП, аутизм'
              },
              {
                name: 'Анна Сидорова',
                role: 'Детский логопед',
                experience: '8 лет опыта',
                education: 'МПГУ, логопедия',
                specialization: 'ЗРР, дислалия, дизартрия, заикание'
              }
            ].map((specialist, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <CardTitle className="font-heading">{specialist.name}</CardTitle>
                  <CardDescription className="text-base">{specialist.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-left">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="Award" size={16} className="text-primary mt-0.5" />
                      <span>{specialist.experience}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="GraduationCap" size={16} className="text-primary mt-0.5" />
                      <span>{specialist.education}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Stethoscope" size={16} className="text-primary mt-0.5" />
                      <span>{specialist.specialization}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Отзывы</Badge>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Что говорят пациенты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные отзывы довольных клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Ольга М.',
                role: 'Мама Максима',
                rating: 5,
                text: 'Огромная благодарность Елене Ивановне! За полгода наш сын начал говорить предложениями. Очень терпеливый и профессиональный подход.'
              },
              {
                name: 'Сергей К.',
                role: 'Пациент',
                rating: 5,
                text: 'После инсульта потерял речь. Благодаря занятиям с Марией Петровной вернулся к нормальной жизни. Рекомендую!'
              },
              {
                name: 'Татьяна В.',
                role: 'Мама Дмитрия',
                rating: 5,
                text: 'Сын заикался с 4 лет. Анна Сидорова помогла справиться с проблемой за 4 месяца. Теперь говорит свободно!'
              },
              {
                name: 'Алексей П.',
                role: 'Папа Софии',
                rating: 5,
                text: 'Дочке поставили алалию. Были у многих специалистов, но только здесь увидели реальный результат. Спасибо!'
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Блог</Badge>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Экспертные советы и рекомендации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Как понять, что ребенку нужен логопед?',
                description: 'Основные признаки речевых нарушений у детей и когда стоит обратиться к специалисту',
                date: '15 ноября 2024',
                category: 'Детская логопедия'
              },
              {
                title: 'Восстановление речи после инсульта',
                description: 'Методики реабилитации и прогнозы восстановления речевых функций у взрослых',
                date: '10 ноября 2024',
                category: 'Взрослая логопедия'
              },
              {
                title: 'Артикуляционная гимнастика дома',
                description: 'Простые упражнения для развития речевого аппарата, которые можно делать самостоятельно',
                date: '5 ноября 2024',
                category: 'Практика'
              }
            ].map((article, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="FileText" size={48} className="text-primary" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <CardTitle className="font-heading text-xl">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Badge className="mb-4" variant="secondary">Контакты</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Запишитесь на консультацию</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Первая консультация со скидкой 50%. Ответим на все вопросы и составим план лечения.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">info@logocentr.ru</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00-20:00, Сб: 10:00-18:00</div>
                  </div>
                </div>
              </div>

              <img 
                src="https://cdn.poehali.dev/projects/dc12b86e-8ef9-4fdb-8bc6-20ab6372f2e9/files/6a949791-5046-4de9-ad4d-0e368b3bd865.jpg" 
                alt="Наш центр" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Форма записи</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
                    <Input id="email" type="email" placeholder="example@mail.ru" />
                  </div>

                  <div>
                    <label htmlFor="service" className="text-sm font-medium mb-2 block">Интересующая услуга</label>
                    <select id="service" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                      <option>Консультация</option>
                      <option>Детская логопедия</option>
                      <option>Взрослая логопедия</option>
                      <option>Нейрологопедия</option>
                      <option>Логомассаж</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea id="message" placeholder="Опишите вашу ситуацию..." rows={4} />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container">
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold">Частые вопросы</h3>
            </div>
            <AccordionItem value="item-1">
              <AccordionTrigger>Как проходит первая консультация?</AccordionTrigger>
              <AccordionContent>
                Первая консультация длится 45-60 минут. Логопед проводит диагностику, оценивает речевое развитие, 
                выявляет проблемы и составляет индивидуальный план коррекции. Вы получите подробные рекомендации 
                и сможете задать все интересующие вопросы.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Сколько занятий потребуется?</AccordionTrigger>
              <AccordionContent>
                Количество занятий зависит от сложности нарушения, возраста и индивидуальных особенностей. 
                В среднем курс составляет от 2 до 10 месяцев при регулярных занятиях 2-3 раза в неделю. 
                Точный прогноз даст логопед после диагностики.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Работаете ли вы со взрослыми?</AccordionTrigger>
              <AccordionContent>
                Да, мы работаем как с детьми, так и со взрослыми. Специализируемся на восстановлении речи 
                после инсульта, черепно-мозговых травм, коррекции дефектов речи, работе с афазией и дизартрией.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Можно ли заниматься онлайн?</AccordionTrigger>
              <AccordionContent>
                Да, мы проводим онлайн-занятия через видеосвязь. Это удобно для жителей других городов 
                или при плотном графике. Эффективность онлайн-занятий сопоставима с очными при правильной организации.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Какие документы нужны для занятий?</AccordionTrigger>
              <AccordionContent>
                Для детей: свидетельство о рождении, заключения специалистов (невролога, психиатра), 
                если есть. Для взрослых: паспорт, медицинские документы, подтверждающие диагноз (при наличии). 
                Мы также можем направить на дополнительные обследования при необходимости.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="py-12 bg-foreground text-background">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="MessageSquare" size={24} />
                <span className="font-heading text-xl font-bold">ЛогоЦентр</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональная логопедическая помощь детям и взрослым
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#services" className="hover:opacity-100 transition-opacity">Детская логопедия</a></li>
                <li><a href="#services" className="hover:opacity-100 transition-opacity">Взрослая логопедия</a></li>
                <li><a href="#services" className="hover:opacity-100 transition-opacity">Нейрологопедия</a></li>
                <li><a href="#services" className="hover:opacity-100 transition-opacity">Диагностика</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#specialists" className="hover:opacity-100 transition-opacity">Специалисты</a></li>
                <li><a href="#prices" className="hover:opacity-100 transition-opacity">Цены</a></li>
                <li><a href="#reviews" className="hover:opacity-100 transition-opacity">Отзывы</a></li>
                <li><a href="#articles" className="hover:opacity-100 transition-opacity">Статьи</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@logocentr.ru</li>
                <li>г. Москва, ул. Примерная, д. 10</li>
                <li>Пн-Пт: 9:00-20:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 ЛогоЦентр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
