# Django Fundamentals & Core Architecture

## 1. Django Fundamentals & Architecture
* What is the core design philosophy of Django ("batteries-included"), and how does its Model-View-Template (MVT) pattern manage the lifecycle of an HTTP request?
* What are the primary trade-offs of using a monolithic, full-stack framework like Django compared to micro-frameworks (like FastAPI or Flask)?

## 2. Django Apps (Modular Architecture)
* What is an "app" in Django, and how does the separation of multiple apps within a single project enforce modularity and code reusability?
* How does Django register, configure, and wire up individual apps within the global project settings using `INSTALLED_APPS` and `AppConfig`?

## 3. Models (Data Layer)
* How do Django Models map Python classes to database tables, and what is the role of field types, options (`null`, `blank`, `unique`), and the built-in database API?
* How do you define relationships (`ForeignKey`, `OneToOneField`, `ManyToManyField`) and manage database table schema changes using Django's migration engine?

## 4. Views (Business Logic Layer)
* What are the structural and execution differences between **Function-Based Views (FBVs)** and **Class-Based Views (CBVs)** in Django?
* How do HTTP requests, context data dictionaries, and HttpResponse/JsonResponse objects flow through a Django view handler?

## 5. Templates (Presentation Layer)
* How does Django's template engine render dynamic HTML using variable evaluation, template tags, and built-in filters?
* How do template inheritance (`{% extends %}` and `{% block %}`) and template fragmentation ensure DRY (Don't Repeat Yourself) UI code?

## 6. Admin, Forms, and Django REST Framework (DRF)
* How does Django's built-in **Admin** leverage model registrations to provide an automated, secure back-office interface out of the box?
* What are the key architectural differences between Django's native HTML **Forms** (and ModelForms) versus **DRF Serializers** for input validation, data parsing, and API serialization?
