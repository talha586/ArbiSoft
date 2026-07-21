# Django & ORM Concepts

## 1. Framework & ORM Comparisons
* How do **Django ORM**, **SQLAlchemy**, and **Prisma** fundamentally differ in their design philosophy, schema definition methods, and migration tooling?
* What are the primary trade-offs between convention-over-configuration frameworks (like Django) and modular toolkits (like SQLAlchemy or Prisma) when building scalable web applications?

## 2. Core Django Architecture & ORM Fundamentals
* What is the Django Object-Relational Mapper (ORM), and how does it abstract raw SQL into Pythonic classes and attributes?
* How do **QuerySets** work in Django, why are they "lazy," and at what exact points do they trigger database evaluation?

## 3. Relationships & Database Modeling
* How do you implement **Many-to-One (`ForeignKey`)**, **One-to-One (`OneToOneField`)**, and **Many-to-Many (`ManyToManyField`)** relationships in Django models?
* What is the purpose of the `on_delete` parameter in foreign keys, and what are the functional differences between behaviors like `CASCADE` and `PROTECT`?

## 4. Migrations & Schema Management
* How does Django's migration system track changes from `models.py` files, and what is the difference in execution between `makemigrations` and `migrate`?
* How can you safely write and apply data migrations or handle custom schema modifications without breaking production database integrity?
* 
