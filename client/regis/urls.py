from django.urls import path
from .views import UserList, UserDetail
urlpatterns = [
    path('api/', UserList.as_view()),
    path('api/<str:email>', UserDetail.as_view())
]