web: gunicorn TAWeb.wsgi --chdir backend --limit-request-line 8188 --log-file -
worker: REMAP_SIGTERM=SIGQUIT celery --workdir backend --app=TAWeb worker --loglevel=info
beat: REMAP_SIGTERM=SIGQUIT celery --workdir backend --app=TAWeb beat -S redbeat.RedBeatScheduler --loglevel=info
