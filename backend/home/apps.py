from django.apps import AppConfig


class HomeConfig(AppConfig):
    name = "home"
    
    def ready(self):
        try:
            import home.signals
        except ImportError:
            pass
            