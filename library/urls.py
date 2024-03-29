from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from store.views import BookViewSet, auth, test, UserBooksRelationView


router = SimpleRouter()
router.register(r'book', BookViewSet)
router.register(r'book_relation', UserBooksRelationView)

urlpatterns = [
    path('admin/', admin.site.urls),
    url('', include('social_django.urls', namespace='social')),
    path('auth/', auth),
    path('test/', test)
]

urlpatterns += router.urls
