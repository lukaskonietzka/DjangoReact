# Quickview Django

### Dieser kurze Artikel soll über die wichtigsten Kommandos in Django berichten.

1. **Die Datei *manage.py***
    - Diese Datei ist der Einstiegspunkt unseres Backends und wird von Django automatisch generiert, wenn man ein neues
    projekt anlegt. Die Datei liegt direkt im *backend* Verzeichnis. Fast alle Kommandos gehen über dieses File.

2. **Die Datenbank:**
    - Django bringt eine relationale Datenbank mit, die es uns erlaubt Zustände abzuspeichern. Hierzu verwenden wir die
    Datei *models.py*. Hier wird eine Klasse definiert, deren Felder die Spalten in der Datenbank abbilden.
    - Migrieren der Datenbank:
        - Wurde eine Datenbank neu erstellt, so muss sie zu Beginn migriert werden. Dies geschieht über den Befehl
        ````
        python manage.py migrate
        ````
        In der entsprechenden App wird dann ein Verzeichnis *migrations* angelegt, welches als fallback dienen soll.
        - Wurden nur Änderungen vorgenommen, kann die Datenbank einfach aktualisiert werden mit:
        ````
        python manage.py makemigrations
        ````

3. **Einen Super-User erstellen:**
    - Damit wir die Datenbank auch verwalten können, müssen wir uns einen Super-user erstellen. Damit gelangen wir dann
    auch auf die Admin-Seite:
    ````
    python manage.py createsuperuser
   ````
   Anschließend einen Namen und ein Passwort vergeben

4. **Starten des Servers:**
    ````
    python manage.py runserver
    ````

