from django.apps import AppConfig

class DevotionsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'devotions'
    
    def ready(self):
        try:
            import devotions.signals
        except ImportError:
            pass
