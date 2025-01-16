# Utiliser l'image de base Eclipse
# FROM eclipse-temurin:21-jdk-alpine
FROM eclipse-temurin:17-jdk-alpine

# Créer un volume pour les fichiers temporaires
VOLUME /tmp

# Copier le fichier JAR généré dans l'image
COPY target/*.jar app.jar

# Exécuter l'application avec Java
ENTRYPOINT ["java", "-jar", "/app.jar"]

# Construire l'image : docker build -t voyage-connect .
# Exécuter le conteneur : docker run -p 8080:8080 voyage-connect