# Quickstart für Entwickler
### Um mit dem Entwickeln zu beginnen, bitte folgende Befehle beachten und ausführen:

1. **An eine beliebige Stelle navigieren und das Repository über den Button *Code* per *ssh* oder *https* klonen mit:**
   ````
   git clone [repo]
   ````
   Wenn kein *git* installiert ist, dann hier einmal herunterladen und installieren: https://git-scm.com/downloads
2. **In den Ordner *backend* wechseln und alle packages installieren mit:**
   ````
   cd backend
   pip freeze
   ````
   Mit diesem Befehl werden alle Packages installiert, die in dem File *requirements.txt* angegeben sind

3. **Dann in den Ordner *frontend* wechseln und alle Packages installieren mit:**
   ````
   cd frontend
   npm install
   ````
   
4. **Dann eine Zweite Konsole öffnen**
    - **Auf der einen wechseln wir in den *frontend* Ordner und starten den Frontend-Server:**
      ````
      cd frontend
      npm start
      ````
      Das Starten des Servers sollte dazu führen, das im Browser eine Website aufgeht
   
    - **Auf der anderen Konsole wechseln wir in den *backend* Ordner und starten den Backend-Server:**
      ````
      cd backend
      python manage.py runserver
      ````
      
5. **Laufen beide Server ohne Probleme, so kann die Anwendung verwendet und modifiziert werden**


6. **Wurden während der Entwicklung neue Packages installiert, muss die *requirements.txt* aktualisiert werden.
   Hierzu einfach folgenden befehle im Ordner *backend* ausführen:**
   ````
   cd backend
   pip freeze > requirements.txt
   ````
   Es werden jedoch nur Module aufgelistet, die via *pip* installiert wurden.