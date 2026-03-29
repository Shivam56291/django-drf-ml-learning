from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"employees", views.EmployeeViewSet, basename="employee")

urlpatterns = [
    path("students/", views.studentsView),
    path("students/<int:pk>/", views.studentDetailView),

    # path("employees/", views.Employees.as_view()),
    # path("employees/<str:pk>/", views.EmployeeDetail.as_view()),

    path("", include(router.urls)),
]