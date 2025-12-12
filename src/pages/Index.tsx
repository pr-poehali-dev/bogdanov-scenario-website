import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const navigation = [
  { name: 'Главная', href: '#hero' },
  { name: 'Портфолио', href: '#portfolio' },
  { name: 'О мне', href: '#about' },
  { name: 'Услуги', href: '#services' },
  { name: 'Блог', href: '#blog' },
  { name: 'Отзывы', href: '#testimonials' },
  { name: 'Контакты', href: '#contacts' },
];

const projects = [
  {
    id: 1,
    title: 'Тени прошлого',
    type: 'Художественный фильм',
    description: 'Драма о семейных тайнах, которые всплывают спустя десятилетия',
    year: '2023',
    image: 'https://cdn.poehali.dev/projects/c19987b3-06bc-42cc-a513-9452a741087a/files/997d7687-449c-42b8-9a09-acb56c0f9dde.jpg',
  },
  {
    id: 2,
    title: 'Последний рейс',
    type: 'Сериал 8 серий',
    description: 'Триллер о пилоте, который узнает тайну авиакомпании',
    year: '2022',
    image: 'https://cdn.poehali.dev/projects/c19987b3-06bc-42cc-a513-9452a741087a/files/19ef41ae-cf02-40bd-90aa-0a236868f88f.jpg',
  },
  {
    id: 3,
    title: 'Городские легенды',
    type: 'Документальный цикл',
    description: 'Истории людей, которые изменили облик современного города',
    year: '2024',
    image: 'https://cdn.poehali.dev/projects/c19987b3-06bc-42cc-a513-9452a741087a/files/302de4b7-6e18-434b-acf1-e7fec594851e.jpg',
  },
];

const services = [
  {
    title: 'Сценарии для кино',
    description: 'Полнометражные художественные фильмы любых жанров',
    icon: 'Film',
  },
  {
    title: 'Сериалы',
    description: 'Многосерийные проекты с проработанной драматургией',
    icon: 'Tv',
  },
  {
    title: 'Адаптация',
    description: 'Переработка книг и пьес для экрана',
    icon: 'BookOpen',
  },
  {
    title: 'Консультации',
    description: 'Экспертная оценка и доработка существующих сценариев',
    icon: 'MessageCircle',
  },
];

const testimonials = [
  {
    name: 'Александр Петров',
    role: 'Режиссёр, киностудия "Мосфильм"',
    text: 'Сергей — мастер диалогов. Его персонажи говорят так, как будто они живые люди, а не слова на бумаге. Работать с ним — удовольствие.',
    avatar: '🎬',
  },
  {
    name: 'Елена Соколова',
    role: 'Продюсер, ТВ-канал "Первый"',
    text: 'Богданов умеет держать зрителя в напряжении. Его сценарии всегда имеют крепкую структуру и неожиданные повороты.',
    avatar: '📺',
  },
  {
    name: 'Игорь Максимов',
    role: 'Кинопродюсер, независимый',
    text: 'За 15 лет в индустрии я работал со многими сценаристами. Сергей — один из тех, кто действительно понимает кино изнутри.',
    avatar: '🎥',
  },
];

const blogPosts = [
  {
    id: 1,
    title: 'Как создать запоминающегося героя',
    excerpt: 'Пять принципов построения характера, которые работают в любом жанре...',
    date: '15 ноября 2024',
    readTime: '8 мин',
  },
  {
    id: 2,
    title: 'Диалог vs Действие: что важнее?',
    excerpt: 'Разбираем классические и современные подходы к драматургии...',
    date: '3 ноября 2024',
    readTime: '6 мин',
  },
  {
    id: 3,
    title: 'Анатомия второго акта',
    excerpt: 'Почему середина фильма — самая сложная часть сценария и как с этим работать...',
    date: '20 октября 2024',
    readTime: '10 мин',
  },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#hero" className="text-2xl font-bold font-sans tracking-tight">
              Богданов<span className="text-primary">.</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 animate-fade-in">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary text-sm font-semibold">Сценарист · Драматург</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-sans mb-6 leading-tight">
                Богданов
                <br />
                <span className="text-primary">Сергей</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Превращаю идеи в истории, которые остаются в сердцах зрителей. 
                Более 50 реализованных проектов за 12 лет в индустрии.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="font-semibold">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Связаться
                </Button>
                <Button size="lg" variant="outline" className="font-semibold">
                  <Icon name="Download" size={20} className="mr-2" />
                  Портфолио PDF
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/c19987b3-06bc-42cc-a513-9452a741087a/files/302de4b7-6e18-434b-acf1-e7fec594851e.jpg"
                  alt="Сергей Богданов"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50 animate-float" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Избранные проекты последних лет</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden cursor-pointer border-2 transition-all duration-300 hover:border-primary hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-background to-transparent transition-opacity duration-300 ${
                    activeProject === project.id ? 'opacity-90' : 'opacity-60'
                  }`} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary/80 rounded-full text-xs font-semibold mb-2">
                      {project.year}
                    </span>
                    <h3 className="text-2xl font-bold font-sans mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-sans mb-8">О сценаристе</h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Я верю, что хорошая история начинается с честного взгляда на человека. 
                  Не героя, не злодея — просто человека со своими надеждами и страхами.
                </p>
                <p>
                  За 12 лет работы в индустрии я написал сценарии для художественных фильмов, 
                  сериалов и документальных проектов. Мои работы выходили на центральных 
                  телеканалах и участвовали в российских кинофестивалях.
                </p>
                <p>
                  Моя специализация — драматургия с глубокой проработкой персонажей. 
                  Я работаю в разных жанрах, но всегда остаюсь верен главному принципу: 
                  история должна трогать, а не просто развлекать.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Наград</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 border-2">
                <h3 className="text-2xl font-bold font-sans mb-6">Образование & Опыт</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="GraduationCap" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">ВГИК, Факультет сценарного мастерства</div>
                      <div className="text-sm text-muted-foreground">2008-2013</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Icon name="Briefcase" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Главный сценарист, "Кинокомпания CTB"</div>
                      <div className="text-sm text-muted-foreground">2018-2022</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Лауреат премии "Золотое перо"</div>
                      <div className="text-sm text-muted-foreground">2021, 2023</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">Что я могу сделать для вашего проекта</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-sans mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4">Отзывы</h2>
            <p className="text-xl text-muted-foreground">Что говорят режиссёры и продюсеры</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="p-8 border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-6xl mb-6">{testimonial.avatar}</div>
                <p className="text-lg leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold font-sans">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground">Мысли о сценарном мастерстве</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-sans mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                    Читать далее
                    <Icon name="ArrowRight" size={20} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Давайте обсудим ваш проект</p>
          </div>

          <Card className="p-8 md:p-12 border-2">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:bogdanov@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    bogdanov@example.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Телефон</div>
                  <a href="tel:+79001234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (900) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="MessageSquare" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Telegram</div>
                  <a href="https://t.me/bogdanov" className="text-muted-foreground hover:text-primary transition-colors">
                    @bogdanov
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Город</div>
                  <div className="text-muted-foreground">Москва, Россия</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button size="lg" className="font-semibold">
                <Icon name="Send" size={20} className="mr-2" />
                Написать мне
              </Button>
              <Button size="lg" variant="outline" className="font-semibold">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать резюме
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold font-sans mb-2">
                Богданов<span className="text-primary">.</span>
              </div>
              <p className="text-sm text-muted-foreground">Сценарист · Драматург</p>
            </div>

            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="rounded-full">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>

            <div className="text-sm text-muted-foreground text-center md:text-right">
              © 2024 Сергей Богданов. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
